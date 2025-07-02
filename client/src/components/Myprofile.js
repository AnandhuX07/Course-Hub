import React, { useEffect, useState } from 'react';
import './Myprofile.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import img1 from "./images/Profile/profile_photo.png"
import {
    FaBookOpen, FaCertificate, FaUser, FaInbox,
    FaGraduationCap, FaHeart, FaStar, FaQuestionCircle, FaSignOutAlt
} from 'react-icons/fa';

const MyProfile = () => {
    const [user, setUser] = useState({ username: 'Guest', email: '', first_name: '', last_name: '', profile_picture: '' });
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access');
        if (!token) return;

        axios.get('http://127.0.0.1:8000/api/profile/', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => {
                setUser(res.data.user);
            })
            .catch(err => {
                console.error("Profile fetch failed:", err.response?.data || err.message);
            });
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="profile-wrapper">
            <div className="profile-header">
                <div className="profile-info">
                    <img src={img1} />
                    <div>
                        <h2>{user.username}</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
            </div>

            <div className="profile-body">
                <aside className="sidebar">
                    <p className="welcome">WELCOME, {user.username.toUpperCase()}</p>
                    <ul>
                        <Link to='/profile' className='link-no-underline'>
                            <li><FaUser /> Dashboard</li>
                        </Link>
                        <li className="active"><FaUser /> My Profile</li>
                        <li><FaInbox /> Message </li>
                        <li><FaBookOpen /> Enrolled Courses</li>
                        <li><FaHeart /> Wishlist</li>
                        <li><FaStar /> Reviews</li>
                        <li><FaQuestionCircle /> My Quiz Attempts</li>
                        <li onClick={handleLogout} className="logout"><FaSignOutAlt /> Logout</li>
                    </ul>
                </aside>

                <main className="summary">
                    <h3>User Profile Details</h3>
                    <div className="cards">
                        <div className="card">
                            <div>
                                <h2>First Name</h2>
                                <p>{user.first_name}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <h2>Last Name</h2>
                                <p>{user.last_name}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <h2>Email</h2>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default MyProfile;
