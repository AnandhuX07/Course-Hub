import React from 'react'
import "./Register.css"
import "./Animation.css";

import FadeSlideOnScroll from './FadeSlideOnScroll';

import shape1 from "./images/Register/register1.png";
import shape2 from "./images/Register/register2.png";
import shape3 from "./images/Register/register3.png";
import button from "./images/Register/videobutton.png";

const Register = () => {
  return (
    <>
    <FadeSlideOnScroll>
      <div className="fade-slide-in">
        <div className='register-container'>
          <div className='shapes-container'>
            <div className='shape-1'>
              <img src={shape1} />
            </div>
            <div className='shape-2'>
              <img src={shape2} />
            </div>
            <div className='shape-3'>
              <img src={shape3} />
            </div>
          </div>
          <div className='register-img-container'>

            <div className='register-header'>
              <h4>Course List</h4>
            </div>

            <div className='bothside'>


              <div className='left-side'>

                <h1 className='register-body-h1'>Register Your<span className='span1'>Account</span> Get free access to <span className='span2'>60000</span> online course</h1>

                <div className='register-p-content'>
                  <div className='register-video'>
                    <a class="video-btn" href="https://www.youtube.com/watch?v=vHdclsdkp28"> <img src={button} /></a>
                  </div>
                  <p>Learn Something new & Build Your Career From Anywhere In The World</p>
                </div>
              </div>

              <div className='register-form'>
                <h1>Fill Your Registration</h1>
                <form>
                  <input type='text' placeholder='Your Name' />
                  <input type='email' placeholder='Email Address' />
                  <input type='number' placeholder=' Phone' />
                  <input type='text' placeholder='Address' />
                  <textarea placeholder="Comments"></textarea>
                  <button type='submit'>Sign up <span><svg className='arrow-logo' xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#currentColor"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" /></svg></span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeSlideOnScroll>
    </>
  )
}

export default Register
