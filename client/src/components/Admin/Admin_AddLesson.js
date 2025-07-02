import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Admin_AddLesson.css";

const Admin_AddLesson = () => {
  const [token, setToken] = useState('');
  const [courses, setCourses] = useState([]);
  const [lesson, setLesson] = useState({ course: '', lesson_title: '', lesson_order: '' });
  const [videos, setVideos] = useState([
    { video_title: '', video_upload_url: '', note: '', thumbnail: null, video_file: null }
  ]);

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (!access) {
      alert("Access token missing. Please log in.");
      return;
    }

    setToken(access);

    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/api/courses/', {
          headers: { Authorization: `Bearer ${access}` }
        });
        setCourses(res.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        alert("Failed to fetch courses.");
      }
    };

    fetchCourses();
  }, []);

  const handleLessonChange = (e) => {
    setLesson({ ...lesson, [e.target.name]: e.target.value });
  };

  const handleVideoChange = (index, e) => {
    const updated = [...videos];
    const { name, value, files } = e.target;
    updated[index][name] = files ? files[0] : value;
    setVideos(updated);
  };

  const addVideo = () => {
    setVideos([...videos, {
      video_title: '', video_upload_url: '', note: '', thumbnail: null, video_file: null
    }]);
  };

  const removeVideo = (index) => {
    const updated = [...videos];
    updated.splice(index, 1);
    setVideos(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Missing access token. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append('course', lesson.course);
    formData.append('lesson_title', lesson.lesson_title);
    formData.append('lesson_order', lesson.lesson_order);
    formData.append('video_count', videos.length);

    videos.forEach((video, i) => {
      for (const key in video) {
        formData.append(`videos[${i}][${key}]`, video[key]);
      }
    });

    try {
      await axios.post('http://127.0.0.1:8000/api/admin/add-lesson/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Lesson and videos added successfully!');
      setLesson({ course: '', lesson_title: '', lesson_order: 1 });
      setVideos([{ video_title: '', video_upload_url: '', note: '', thumbnail: null, video_file: null }]);
    } catch (error) {
      console.error("Submission error:", error);
      alert('Failed to add lesson and videos');
    }
  };

  return (
    <div className="lesson-form-container">
      <h2 className="form-title">Add Lesson with Videos</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="lesson-form">
        <div className="form-group">
          <label>Course</label>
          <select name="course" value={lesson.course} onChange={handleLessonChange} required>
            <option value="">-- Select --</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>{course.course_name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Lesson Title</label>
          <input type="text" name="lesson_title" value={lesson.lesson_title} onChange={handleLessonChange} required />
        </div>

        <div className="form-group">
          <label>Lesson Order</label>
          <input type="number" name="lesson_order" value={lesson.lesson_order} onChange={handleLessonChange} required />
        </div>

        <h3 className="video-section-title">Videos</h3>
        {videos.map((video, index) => (
          <div key={index} className="video-group">
            <input type="text" name="video_title" placeholder="Video Title" value={video.video_title} onChange={(e) => handleVideoChange(index, e)} required />
            <input type="url" name="video_upload_url" placeholder="Video URL (optional)" value={video.video_upload_url} onChange={(e) => handleVideoChange(index, e)} />
            <textarea name="note" placeholder="Note" value={video.note} onChange={(e) => handleVideoChange(index, e)}></textarea>
            <label>Thumbnail Image</label>
            <input type="file" name="thumbnail" accept="image/*" onChange={(e) => handleVideoChange(index, e)} />
            <label>Upload Video File</label>
            <input type="file" name="video_file" accept="video/*" onChange={(e) => handleVideoChange(index, e)} />

            {videos.length > 1 && (
              <button type="button" className="remove-button" onClick={() => removeVideo(index)}>Remove</button>
            )}
          </div>
        ))}

        <button type="button" className="add-button" onClick={addVideo}>+ Add Another Video</button>
        <div className="form-actions">
          <button type="submit" className="submit-button">Submit Lesson</button>
        </div>
      </form>
    </div>
  );
};

export default Admin_AddLesson;
