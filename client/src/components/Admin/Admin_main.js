// Admin_main.js
import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from "../images/logo_1.png";
import "./Admin_main.css"

const Admin_main = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("is_admin");
    navigate("/");
  };

  return (
    <>
      <div className="fade-slide-in">
        <div className='same-container'>
          <div className='header-main-container'>
            <img className='logo-img' src={logo} alt="Logo" />
            <ul className='navbar'>
             <Link to="/admin/dashboard/view-courses"><li>View</li></Link>
              <Link to="/admin/dashboard/user"><li>Users</li></Link>
              <Link to="/admin/dashboard/add-course"><li>Add</li></Link>
              {/* <Link to="/admin/dashboard/update-course"><li>Update</li></Link> */}
              <Link to="add-lesson"><li>Lesson</li></Link> 
              <Link to="admin/lessons"><li>View Lesson</li></Link>
            </ul>

            <div className='logo-container'>
              <button onClick={handleLogout} className='profile-button'>Logout</button>
            </div>
          </div>
        </div>
      </div>

      {/* Renders nested routes like View, Add, Update */}
      <Outlet />
    </>
  );
};

export default Admin_main;
