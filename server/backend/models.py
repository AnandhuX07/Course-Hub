from django.db import models
from django.contrib.auth.models import User

class Course(models.Model):
    COURSE_TYPE_CHOICES = [
        ('paid', 'Paid'),
        ('free', 'Free'),
    ]
    COURSE_STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    course_name = models.CharField(max_length=255, unique=True)
    course_price = models.DecimalField(max_digits=10, decimal_places=2)
    course_offer_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    course_description = models.TextField()
    course_type = models.CharField(max_length=10, choices=COURSE_TYPE_CHOICES)
    course_status = models.CharField(max_length=10, choices=COURSE_STATUS_CHOICES)
    thumbnail = models.ImageField(upload_to='course_thumbnails/')

    
    create_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
    delete_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.course_name


class Lesson(models.Model):
    lesson_title = models.CharField(max_length=255)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='lessons')
    lesson_order = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.course.course_name} - {self.lesson_title}"


class Video(models.Model):
    lesson = models.ForeignKey(Lesson, related_name='videos', on_delete=models.CASCADE)
    video_title = models.CharField(max_length=255)
    video_upload_url = models.URLField(blank=True, null=True)
    note = models.TextField(blank=True)
    thumbnail = models.ImageField(upload_to='video_thumbnails/', blank=True, null=True)
    video_file = models.FileField(upload_to='videos/', blank=True, null=True)

    def __str__(self):
        return self.video_title



class Enrollment(models.Model):
    ENROLLMENT_STATUS_CHOICES = [
        ('enrolled', 'Enrolled'),
        ('active', 'Active'),
        ('completed', 'Completed'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    completion_status = models.CharField(max_length=10, choices=ENROLLMENT_STATUS_CHOICES)

    def __str__(self):
        return f"{self.user.username} - {self.course.course_name}"



class VideoProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    video = models.ForeignKey(Video, on_delete=models.CASCADE)
    watched = models.BooleanField(default=False)

    class Meta:
        unique_together = ('user', 'video')  # prevents duplicates

    def __str__(self):
        return f"{self.user.username} - {self.video.video_title} - Watched: {self.watched}"

