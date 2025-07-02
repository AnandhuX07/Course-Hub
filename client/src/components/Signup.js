import React, { useState } from 'react';
import axios from 'axios';
import "./Signup.css";
import { Link, useNavigate } from 'react-router-dom';

import logo1 from "./images/Login/logo1.png";
import logo2 from "./images/Login/logo2.png";
import logo3 from "./images/Login/logo3.png";
import logo4 from "./images/Login/logo4.png";

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://127.0.0.1:8000/api/register/", {
      username: formData.username,
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      password: formData.password,
      confirm_password: formData.confirm_password,
    });

    alert("Signup successful!");
    navigate("/login");
  } catch (err) {
    console.error("SIGNUP ERROR:", err.response?.data || err.message);
    if (err.response?.data && typeof err.response.data === "object") {
      let message = "";
      for (const key in err.response.data) {
        const errorArray = err.response.data[key];
        if (Array.isArray(errorArray)) {
          message += `${key}: ${errorArray.join(" ")}\n`;
        } else {
          message += `${key}: ${errorArray}\n`;
        }
      }
      alert(message);
    } else {
      alert("Something went wrong. Please check your inputs.");
    }
  }
};



  return (
    <div className='signup-container'>
      <div className='signup-header-containerr'>

        <div className='signup-header-h1'>
          <h1>Sign Up</h1>
          <div className='signup-header-content'>
            <h4><Link to="/">Home</Link></h4><span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960" fill="#000000"><path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z" /></svg></span>
            <h4>Sign Up</h4>
          </div>
        </div>
        </div>
        <div className='logo-shapes-container'>
          <div className='logo-shape-1'>
            <img src={logo1} alt='logo1' />
          </div>
          <div className='logo-shape-2'>
            <img src={logo2} alt='logo2' />
          </div>
          <div className='logo-shape-3'>
            <img src={logo3} alt='logo3' />
          </div>
          <div className='logo-shape-4'>
            <img src={logo4} alt='logo4' />
          </div>
        </div>

        <div className='signup-form-container'>
          <div className='signup-card'>
            <h1>Sign Up</h1>
            <p className='signup-form-p'>Already have an account?<Link to="/login"> Log In</Link></p>

            <form onSubmit={handleSubmit}>
              <div className='row-1'>
                <div className='row-1-label1'>
                  <label>First Name</label>
                  <input className='signup-input1' type='text' name='first_name' value={formData.first_name} onChange={handleChange} placeholder='First Name' required />
                </div>
                <div className='row-1-label2'>
                  <label>Last Name</label>
                  <input className='signup-input2' type='text' name='last_name' value={formData.last_name} onChange={handleChange} placeholder='Last Name' required />
                </div>
              </div>

              <div className='row-2'>
                <div className='row-2-label1'>
                  <label>Username</label>
                  <input className='signup-input3' type='text' name='username' value={formData.username} onChange={handleChange} placeholder='Username' required />
                </div>
                <div className='row-2-label2'>
                  <label>Email</label>
                  <input className='signup-input4' type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' required />
                </div>
              </div>

              <div className='row-3'>
                <div className='row-3-label1'>
                  <label>Password</label>
                  <input className='signup-input5' type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' required />
                </div>
                <div className='row-3-label2'>
                  <label>Re-Enter Password</label>
                  <input className='signup-input6' type='password' name='confirm_password' value={formData.confirm_password} onChange={handleChange} placeholder='Re-Enter Password' required />
                </div>
              </div>

              <div className='signup-form-choice'>
                <label><input type='checkbox' required /> Accept the Terms and Privacy Policy</label>
              </div>

              <div className='signup-form-button'>
                <button type='submit'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>

      
    </div>
  );
};

export default Signup;
