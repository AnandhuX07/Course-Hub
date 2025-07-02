// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "./Adminreg.css";

// // images
// import logo1 from '../images/Login/logo1.png';
// import logo2 from '../images/Login/logo2.png';
// import logo3 from '../images/Login/logo3.png';
// import logo4 from '../images/Login/logo4.png';


// const Adminreg = () => {
//   const [credentials, setCredentials] = useState({
//     username: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setCredentials(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://127.0.0.1:8000/api/token/", credentials);

//       if (res.data.is_admin) {
//         localStorage.setItem("access", res.data.access);
//         localStorage.setItem("refresh", res.data.refresh);
//         localStorage.setItem("is_admin", true);
//         alert("Admin login successful!");
//         navigate("/admin/dashboard");
//       } else {
//         alert("Access denied. You are not an admin.");
//       }
//     } catch (err) {
//       alert("Login failed. Please check your username and password.");
//       console.error(err.response?.data);
//     }
//   };

//   return (
//     <>
//       <div className='Admin-container'>
//         <div className='Admin-header-container'>
//           <div className='Admin-header-h1'>
//             <h1>Admin Log In</h1>
//             <div className='Admin-header-content'>
//               <h4><Link to="/">Home</Link></h4>
//               <span>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -960 960 960" fill="#000000">
//                   <path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z" />
//                 </svg>
//               </span>
//               <h4>Admin Login</h4>
//             </div>
//           </div>

//           <div className='logo-shapes-container'>
//             <div className='logo-shape-1'><img src={logo1} alt='logo1' /></div>
//             <div className='logo-shape-2'><img src={logo2} alt='logo2' /></div>
//             <div className='logo-shape-3'><img src={logo3} alt='logo3' /></div>
//             <div className='logo-shape-4'><img src={logo4} alt='logo4' /></div>
//           </div>
//         </div>

//         {/* Admin login form */}
//         <div className='Admin-form-container'>
//           <div className='Admin-card'>
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//               <label>Username</label>
//               <input
//                 className='input1'
//                 type='text'
//                 name='username'
//                 value={credentials.username}
//                 onChange={handleChange}
//                 placeholder='Username'
//                 required
//               />

//               <label>Password</label>
//               <input
//                 className='input2'
//                 type='password'
//                 name='password'
//                 value={credentials.password}
//                 onChange={handleChange}
//                 placeholder='Password'
//                 required
//               />

//               <div className='form-button'>
//                 <button type='submit'>Log In</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Adminreg;
