import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminLessonView.css';

const AdminLessonView = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const token = localStorage.getItem('access');
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/admin/lessons/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setLessons(response.data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };
    fetchLessons();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('access');
    const confirmDelete = window.confirm("Are you sure you want to delete this lesson?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://127.0.0.1:8000/api/admin/delete-lesson/${id}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLessons(prev => prev.filter(lesson => lesson.id !== id));
      alert("Lesson deleted successfully.");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete lesson.");
    }
  };

  return (
    <div className="lesson-table-container">
      <h2 className="lesson-table-heading">All Lessons</h2>
      <table className="lesson-table">
        <thead>
          <tr>
            <th>Lesson Title</th>
            <th>Order</th>
            <th>Course Name</th>
            <th>Videos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map(lesson => (
            <tr key={lesson.id}>
              <td>{lesson.lesson_title}</td>
              <td>{lesson.lesson_order}</td>
              <td>{lesson.course_name}</td>
              <td>
                {lesson.videos && lesson.videos.length > 0 ? (
                  <ul className="video-list">
                    {lesson.videos.map((video, index) => {
                      // ✅ Add console logs for debugging
                      console.log("Video File:", video.video_file);
                      console.log("Video Upload URL:", video.video_upload_url);

                      return (
                        <li key={index}>
                          <p className="video-title">{video.video_title}</p>

                          {/* Uploaded video file */}
                          {video.video_file && (
                            <video width="300" height="180" controls>
                              <source src={`http://127.0.0.1:8000${video.video_file}`} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}

                          {/* YouTube or external URL */}
                          {!video.video_file && video.video_upload_url && (
                            <iframe
                              width="300"
                              height="180"
                              src={video.video_upload_url}
                              title={video.video_title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <em>No videos</em>
                )}
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(lesson.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLessonView;
