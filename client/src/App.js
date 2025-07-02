import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Public Pages
import Layout from './components/Layout';
import Mainpage from './components/Mainpage';
import Body from './components/Body';
import Populer_Sub from './components/Populer_Sub';
import Register from './components/Register';
import Purchase_plan from './components/Purchase_plan';
import Courselist from './components/Courselist';
import Blogs from './components/Blogs';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import MyProfile from './components/Myprofile';
import Unauthorized from './components/Unauthorized';
import MyCourses from './components/MyCourses';
import CourseLesson from './components/CourseLesson';

// Admin Pages
import Adminreg from './components/Admin/Adminreg';
import Admin_main from './components/Admin/Admin_main';
import Admin_Addcourse from './components/Admin/Admin_Addcourse';
import Admin_Updcourse from './components/Admin/Admin_Updcourse';
import Admin_Delcourse from './components/Admin/Admin_Delcourse';
import Admin_View from './components/Admin/Admin_View';
import Admin_user from './components/Admin/Admin_user';
import Admin_AddLesson from './components/Admin/Admin_AddLesson';
import AdminLessonView from './components/Admin/AdminLessonView';
import MainCourse from './components/MainCourse';


// Admin route protection
const AdminRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("is_admin") === "true";
  return isAdmin ? children : <Navigate to="/unauthorized" />;
};

function App() {
  return (
    <Router>
      <Routes>

        {/* ✅ Public layout and pages */}
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Mainpage />
                <Body />
                <Populer_Sub />
                <Register />
                <Purchase_plan />
                <MainCourse/>
                <Courselist />
                <Blogs />
              </>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="courses" element={<MainCourse />} />
          <Route path="/course/:courseId/lessons" element={<CourseLesson />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="/mycourses" element={<MyCourses />} />
        </Route>

        {/* ✅ Admin dashboard with protected nested routes */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Admin_main />
            </AdminRoute>
          }
        >
          <Route path="view-courses" element={<Admin_View />} />
          <Route path="add-course" element={<Admin_Addcourse />} />
          <Route path="update-course" element={<Admin_Updcourse />} />
          <Route path="update-course/:id" element={<Admin_Updcourse />} />
          <Route path="delete-course" element={<Admin_Delcourse />} />
          <Route path="user" element={<Admin_user />} />
          <Route path="add-lesson" element={<Admin_AddLesson />} />
          <Route path="admin/lessons" element={<AdminLessonView />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
