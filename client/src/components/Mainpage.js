import React from 'react';
import './Mainpage.css';
import "./Animation.css";

import FadeSlideOnScroll from './FadeSlideOnScroll';

import img1 from './images/main img1.png';
import logoimg1 from './images/logo-main-img1.png';
import logoimg2 from './images/logo-main-img2.png';
import logoimg3 from './images/logo-main-img3.png';
import companyimg1 from "./images/list-img1.png";
import companyimg2 from "./images/list-img2.png";
import companyimg3 from "./images/list-img3.png";
import companyimg4 from "./images/list-img4.png";
import companyimg5 from "./images/list-img5.png";
import { Link } from 'react-router-dom';

// bodycontent


const Mainpage = () => {
  return (
    <>
    <FadeSlideOnScroll>
      <div className="fade-slide-in">
        <div className='mainpage-container'>

          <div className='logo-main-img-container'>
            <div className='logo-main-img moving-logo top-left'>
              <img src={logoimg1} alt="Logo 1" />
            </div>
            <div className='logo-main-img rotating-logo bottom-center'>
              <img src={logoimg2} alt="Logo 2" />
            </div>
            <div className='logo-main-img bottom-left'>
              <img src={logoimg3} alt="Logo 3" />
            </div>
            <div className='logo-main-img bottom-right'>
              <img src={logoimg3} alt="Logo 4" />
            </div>
          </div>

          {/* Main Content Section */}
          <div className='mainpage-main-container'>

            {/* Text Content */}
            <div className='mainpage-body-content'>
              <h3>EDUCATION SOLUTION</h3>
              <h1>Cloud-based LMS <br /> Trusted by 1000+</h1>
              <p>Lorem Ipsum is simply dummy text of the printing typesetting industry. Lorem Ipsum has been</p>
              <div className='submit-container'>
               <button>View Courses</button>
                <button className='secondary-btn'>Find out more →</button>
              </div>
            </div>

            {/* Image & Floating Shapes */}
            <div className='mainpage-img-section'>
              <div className='shapes'>
                <div className='shape shape1'></div>
                <div className='shape shape2'></div>
                <div className='shape shape3'></div>
                <div className='shape shape4'></div>
              </div>
              <img className='hover-effect-img' src={img1} alt="Student" />
            </div>
          </div>
        </div>


        <div className='list-container'>
          <div className='list-main-container'>
            <div className='company-list-img1'>
              <a href='#'><img src={companyimg1} /></a>
            </div>
            <div className='company-list-img2'>
              <a href='#'><img src={companyimg2} /></a>
            </div>
            <div className='company-list-img3'>
              <a href='#'><img src={companyimg3} /></a>
            </div>
            <div className='company-list-img4'>
              <a href='#'><img src={companyimg4} /></a>
            </div>
            <div className='company-list-img5'>
              <a href='#'><img src={companyimg5} /></a>
            </div>
          </div>
        </div>
      </div>
      </FadeSlideOnScroll>
    </>

  );
};

export default Mainpage;
