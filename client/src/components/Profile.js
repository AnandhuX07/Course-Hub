import React, { useEffect, useState } from 'react';
import './Profile.css';
import axios from 'axios';
import img1 from "./images/Profile/profile_photo.png"
import { useNavigate , Link} from 'react-router-dom';
import {
  FaBookOpen, FaCertificate, FaUser, FaInbox,
  FaGraduationCap, FaHeart, FaStar, FaQuestionCircle, FaSignOutAlt
} from 'react-icons/fa';

const Profile = () => {
  const [user, setUser] = useState({ username: 'Guest', email: '', profile_picture: '' });
  const [stats, setStats] = useState({ enrolled: 0, active: 0, completed: 0 });
  const [courses, setCourses] = useState({ enrolled: [], active: [], completed: [] });

   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access');
    if (!token) return;

    axios.get('http://127.0.0.1:8000/api/profile/', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {
      setUser(res.data.user);
      setStats(res.data.stats);
      setCourses(res.data.courses);
    })
    .catch((err) => {
      console.error("Profile fetch failed:", err.response?.data || err.message);
      if (err.response?.status === 401) {
        localStorage.removeItem('access');
      }
    });
  }, []);
   const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('is_admin');
    navigate('/login');
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        <div className="profile-info">
            <img src={img1}/>
          <div>
            <h2>{user.username}</h2>
            <p><FaBookOpen /> {stats.enrolled} Courses Enrolled &nbsp;&nbsp; <FaCertificate /> {stats.completed} Certificates</p>
          </div>
        </div>
        <button className="enroll-btn">Enroll A New Course →</button>
      </div>

      <div className="profile-body">
        <aside className="sidebar">
          <p className="welcome">WELCOME, {user.username.toUpperCase()}</p>
          <ul>
            <li className="active"><FaUser /> Dashboard</li>
            <li onClick={() => navigate("/myprofile")}><FaUser /> My Profile</li>
            <li><FaInbox /> Message </li>
            <li onClick={() => navigate("/mycourses")}><FaBookOpen /> Enrolled Courses</li>
            <li><FaHeart /> Wishlist</li>
            <li><FaStar /> Reviews</li>
            <li><FaQuestionCircle /> My Quiz Attempts</li>
            <Link to='/courses' className='no-line'><li><FaBookOpen />Courses</li></Link>
            <li onClick={handleLogout} className="logout"><FaSignOutAlt /> Logout</li>
          </ul>
        </aside>

        <main className="summary">
          <h3>Summary</h3>
          <div className="cards">
            <div className="card">
              <FaCertificate className="icon" />
              <div>
                <h2>{stats.enrolled}</h2>
                <p>Enrolled Courses</p>
              </div>
            </div>
            <div className="card">
              <FaGraduationCap className="icon" />
              <div>
                <h2>{stats.active}</h2>
                <p>Active Courses</p>
              </div>
            </div>
            <div className="card">
              <FaUser className="icon" />
              <div>
                <h2>{stats.completed}</h2>
                <p>Completed Courses</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
