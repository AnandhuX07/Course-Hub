import React from 'react'
import "./Blogs.css";
import "./Animation.css";


import FadeSlideOnScroll from './FadeSlideOnScroll';


import blog1 from "./images/Blog/blog_1.png"
import blog2 from "./images/Blog/blog_2.png"
import blog3 from "./images/Blog/blog_3.png"
import blog4 from "./images/Blog/blog_4.png"
const Blogs = () => {
    return (
        <>
            <FadeSlideOnScroll>
                <div className='blog-container'>
                    <div className='blog-main-header'>
                        <div className='blog-header'>
                            <h3>News & Blogs</h3>
                        </div>
                        <h1 className='blog-h1-content'>Leatest News & Blog</h1>
                    </div>


                    {/* flex */}


                    <div className='blog-flex-container'>

                        {/* flex-1 */}

                        <div className='blog-flex-1'>
                            <div className='blog-img1'>
                                <img src={blog1} />
                                <div className='calender'>
                                    October
                                    <span>20</span>
                                </div>
                            </div>
                            <div className='blog-flex1-all-content'>
                                <div className='blog-flex-1-h2'>
                                    <h2>It is a long established fact that a reader will be Standard Part</h2>
                                </div>
                                <div className='blog-flex-1-p'>
                                    <p>A wonderful serenity has taken possssion of my entire souing like these sweet morning spring whch enjoy with my whole heart I am alone, and feel the charm of existenceths spot whch was create For the bliss of souls like mineing am so happy my dear frend so absori bed in the exquste sens of mere. A wonderful serenity has taken posseson of my entire soung like these sweet mornngs spring whch enjoy …</p>
                                </div>
                                <div className='blog-flex-1-logo'>
                                    <div className='flex-left'>
                                        <img src={blog2} /> <span>By: Mirnsdo Jons</span>
                                    </div>
                                    <div className='flex-right'>
                                        <ul>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 256 256"><g fillOpacity="0.43922" fill="#000000" fillRule="nonzero"><g transform="scale(10.66667,10.66667)"><path d="M18,21h-12c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3v12c0,1.657 -1.343,3 -3,3z" opacity="0.35"></path><path d="M12.621,21v-6.961h-2.343v-2.725h2.343v-2.005c0,-2.324 1.421,-3.591 3.495,-3.591c0.699,-0.002 1.397,0.034 2.092,0.105v2.43h-1.428c-1.13,0 -1.35,0.534 -1.35,1.322v1.735h2.7l-0.351,2.725h-2.365v6.965z"></path></g></g></svg>

                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 256 256"><g fillOpacity="0.43922" fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(10.66667,10.66667)"><path d="M21.582,6.186c-0.23,-0.86 -0.908,-1.538 -1.768,-1.768c-1.56,-0.418 -7.814,-0.418 -7.814,-0.418c0,0 -6.254,0 -7.814,0.418c-0.86,0.23 -1.538,0.908 -1.768,1.768c-0.418,1.56 -0.418,5.814 -0.418,5.814c0,0 0,4.254 0.418,5.814c0.23,0.86 0.908,1.538 1.768,1.768c1.56,0.418 7.814,0.418 7.814,0.418c0,0 6.254,0 7.814,-0.418c0.861,-0.23 1.538,-0.908 1.768,-1.768c0.418,-1.56 0.418,-5.814 0.418,-5.814c0,0 0,-4.254 -0.418,-5.814zM10,15.464v-6.928l6,3.464z"></path></g></g></svg>

                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 256 256"><g fillOpacity="0.43922" fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(5.33333,5.33333)"><path d="M16.5,5c-6.33361,0 -11.5,5.16639 -11.5,11.5v15c0,6.33276 5.16621,11.5 11.5,11.5h15c6.33294,0 11.5,-5.16706 11.5,-11.5v-15c0,-6.33379 -5.16724,-11.5 -11.5,-11.5zM16.5,8h15c4.71124,0 8.5,3.78779 8.5,8.5v15c0,4.71106 -3.78894,8.5 -8.5,8.5h-15c-4.71221,0 -8.5,-3.78876 -8.5,-8.5v-15c0,-4.71239 3.78761,-8.5 8.5,-8.5zM34,12c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c1.105,0 2,-0.895 2,-2c0,-1.105 -0.895,-2 -2,-2zM24,14c-5.50482,0 -10,4.49518 -10,10c0,5.50482 4.49518,10 10,10c5.50482,0 10,-4.49518 10,-10c0,-5.50482 -4.49518,-10 -10,-10zM24,17c3.88318,0 7,3.11682 7,7c0,3.88318 -3.11682,7 -7,7c-3.88318,0 -7,-3.11682 -7,-7c0,-3.88318 3.11682,-7 7,-7z"></path></g></g></svg>

                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 256 256"><g fillOpacity="0.43922" fill="#000000" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><g transform="scale(8.53333,8.53333)"><path d="M6,4c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM8.64844,9h4.61133l2.69141,3.84766l3.33008,-3.84766h1.45117l-4.12891,4.78125l5.05078,7.21875h-4.61133l-2.98633,-4.26953l-3.6875,4.26953h-1.47461l4.50586,-5.20508zM10.87891,10.18359l6.75391,9.62695h1.78906l-6.75586,-9.62695z"></path></g></g></svg>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* flex-2 */}

                        <div className='blog-flex-2'>

                            {/* flex-2-1 */}

                            <div className='blog-flex-2-1'>
                                <div className='blog-img2'>
                                    <img src={blog3} />
                                    <div className='calender-1'>
                                        October
                                        <span>20</span>
                                    </div>
                                </div>
                                <div className='blog-flex-2-1-h2'>
                                    <h2>It is a long established fact that a reader will be Standard Part</h2>
                                </div>
                            </div>


                            {/* flex-2-2 */}

                            <div className='blog-flex-2-2'>
                                <div className='blog-img3'>
                                    <img src={blog4} />
                                    <div className='calender-2'>
                                        October
                                        <span>20</span>
                                    </div>
                                </div>
                                <div className='blog-flex-2-2-h2'>
                                    <h2>It is a long established fact that a reader will be Standard Part</h2>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </FadeSlideOnScroll>
        </>
    )
}

export default Blogs
