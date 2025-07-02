# serializers.py

from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Course , Video , Lesson
from .models import Enrollment 
from rest_framework import serializers
from .models import Course, Video, VideoProgress
# -------------------------------
# User Registration Serializer
# -------------------------------
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'password', 'confirm_password']

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match"})
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        user = User.objects.create_user(**validated_data)

        # Return JWT tokens
        refresh = RefreshToken.for_user(user)
        return {
            'user': user,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        }

# -------------------------------
# Custom Token Serializer (for login)
# -------------------------------
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username
        token['is_admin'] = user.is_staff  # ✅ token data
        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data['username'] = self.user.username
        data['is_admin'] = self.user.is_staff  
        return data



class CourseSerializer(serializers.ModelSerializer):
    total_lessons = serializers.SerializerMethodField()
    videos_watched = serializers.SerializerMethodField()
    total_videos = serializers.SerializerMethodField()
    thumbnail_url = serializers.SerializerMethodField()  # this is for response only

    class Meta:
        model = Course
        fields = '__all__'

    def get_videos_watched(self, obj):
        request = self.context.get('request', None)
        user = request.user if request and request.user.is_authenticated else None

        if user:
            return VideoProgress.objects.filter(
                user=user,
                video__lesson__course=obj,
                watched=True
            ).count()
        return 0

    def get_total_videos(self, obj):
        return Video.objects.filter(lesson__course=obj).count()

    def get_total_lessons(self, obj):
        return obj.lessons.count()

    def get_thumbnail_url(self, obj):
        request = self.context.get('request', None)
        if request and obj.thumbnail:
            return request.build_absolute_uri(obj.thumbnail.url)
        elif obj.thumbnail:
            return obj.thumbnail.url
        return None




class VideoSerializer(serializers.ModelSerializer):
    is_watched = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ['id', 'video_title', 'video_upload_url', 'note', 'thumbnail', 'video_file', 'is_watched']

    def get_is_watched(self, obj):
        user = self.context.get('user')
        if not user or user.is_anonymous:
            return False
        from .models import VideoProgress
        return VideoProgress.objects.filter(user=user, video=obj, watched=True).exists()


class LessonWithVideosSerializer(serializers.ModelSerializer):
    videos = serializers.SerializerMethodField()
    course_name = serializers.CharField(source='course.course_name', read_only=True)

    class Meta:
        model = Lesson
        fields = ['id', 'lesson_title', 'lesson_order', 'course_name', 'videos']

    def get_videos(self, obj):
        user = self.context.get("request").user
        return VideoSerializer(obj.videos.all(), many=True, context={"user": user}).data


class EnrollmentSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True)

    class Meta:
        model = Enrollment
        fields = ['id', 'course', 'completion_status']