import React from 'react';
import "./Courselist.css";
import "./Animation.css";

import FadeSlideOnScroll from './FadeSlideOnScroll';

import courselistimg from "./images/Courselist/courselistimg.png"
import shape1 from "./images/Courselist/courselist_shape1.png";
import shape2 from "./images/Courselist/courselist_shape2.png";
import shape3 from "./images/Courselist/courselist_shape3.png";


const Courselist = () => {
  return (
    <>
     <FadeSlideOnScroll>
      <div className="fade-slide-in">
      <div className='courselist-container'>
        <div className='course-header'>
          <h3>Course List</h3>
        </div>

        <div className='svg-logo-quotes'>
          <div className="courselist-svg1">
            <svg height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-17.28 -17.28 66.56 66.56" xmlSpace="preserve" fill="#f5f4f4" stroke="#f5f4f4" strokeWidth="1.376"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(1.6,1.6) scale(0.9)"><rect x="-17.28" y="-17.28" width="66.56" height="66.56" rx="0" fill="#fd0808" /></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g id="right_x5F_quote"><g><path style={{ fill: "#ffffff" }} d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" /><path style={{ fill: "#ffffff" }} d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" /></g></g></g></g></svg>
          </div>
          <div className="courselist-svg2">
            <svg height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-17.28 -17.28 66.56 66.56" xmlSpace="preserve" fill="#f5f4f4" stroke="#f5f4f4" strokeWidth="1.376"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(1.6,1.6) scale(0.9)"><rect x="-17.28" y="-17.28" width="66.56" height="66.56" rx="0" fill="#fd0808" /></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><g id="right_x5F_quote"><g><path style={{ fill: "#ffffff" }} d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z" /><path style={{ fill: "#ffffff" }} d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z" /></g></g></g></g></svg>
          </div>
        </div>

        <div className='courselist-main-container'>
          <div className='courselist-flex-container'>

            {/* flex-1 */}

            <div className='flex-1'>
              <div className='courselist-h1'>
                <h1 className='courselist-h1-content'>What They Say About us</h1>
              </div>
              <div className='courselist-p'>
                <p className='courselist-p-content'>Construction is a general term meaning the art and science to form systems organizations and comes from Latin Construction is</p>
              </div>
              <div className='courselist-button'>
                <button type='submit'>Explore More<span><svg className='arrow-logo' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></span></button>
              </div>

            </div>

            {/* End of flex-1 */}
            {/* Flex-2 */}

            <div className='flex-2'>
              <div className='courselist-flex2-headcontent'>

                <div className='courselist-flex2-p'>
                  <p>“The other hand we denounce righteou indg ation men who are so beguiled and demoraliz by the the mo ment.Dislike men who so development co”</p>
                </div>
              </div>

              <div className='courselist-flex-content'>
                <div className='courselist-flex-img'>
                  <img src={courselistimg} />
                </div>
                <div className='courselist-flex-h3'>
                  <h3>Robind Jon</h3>
                  <span className='courselist-span'>Desginer TechBoot</span>
                </div>
              </div>

            </div>

            <div className='flex-3'>
              <div className='courselist-flex2-headcontent'>

                <div className='courselist-flex2-p'>
                  <p>“The other hand we denounce righteou indg ation men who are so beguiled and demoraliz by the the mo ment.Dislike men who so development co”</p>
                </div>
              </div>

              <div className='courselist-flex-content'>
                <div className='courselist-flex-img'>
                  <img src={courselistimg} />
                </div>
                <div className='courselist-flex-h3'>
                  <h3>Robind Jon</h3>
                  <span className='courselist-span'>Desginer TechBoot</span>
                </div>
              </div>


            </div>

          </div>


          <div className='courselist-shapes'>
            <div className='courselist_shape1'>
              <img src={shape1} />
            </div>
            <div className='courselist_shape2'>
              <img src={shape2} />
            </div>
            <div className='courselist_shape3'>
              <img src={shape3} />
            </div>
          </div>
        </div>
      </div>
      </div>
      </FadeSlideOnScroll>
    </>
  )
}

export default Courselist
