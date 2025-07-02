# views.py

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
from .models import Course , VideoProgress
from .serializers import CourseSerializer 
from rest_framework.permissions import IsAdminUser , IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListCreateAPIView
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.views.decorators.http import require_http_methods
import json
from .models import Course, Lesson, Video , Enrollment
from rest_framework.decorators import api_view, permission_classes
import logging
from .serializers import LessonWithVideosSerializer
from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny  


class RegisterView(APIView):
    permission_classes = [AllowAny] 
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.save()  # returns tokens
            return Response({
                "user": {
                    "username": data['user'].username,
                    "email": data['user'].email
                },
                "access": data["access"],
                "refresh": data["refresh"]
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class CourseListCreateView(ListCreateAPIView):  
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_serializer_context(self):
        return {'request': self.request}
    
class CourseDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [AllowAny]

@csrf_exempt
def get_all_users(request):
    if request.method == 'GET':
        users = User.objects.all().values('id', 'username', 'email', 'is_staff', 'date_joined')
        return JsonResponse(list(users), safe=False)
    
@csrf_exempt
@require_http_methods(["DELETE"])
def delete_user(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
        user.delete()
        return JsonResponse({'message': 'User deleted successfully'}, status=200)
    except User.DoesNotExist:
        return JsonResponse({'error': 'User not found'}, status=404)



    
@api_view(['POST'])
@permission_classes([IsAdminUser])
def add_lesson_with_videos(request):
    try:
        course_id = request.data.get('course')
        lesson_title = request.data.get('lesson_title')
        lesson_order = request.data.get('lesson_order')

        if not (course_id and lesson_title and lesson_order):
            return Response({'error': 'Missing required lesson fields.'}, status=status.HTTP_400_BAD_REQUEST)

        course = Course.objects.get(id=course_id)
        lesson = Lesson.objects.create(
            course=course,
            lesson_title=lesson_title,
            lesson_order=lesson_order
        )

        video_count = int(request.data.get('video_count', 0))

        for i in range(video_count):
            prefix = f'videos[{i}]'
            video_title = request.data.get(f'{prefix}[video_title]')
            video_url = request.data.get(f'{prefix}[video_upload_url]', '')
            note = request.data.get(f'{prefix}[note]', '')
            thumbnail = request.FILES.get(f'{prefix}[thumbnail]')
            video_file = request.FILES.get(f'{prefix}[video_file]')

            Video.objects.create(
                lesson=lesson,
                video_title=video_title,
                video_upload_url=video_url,
                note=note,
                thumbnail=thumbnail,
                video_file=video_file
            )

        return Response({'message': 'Lesson and videos added successfully!'}, status=status.HTTP_201_CREATED)

    except Course.DoesNotExist:
        return Response({'error': 'Course not found.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        logging.exception("Unexpected error during lesson creation")
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
class AdminLessonListView(ListAPIView):
    queryset = Lesson.objects.all().order_by('lesson_order')
    serializer_class = LessonWithVideosSerializer
    permission_classes = [IsAdminUser]


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def delete_lesson(request, lesson_id):
    try:
        lesson = Lesson.objects.get(id=lesson_id)
        lesson.delete()
        return Response({'message': 'Lesson deleted successfully'}, status=status.HTTP_200_OK)
    except Lesson.DoesNotExist:
        return Response({'error': 'Lesson not found'}, status=status.HTTP_404_NOT_FOUND)
    


class EnrollCourseAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        course_id = request.data.get('course_id')
        try:
            course = Course.objects.get(id=course_id)
            existing = Enrollment.objects.filter(user=request.user, course=course).first()
            if existing:
                return Response({"message": "Already enrolled"}, status=status.HTTP_400_BAD_REQUEST)

            Enrollment.objects.create(
                user=request.user,
                course=course,
                completion_status='enrolled'
            )
            return Response({"message": "Enrolled successfully"})

        except Course.DoesNotExist:
            return Response({"error": "Course not found"}, status=404)


class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        enrollments = Enrollment.objects.filter(user=user)

        enrolled_courses = [e.course for e in enrollments.filter(completion_status='enrolled')]
        active_courses = [e.course for e in enrollments.filter(completion_status='active')]
        completed_courses = [e.course for e in enrollments.filter(completion_status='completed')]

        # ✅ Pass the request in the context for serializers
        serializer_context = {'request': request}

        return Response({
            "user": {
                "username": user.username,
                "email": user.email,
                "profile_picture": user.profile.profile_picture.url if hasattr(user, 'profile') and user.profile.profile_picture else "",
                "first_name": user.first_name,
                "last_name": user.last_name,
            },
            "stats": {
                "enrolled": len(enrolled_courses),
                "active": len(active_courses),
                "completed": len(completed_courses),
            },
            "courses": {
                "enrolled": CourseSerializer(enrolled_courses, many=True, context=serializer_context).data,
                "active": CourseSerializer(active_courses, many=True, context=serializer_context).data,
                "completed": CourseSerializer(completed_courses, many=True, context=serializer_context).data,
            }
        })


class MarkCourseActiveAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        course_id = request.data.get("course_id")
        try:
            enrollment = Enrollment.objects.get(user=request.user, course_id=course_id)
            if enrollment.completion_status == "enrolled":
                enrollment.completion_status = "active"
                enrollment.save()
            return Response({"status": enrollment.completion_status})
        except Enrollment.DoesNotExist:
            return Response({"error": "Not enrolled"}, status=404)


class MarkCourseCompletedAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        course_id = request.data.get("course_id")
        try:
            enrollment = Enrollment.objects.get(user=request.user, course_id=course_id)
            enrollment.completion_status = "completed"
            enrollment.save()
            return Response({"status": "completed"})
        except Enrollment.DoesNotExist:
            return Response({"error": "Not enrolled"}, status=404)
        

class CourseListView(ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [AllowAny]
        

class CourseLessonListView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, course_id):
        try:
            course = Course.objects.get(id=course_id)
            lessons = Lesson.objects.filter(course=course).order_by("lesson_order")
            serializer = LessonWithVideosSerializer(lessons, many=True, context={'request': request})  # ✅ important
            return Response(serializer.data)
        except Course.DoesNotExist:
            return Response({"error": "Course not found"}, status=404)
        


class MarkVideoWatchedAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        course_id = request.data.get("course_id")
        video_id = request.data.get("video_id")

        try:
            video = Video.objects.get(id=video_id)
        except Video.DoesNotExist:
            return Response({"error": "Video not found"}, status=404)

        progress, _ = VideoProgress.objects.get_or_create(user=user, video=video)
        progress.watched = True
        progress.save()

        total_videos = Video.objects.filter(lesson__course_id=course_id).count()
        watched_videos = VideoProgress.objects.filter(user=user, video__lesson__course_id=course_id, watched=True).count()

        if total_videos == watched_videos:
            enrollment = Enrollment.objects.filter(user=user, course_id=course_id).first()
            if enrollment:
                enrollment.completion_status = 'completed'
                enrollment.save()

        return Response({
            "message": "Video marked as watched",
            "course_completed": total_videos == watched_videos
        })
