import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Admin_Addcourse.css";

import logo1 from '../images/Login/logo1.png';
import logo2 from '../images/Login/logo2.png';
import logo3 from '../images/Login/logo3.png';
import logo4 from '../images/Login/logo4.png';

const Admin_Addcourse = () => {
  const [formData, setFormData] = useState({
    course_name: '',
    course_price: '',
    course_offer_price: '',
    course_description: '',
    course_type: '',
    course_status: '',
    thumbnail: null
  });

  const fileInputRef = useRef(null); // ✅ for clearing file input

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const courseData = new FormData();
    for (let key in formData) {
      courseData.append(key, formData[key]);
    }

    try {
      const token = localStorage.getItem("access");
      await axios.post("http://127.0.0.1:8000/api/courses/", courseData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
      });

      alert("Course added successfully!");

      setFormData({
        course_name: '',
        course_price: '',
        course_offer_price: '',
        course_description: '',
        course_type: '',
        course_status: '',
        thumbnail: null
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }

    } catch (error) {
      console.error(error.response?.data);
      alert("Failed to add course.");
    }
  };

  return (
    <>
      <div className='add-course-header-containerr'>
        <div className='add-course-header-h1'>
          <h1>Add Course</h1>
          <div className='add-course-header-content'>
            <h4><Link to="/">Home</Link></h4>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960" fill="#000000">
                <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z" />
              </svg>
            </span>
            <h4>Add course</h4>
          </div>
        </div>
      </div>

      <div className='logo-shapes-container'>
        <div className='logo-shape-1'><img src={logo1} alt='logo1' /></div>
        <div className='logo-shape-2'><img src={logo2} alt='logo2' /></div>
        <div className='logo-shape-3'><img src={logo3} alt='logo3' /></div>
        <div className='logo-shape-4'><img src={logo4} alt='logo4' /></div>
      </div>

      <div className='add-course-form-container'>
        <div className='add-course-card'>
          <h1>Add Course</h1>
          <p className='add-course-form-p'>Add Course details here!!</p>

          <form onSubmit={handleSubmit}>
            <div className='add-course-row-1'>
              <div className='row-1-label1'>
                <label>Course Name</label>
                <input
                  className='add-course-input1'
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
                  className='add-course-input2'
                  type='number'
                  name='course_price'
                  value={formData.course_price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='add-course-row-2'>
              <div className='row-2-label1'>
                <label>Course Offer Price</label>
                <input
                  className='add-course-input3'
                  type='number'
                  name='course_offer_price'
                  value={formData.course_offer_price}
                  onChange={handleChange}
                />
              </div>
              <div className='row-2-label2'>
                <label>Course Description</label>
                <input
                  className='add-course-input4'
                  type='text'
                  name='course_description'
                  value={formData.course_description}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='add-course-row-3'>
              <div className='row-3-label1'>
                <label>Course Type</label>
                <select
                  className='add-course-input5'
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
                  className='add-course-input6'
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
                  ref={fileInputRef}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className='add-course-form-button'>
              <button type='submit'>Add Course</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin_Addcourse;
