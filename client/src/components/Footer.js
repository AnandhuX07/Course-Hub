import React from 'react'
import "./Footer.css"
import "./Animation.css";

import FadeSlideOnScroll from './FadeSlideOnScroll';

import footerimg1 from "./images/footer/footer__1.png"
import footerimg2 from "./images/footer/footer__2.png"
import footerimg3 from "./images/footer/footer__3.png"
import logoimg from "./images/footer/logo_2.png"

const Footer = () => {
  return (
    <>
    <FadeSlideOnScroll>
      <div className="fade-slide-in">
        <div className='footer-container'>
          <div className='footer-main-container'>

            <div className='foot-container-1'>
              <div className='foot-flex-1'>
                <h1>Still You Need Our <span>Support</span> ?</h1>
                <p>Don't wait make a smart & logical quote here. Its pretty easy.</p>
              </div>
              <div className='email-button'>
                <input type='email' placeholder='Enter your email here' />
                <button type='submit'>Subscribe Now</button>
              </div>
            </div>


            <div className='footer-container-2'>

              <div className='footer-flex-1'>
                <h2>About us</h2>
                <p>orporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car end service in major cities across World.</p>

                <div className='footer-flex-1-container'>
                  <div className='svg-flex1'>
                    <svg viewBox="0 0 122.88 122.88" xmlns="http://www.w3.org/2000/svg"><path d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z M52.92,30.52h7.51c1.37,0,2.5,1.13,2.5,2.5v28.94h26.41c1.38,0,2.5,1.13,2.5,2.5v7.51 c0,1.38-1.13,2.5-2.5,2.5H50.41V33.02C50.41,31.64,51.54,30.52,52.92,30.52L52.92,30.52z M61.44,13.95 c26.23,0,47.49,21.26,47.49,47.49c0,26.23-21.26,47.49-47.49,47.49c-26.23,0-47.49-21.26-47.49-47.49 C13.95,35.22,35.21,13.95,61.44,13.95L61.44,13.95z" fill="white" fillRule="evenodd" clipRule="evenodd" /></svg>
                  </div>
                  <div className='footer-flex-1-content'>
                    <h5>Opening Hours</h5>
                    <p>Mon-Sat(9.0-7.0)</p>
                    <p>Sunday - Closed</p>
                  </div>
                </div>
              </div>


              <div className='footer-flex-2'>
                <h3>Usefull Links</h3>
                <ul>
                  <li>About Us</li>
                  <li>Teachers</li>
                  <li>Partner</li>
                  <li>Room-Details</li>
                  <li>Gallery</li>
                </ul>

              </div>

              <div className='footer-flex-3'>
                <h3>Course</h3>
                <ul>
                  <li>Ui Ux Design</li>
                  <li>Web Development</li>
                  <li>Business Strategy</li>
                  <li>Softwere Development</li>
                  <li>Business English</li>
                </ul>
              </div>

              <div className='footer-flex-4'>
                <h3>Recent Post</h3>

                <div className='footer-post-1'>
                  <img src={footerimg1} />
                  <div className='footer-post-1-content'>
                    <p>02 Apr 2023</p>
                    <h4>Best Your Business</h4>
                  </div>
                </div>

                <div className='footer-post-2'>
                  <img src={footerimg2} />
                  <div className='footer-post-1-content'>
                    <p>02 Apr 2023</p>
                    <h4>Best Your Business</h4>
                  </div>
                </div>

                <div className='footer-post-3'>
                  <img src={footerimg3} />
                  <div className='footer-post-1-content'>
                    <p>02 Apr 2023</p>
                    <h4>Best Your Business</h4>
                  </div>
                </div>

              </div>

            </div>

            <div className='foot-last-logo'>
              <div className='foot-logo'>
                <img src={logoimg} />
              </div>

              <div className='foot-last-content'>
                <p>Copyright © <span>2023</span> by Galtechlearning. All Rights Reserved.</p>
              </div>

              <div className='foot-logo-container'>
                <div className='facebook-logo'>
                  <svg fill="white" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" /></svg>
                </div>
                <div className='x-logo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256"><g transform="scale(8.53333,8.53333)"><path fill="white" d="M26.37,26l-8.795,-12.822l0.015,0.012l7.93,-9.19h-2.65l-6.46,7.48l-5.13,-7.48h-6.95l8.211,11.971l-0.001,-0.001l-8.66,10.03h2.65l7.182,-8.322l5.708,8.322zM10.23,6l12.34,18h-2.1l-12.35,-18z" /></g></svg>
                </div>
                <div className='vimeo-logo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256"><g transform="scale(5.12,5.12)"><path fill="white" d="M41,5c-6.78906,-0.00781 -10.53125,3.79688 -12.83203,11.21094c1.20313,-0.44531 2.41016,-0.99609 3.50391,-0.99609c2.30078,0 3.06641,0.85547 2.73828,3.51172c-0.10937,1.66016 -0.76562,4.33984 -2.73828,7.4375c-1.97266,2.98828 -3.6875,3.83594 -4.67187,3.83594c-1.20312,0 -2.11719,-1.73047 -3.10156,-6.37891c-0.32812,-1.32812 -1.09375,-4.31641 -1.97266,-9.95703c-0.76562,-5.19922 -3.3125,-7.99609 -6.92578,-7.66406c-1.53125,0.10938 -3.36328,1.53516 -6.42969,4.19141c-2.19141,1.99219 -4.26953,3.42969 -6.57031,5.42188l2.19141,2.80859c2.07813,-1.4375 3.28516,-1.99219 3.61328,-1.99219c1.53125,0 2.95313,2.43359 4.37891,7.41406c1.20313,4.53516 2.51563,9.07031 3.72266,13.60547c1.85938,4.98047 4.16016,7.41406 6.78906,7.41406c4.37891,0 9.63281,-3.98047 15.875,-12.16797c6.12891,-7.74609 9.21094,-14.16016 9.42969,-18.69531c0.21875,-5.97266 -2.18359,-8.89062 -7,-9z" /></g></svg>
                </div>
                <div className='linkedin-logo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256"><g transform="scale(5.12,5.12)"><path fill="white" d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z" /></g></svg>
                </div>
                <div className='skype-logo'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 256 256"><g transform="scale(5.12,5.12)"><path fill="white" d="M14.28125,0c-7.87109,0 -14.28125,6.32422 -14.28125,14.09375c0,2.38281 0.62109,4.70703 1.78125,6.78125c-0.27344,1.4375 -0.40625,2.91797 -0.40625,4.375c0,13 10.69922,23.5625 23.875,23.5625c1.35156,0 2.70313,-0.08984 4.03125,-0.3125c1.97656,0.98828 4.19922,1.5 6.4375,1.5c7.87109,0 14.28125,-6.32422 14.28125,-14.09375c0,-2.08594 -0.46094,-4.07812 -1.34375,-5.9375c0.32031,-1.53516 0.5,-3.12109 0.5,-4.71875c0,-12.99609 -10.73047,-23.5625 -23.90625,-23.5625c-1.23828,0 -2.48828,0.09375 -3.71875,0.28125c-2.19531,-1.28516 -4.68359,-1.96875 -7.25,-1.96875zM25.09375,9.375c2.04688,0 3.83984,0.22266 5.34375,0.6875c1.50781,0.46094 2.78516,1.07422 3.78125,1.84375c1.00781,0.77734 1.77734,1.60547 2.25,2.46875c0.47656,0.87109 0.71875,1.75781 0.71875,2.59375c0,0.80859 -0.34375,1.51563 -0.96875,2.15625c-0.625,0.64063 -1.41016,0.96875 -2.34375,0.96875c-0.84766,0 -1.50781,-0.19531 -1.96875,-0.59375c-0.42969,-0.375 -0.88281,-0.94531 -1.375,-1.78125c-0.57031,-1.07031 -1.23828,-1.94141 -2.03125,-2.53125c-0.76953,-0.57422 -2.07812,-0.84375 -3.84375,-0.84375c-1.64062,0 -2.98047,0.29688 -3.96875,0.9375c-0.95703,0.61719 -1.40625,1.34766 -1.40625,2.1875c0,0.51563 0.16016,0.94141 0.46875,1.3125c0.32813,0.39063 0.76172,0.71484 1.34375,1c0.60156,0.29688 1.22266,0.55078 1.84375,0.71875c0.63672,0.17188 1.72266,0.44531 3.1875,0.78125c1.85156,0.39453 3.55469,0.80859 5.0625,1.28125c1.52344,0.48438 2.83203,1.08984 3.90625,1.78125c1.09375,0.70313 1.97656,1.60547 2.59375,2.6875c0.61719,1.08203 0.90625,2.41016 0.90625,3.96875c-0.00391,1.85938 -0.52734,3.54688 -1.59375,5.03125c-1.0625,1.48047 -2.62891,2.67188 -4.65625,3.5c-2.00781,0.82031 -4.41797,1.21875 -7.15625,1.21875c-3.28906,0 -6.03906,-0.55859 -8.1875,-1.6875c-1.53906,-0.81641 -2.82422,-1.94531 -3.78125,-3.3125c-0.97656,-1.38281 -1.46875,-2.73828 -1.46875,-4.0625c0,-0.82422 0.33594,-1.53516 0.96875,-2.125c0.62891,-0.57812 1.41797,-0.875 2.375,-0.875c0.78516,0 1.48047,0.22656 2.03125,0.6875c0.53125,0.44141 0.98047,1.09766 1.34375,1.9375c0.40625,0.91797 0.83984,1.66797 1.3125,2.28125c0.44531,0.58203 1.08203,1.08594 1.90625,1.46875c0.82813,0.39063 1.96484,0.59375 3.34375,0.59375c1.89453,0 3.42969,-0.40234 4.59375,-1.1875c1.14063,-0.76562 1.71875,-1.68359 1.71875,-2.8125c0,-0.89062 -0.3125,-1.60937 -0.90625,-2.15625c-0.625,-0.57422 -1.44531,-1.00781 -2.4375,-1.3125c-1.04297,-0.31641 -2.44141,-0.66797 -4.1875,-1.03125c-2.375,-0.50391 -4.39453,-1.10937 -6,-1.78125c-1.64453,-0.69141 -2.96875,-1.65234 -3.9375,-2.84375c-0.98437,-1.21484 -1.5,-2.71094 -1.5,-4.5c0,-1.70703 0.52734,-3.26953 1.5625,-4.59375c1.01953,-1.3125 2.51172,-2.33203 4.4375,-3.03125c1.89844,-0.69531 4.16406,-1.03125 6.71875,-1.03125z" /></g></svg>
                </div>
              </div>



            </div>



          </div>
        </div>
      </div>
      </FadeSlideOnScroll>
    </>
  )
}

export default Footer
