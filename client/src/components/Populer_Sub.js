import React from 'react';
import "./Populer_Subject.css";
import "./Animation.css";

import FadeSlideOnScroll from './FadeSlideOnScroll';

import shape1 from "./images/Populer sub/shape1.png";
import shape2 from "./images/Populer sub/shape2.png";
import img1 from "./images/Populer sub/card-logo1.png";
import img2 from "./images/Populer sub/card-logo2.png";
import img3 from "./images/Populer sub/card-logo3.png";

const Populer_Sub = () => {
  return (
    <>
    <FadeSlideOnScroll>
      <div className="fade-slide-in">
        <div className='pop-sub-container'>
          <div className='pop-sub-header'>
            <p>Popular Subject</p>
          </div>

          <div className='pop-sub-main-container'>
            <div className='pop-sub-content'>
              <h1>Providing IT & Tech Subjects for You</h1>
              <p>Construction is a general term meaning the art and science to form systems organizations, and comes from Latin Construction is</p>
              <div className='pop-sub-content-p'>
                <p className='pop-sub-content-p1'>
                  Construction is a general term meaning the art and science to form systems organizations, and comes from Latin Construction is a organizations, and comes from Latin construction and Old
                </p>
              </div>
              <div className='pop-sub-content-button'>
                <button type='submit'>Explore More</button>
              </div>
              <div className='pop-sub-shape1'>
                <img src={shape1} alt="Decorative shape 1" />
              </div>
            </div>

            <div className='pop-sub-card-container'>
              <div className='pop-sub-shape2'>
                <img src={shape2} alt="Decorative shape 2" />
              </div>

              <div className='card-1'>
                <div className='card-icon'>
                  <img src={img1} alt="Subject icon" />
                </div>
                <div className='card-1-content'>
                  <h3>Business Studies</h3>
                  <p>Construction is a general term the art and science to form</p>
                  <button className='view-subject'>View Subject</button>
                </div>
              </div>

              <div className='card-1'>
                <div className='card-icon'>
                  <img src={img2} alt="Subject icon" />
                </div>
                <div className='card-1-content'>
                  <h3>Artist & Design</h3>
                  <p>Construction is a general term the art and science to form</p>
                  <button className='view-subject'>View Subject</button>
                </div>
              </div>

              <div className='card-1'>
                <div className='card-icon'>
                  <img src={img3} alt="Subject icon" />
                </div>
                <div className='card-1-content'>
                  <h3>Machine Learning</h3>
                  <p>Construction is a general term the art and science to form</p>
                  <button className='view-subject'>View Subject</button>
                </div>
              </div>

              <div className='card-1'>
                <div className='card-icon'>
                  <img src={img1} alt="Subject icon" />
                </div>
                <div className='card-1-content'>
                  <h3>Artist & Design</h3>
                  <p>Construction is a general term the art and science to form</p>
                  <button className='view-subject'>View Subject</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      </FadeSlideOnScroll>
    </>
  );
};

export default Populer_Sub;
