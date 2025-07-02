import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MainCourse.css';

const MainCourse = () => {
  const [courses, setCourses] = useState([]);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access');
    setIsAuthenticated(!!token);

    // Fetch all courses
    axios.get('http://127.0.0.1:8000/api/courses/', {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    })
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Course fetch error:', err));

    // If logged in, fetch enrolled courses
    if (token) {
      axios.get('http://127.0.0.1:8000/api/profile/', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then((res) => {
          const enrolledIds = res.data.courses.enrolled.map(c => c.id);
          setEnrolledCourseIds(enrolledIds);
        })
        .catch((err) => console.error('Enrollment fetch error:', err));
    }
  }, []);

  const handlePurchase = (courseId) => {
    const token = localStorage.getItem('access');
    if (!token) return alert('Please login to purchase a course.');

    axios.post('http://127.0.0.1:8000/api/enroll/', { course_id: courseId }, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        alert('Course purchased successfully!');
        setEnrolledCourseIds(prev => [...prev, courseId]);
      })
      .catch((err) => {
        if (err.response?.data?.message === "Already enrolled") {
          alert("You have already purchased this course.");
        } else {
          alert("Purchase failed.");
        }
      });
  };

  return (
    <div className="main-course-wrapper">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courses.map(course => (
          <div className="course-card" key={course.id}>
            <div className="course-img">
              <img
                src={course.thumbnail}
                alt={course.course_name}
                className="course-image"
              />
              <span className="category-tag">{course.course_type.toUpperCase()}</span>
            </div>
            <div className="course-info">
              <h3>{course.course_name}</h3>
              <p>{course.course_description}</p>
              <p className="lessons">{course.total_lessons} Lessons</p>
              <div className="price-section">
                <span className="price">₹{course.course_offer_price || course.course_price}</span>
                {course.course_offer_price && (
                  <span className="old-price">₹{course.course_price}</span>
                )}
              </div>

              {/* Purchase Button Logic */}
              {enrolledCourseIds.includes(course.id) ? (
                <button className="purchased-btn" disabled>Already Purchased</button>
              ) : (
                <button
                  onClick={() => handlePurchase(course.id)}
                  disabled={!isAuthenticated}
                  className={`purchase-button ${!isAuthenticated ? 'login-required-btn' : ''}`}
                >
                  {isAuthenticated ? 'Purchase' : 'Login to Purchase'}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCourse;
