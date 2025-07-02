from django.urls import path
from .views import RegisterView, MyTokenObtainPairView, CourseListCreateView, CourseDetailView,AdminLessonListView
from rest_framework_simplejwt.views import TokenRefreshView
from .views import get_all_users,delete_user,EnrollCourseAPIView,UserProfileView,MarkCourseActiveAPIView,MarkCourseCompletedAPIView
from .views import add_lesson_with_videos , delete_lesson , CourseLessonListView , MarkVideoWatchedAPIView


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('courses/', CourseListCreateView.as_view(), name='course-list-create'),  
    path('courses/<int:pk>/', CourseDetailView.as_view(), name='course-detail'),   
    path('users/', get_all_users, name='get_all_users'),
    path('users/delete/<int:user_id>/', delete_user, name='delete_user'),
    path('admin/add-lesson/', add_lesson_with_videos, name='add-lesson'),
    path('admin/lessons/', AdminLessonListView.as_view(), name='admin-lesson-list'),
    path('admin/delete-lesson/<int:lesson_id>/', delete_lesson, name='delete_lesson'),
    path('enroll/', EnrollCourseAPIView.as_view(), name='enroll-course'),
    path('profile/', UserProfileView.as_view(), name='user-profile'),
    path('mark-active/', MarkCourseActiveAPIView.as_view(), name='mark-course-active'),
    path('mark-completed/', MarkCourseCompletedAPIView.as_view(), name='mark-course-completed'),
    path("courses/<int:course_id>/lessons/", CourseLessonListView.as_view(), name="course-lessons"),
    path('lesson-progress/', MarkVideoWatchedAPIView.as_view(), name='lesson-progress'),

]
