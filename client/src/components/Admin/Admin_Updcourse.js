import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Admin_Updcourse.css";

import logo1 from '../images/Login/logo1.png';
import logo2 from '../images/Login/logo2.png';
import logo3 from '../images/Login/logo3.png';
import logo4 from '../images/Login/logo4.png';

const Admin_Updcourse = () => {
  const { id } = useParams(); // Get course ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    course_name: '',
    course_price: '',
    course_offer_price: '',
    course_description: '',
    course_type: '',
    course_status: '',
    thumbnail: null,
  });

  // Fetch course data on mount
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const token = localStorage.getItem("access");
        const res = await axios.get(`http://127.0.0.1:8000/api/courses/${id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFormData({
          ...res.data,
          thumbnail: null, // Don't pre-fill file input
        });
      } catch (err) {
        alert("Failed to load course data.");
        console.error(err);
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = new FormData();
    for (let key in formData) {
      if (formData[key] !== null && formData[key] !== '') {
        updatedData.append(key, formData[key]);
      }
    }

    try {
      const token = localStorage.getItem("access");
      await axios.put(`http://127.0.0.1:8000/api/courses/${id}/`, updatedData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Course updated successfully!");
      navigate("/admin/dashboard"); // redirect after update
    } catch (error) {
      console.error(error.response?.data);
      alert("Failed to update course.");
    }
  };

  return (
    <>
      <div className='upd-course-header-containerr'>
        <div className='upd-course-header-h1'>
          <h1>Update Course</h1>
          <div className='upd-course-header-content'>
            <h4><Link to="/">Home</Link></h4>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960" fill="#000000">
                <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z" />
              </svg>
            </span>
            <h4>Update Course</h4>
          </div>
        </div>
      </div>

      <div className='logo-shapes-container'>
        <div className='logo-shape-1'><img src={logo1} alt='logo1' /></div>
        <div className='logo-shape-2'><img src={logo2} alt='logo2' /></div>
        <div className='logo-shape-3'><img src={logo3} alt='logo3' /></div>
        <div className='logo-shape-4'><img src={logo4} alt='logo4' /></div>
      </div>

      <div className='upd-course-form-container'>
        <div className='upd-course-card'>
          <h1>Update Course</h1>
          <p className='upd-course-form-p'>Update Course details here!!</p>

          <form onSubmit={handleSubmit}>
            <div className='upd-course-row-1'>
              <div className='row-1-label1'>
                <label>Course Name</label>
                <input
                  className='upd-course-input1'
                  type='text'
                  name='course_name'
                  value={formData.course_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='row-1-label2'>
                <label>Course Price</label>
                <input
                  className='upd-course-input2'
                  type='number'
                  name='course_price'
                  value={formData.course_price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='upd-course-row-2'>
              <div className='row-2-label1'>
                <label>Course Offer Price</label>
                <input
                  className='upd-course-input3'
                  type='number'
                  name='course_offer_price'
                  value={formData.course_offer_price}
                  onChange={handleChange}
                />
              </div>
              <div className='row-2-label2'>
                <label>Course Description</label>
                <input
                  className='upd-course-input4'
                  type='text'
                  name='course_description'
                  value={formData.course_description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='upd-course-row-3'>
              <div className='row-3-label1'>
                <label>Course Type</label>
                <select
                  className='upd-course-input5'
                  name='course_type'
                  value={formData.course_type}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Type --</option>
                  <option value="paid">Paid</option>
                  <option value="free">Free</option>
                </select>
              </div>

              <div className='row-3-label2'>
                <label>Course Status</label>
                <select
                  className='upd-course-input6'
                  name='course_status'
                  value={formData.course_status}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Status --</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            <div className='row-4'>
              <div className='row-4-label1'>
                <label>Select Image:</label>
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className='upd-course-form-button'>
              <button type='submit'>Update Course</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin_Updcourse;
