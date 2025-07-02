from django.contrib import admin
from django.utils.html import format_html
from .models import Course, Lesson, Video, Enrollment

class CourseAdmin(admin.ModelAdmin):
    list_display = ('course_name', 'course_price', 'get_thumbnail')

    def get_thumbnail(self, obj):
        if obj.thumbnail and hasattr(obj.thumbnail, 'url'):
            return format_html('<img src="{}" width="100" height="60" />', obj.thumbnail.url)
        return "No Image"

    get_thumbnail.short_description = 'Thumbnail'

admin.site.register(Course, CourseAdmin)
admin.site.register(Lesson)
admin.site.register(Video)
admin.site.register(Enrollment)
