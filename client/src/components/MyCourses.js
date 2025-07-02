import React, { useState, useEffect } from 'react';
import './MyCourses.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const MyCourses = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('enrolled');
  const [courses, setCourses] = useState({ enrolled: [], active: [], completed: [] });

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      navigate('/login');
      return;
    }

    axios.get('http://127.0.0.1:8000/api/profile/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => setCourses(res.data.courses))
      .catch(err => {
        console.error(err);
        if (err.response?.status === 401) {
          navigate('/login');
        }
      });
  }, [navigate]);

  const renderCourses = (courseList) => {
    return courseList.map((course, index) => {
      const watched = course.videos_watched || 0;
      const total = course.total_videos || course.total_lessons || 0;
      const percent = total > 0 ? Math.round((watched / total) * 100) : 0;

      return (
        <div className="course-card" key={index}>
          <div className="course-img-wrapper">
            <img src={course.thumbnail} alt={course.course_name} className="course-img" />
          </div>

          <div className="course-info">
            <div className="meta-info">
              <p className="lessons">{course.total_lessons || 0} Lessons</p>
              <p className="course-type"><strong>Type:</strong> {course.course_type}</p>
              <p className="course-status"><strong>Status:</strong> {course.course_status}</p>
            </div>

            <h3 className="course-title">{course.course_name}</h3>
            <p className="course-description">{course.course_description}</p>

            {/* 🎉 Completed badge */}
            {activeTab === "completed" && (
              <span className="completed-badge">🎉 Completed</span>
            )}

            {/* 📊 Progress bar */}
            {total > 0 && (
              <div className="progress-container">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${percent}%` }} />
                </div>
                <p className="progress-text">Watched {watched}/{total} videos</p>
              </div>
            )}

            <div className="price">
              ₹{course.course_offer_price ?? course.course_price}
              <span className="original-price">₹{course.course_price}</span>
              {course.course_type === 'free' && <span className="free-label">Free</span>}
            </div>

            {(activeTab === "enrolled" || activeTab === "active") && (
              <Link to={`/course/${course.id}/lessons`}>
                <button className="start-button">Start Learning</button>
              </Link>
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="mycourses-container">
      <div className="tabs">
        <button className={activeTab === 'enrolled' ? 'active' : ''} onClick={() => setActiveTab('enrolled')}>Enrolled Courses</button>
        <button className={activeTab === 'active' ? 'active' : ''} onClick={() => setActiveTab('active')}>Active Courses</button>
        <button className={activeTab === 'completed' ? 'active' : ''} onClick={() => setActiveTab('completed')}>Completed Courses</button>
      </div>

      <div className="course-list">
        {renderCourses(courses[activeTab])}
      </div>
    </div>
  );
};

export default MyCourses;
