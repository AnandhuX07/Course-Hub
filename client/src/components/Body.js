import React from 'react'
import "./Body.css"
import "./Animation.css";

import FadeSlideOnScroll from './FadeSlideOnScroll';

import bodyimg1 from "./images/body-content/student-bodycontent.png"
import bodyimg2 from "./images/body-content/boy-bodycontent.png"
import bodylogo1 from "./images/body-content/bodycontent-logo1.png"
import bodylogo2 from "./images/body-content/bodycontent-logo2.png"
import counter1 from "./images/body-content/counter__1.png"
import counter2 from "./images/body-content/counter__2.png"
import counter3 from "./images/body-content/counter__3.png"
import counter4 from "./images/body-content/counter__4.png"


const Body = () => {
  return (
    <>
       <FadeSlideOnScroll>
        <div className='body-container'>
          <div className='body-container-content'>
            <div className='body-img'>
              <img className='body-img1' src={bodyimg1} />
              <img className='body-img2' src={bodylogo1} />
              <img className='body-img3' src={bodyimg2} />
              <img className='body-img4' src={bodylogo2} />
            </div>

            <div className='body-content'>
              <div className='body-content-a'>
                <a href='#'>About us</a>
              </div>
              <div className='body-content-text'>
                <h1>Welcome to the Online Learning Center</h1>
                <div className='body-content-p'>
                  <p>25+Contrary to popular belief, Lorem Ipsum is not simply random text roots in a piece of classical Latin literature from 45 BC</p>
                </div>
                <div className='ul'>
                  <ul className='ul-container'>
                    <li>
                      <i className='checkcontainer'>
                        <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8,8)"><path d="M28.28125,6.28125l-17.28125,17.28125l-7.28125,-7.28125l-1.4375,1.4375l8,8l0.71875,0.6875l0.71875,-0.6875l18,-18z" /></g></g></svg></i>
                      Lorem Ipsum is simply dummy
                    </li>
                    <li>
                      <i className='checkcontainer'>
                        <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8,8)"><path d="M28.28125,6.28125l-17.28125,17.28125l-7.28125,-7.28125l-1.4375,1.4375l8,8l0.71875,0.6875l0.71875,-0.6875l18,-18z" /></g></g></svg></i>
                      Explore a variety of fresh educational teach
                    </li>
                    <li>
                      <i className='checkcontainer'>
                        <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="currentColor" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8,8)"><path d="M28.28125,6.28125l-17.28125,17.28125l-7.28125,-7.28125l-1.4375,1.4375l8,8l0.71875,0.6875l0.71875,-0.6875l18,-18z" /></g></g></svg></i>
                      Lorem Ipsum is simply dummy text of
                    </li>

                  </ul>
                </div>

              </div>
            </div>
          </div>

          <div className='body-logo-container'>
            <div className='logo1-container'>
              <div className='logo-1'>
                <img src={counter1} />
                <div className='logo-1-content'>
                  <h1>7+</h1>
                  <h2>TOTAL ACHIEVEMENT</h2>
                </div>
              </div>
            </div>
            <div className='logo2-container'>
              <div className='logo-1'>
                <img src={counter2} />
                <div className='logo-1-content'>
                  <h1>43+</h1>
                  <h2>TOTAL STUDENTS</h2>
                </div>
              </div>
            </div>
            <div className='logo3-container'>
              <div className='logo-1'>
                <img src={counter3} />
                <div className='logo-1-content'>
                  <h1>3k</h1>
                  <h2>TOTAL INSTRUCTOR</h2>
                </div>
              </div>
            </div>
            <div className='logo4-container'>
              <div className='logo-1'>
                <img src={counter4} />
                <div className='logo-1-content'>
                  <h1>64+</h1>
                  <h2>OVER THE WORLD</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
            </FadeSlideOnScroll>
      </>

  )
}

export default Body
