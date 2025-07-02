import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Admin_View.css';

const Admin_View = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("access");
        const res = await axios.get('http://127.0.0.1:8000/api/courses/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCourses(res.data);
        console.log("Course Thumbnails:", courses.map(c => c.thumbnail));
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      const token = localStorage.getItem("access");
      await axios.delete(`http://127.0.0.1:8000/api/courses/${id}/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCourses(prev => prev.filter(course => course.id !== id));
      alert("Course deleted successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to delete the course.");
    }

    console.log("Course Thumbnails:", courses.map(c => c.thumbnail));
  };

  return (
    <div className="course-page">
      <h2 className="course-heading">All Courses</h2>
      {courses.length === 0 ? (
        <p className="no-data">No courses found.</p>
      ) : (
        <table className="course-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Offer</th>
              <th>Type</th>
              <th>Status</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.course_name}</td>
                <td>{course.course_price}</td>
                <td>{course.course_offer_price}</td>
                <td>{course.course_type}</td>
                <td>{course.course_status}</td>
                <td>{course.course_description}</td>
                <td>
                  {course.thumbnail ? (
                    <img
                      src={course.thumbnail}
                      alt={course.course_name}
                      className="course-image"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td>
                  <button
                    className="edit-button"
                    onClick={() => navigate(`/admin/dashboard/update-course/${course.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admin_View;
