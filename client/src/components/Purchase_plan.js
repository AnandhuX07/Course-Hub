import React from 'react'
import "./Purchase_plan.css"
import "./Animation.css";

import FadeSlideOnScroll from './FadeSlideOnScroll';

import planshape1 from "./images/Plan_subscribe/price1.png"
import planshape2 from "./images/Plan_subscribe/price2.png"
import planshape3 from "./images/Plan_subscribe/price3.png"

const Purchase_plan = () => {
    return (
        <>
        <FadeSlideOnScroll>
            <div className="fade-slide-in">
                <div className='plan-container'>
                    <div className='plan-main-container'>
                        <div className='plan-header'>
                            <h4>Pricing Plan</h4>
                        </div>
                        <div className='plan-h1-content'>
                            <h1>Choose The Best Package For your Learning</h1>
                        </div>
                    </div>
                    <div className='plan-purchase-flex-container'>


                        <div className='plan-purchase-container'>
                            <div className='plan-box-container'>
                                <div className='plan-purchase-h2'>
                                    <h2>FREE</h2>
                                    <div className='plan-shape1'>
                                        <img src={planshape1} />
                                    </div>
                                </div>
                                <div className='plan-purchase-h1'>
                                    <h1><span className='plan-span'>₹</span>0<span className='plan-span1'>/month</span></h1>
                                </div>
                                <div className='plan-purchase-p'>
                                    <p>Perfect for startup</p>
                                </div>
                            </div>


                            <div className='plan-li-container'>
                                <ul className='plan-ul-container'>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        2 user
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Learning Scope
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Team collaboration
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Export HTML code
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Upload Your Logo
                                    </li>
                                </ul>
                            </div>

                            <div className='plan-purchase-button'>
                                <button type='submit'>Get started</button>
                            </div>

                            <div className='plan-purchase-p1'>
                                <p>No credit card required</p>
                            </div>

                        </div>

                        <div className='plan-purchase-container'>
                            <div className='plan-box-container'>
                                <div className='plan-purchase-h2'>
                                    <h2>BASIC</h2>
                                    <div className='plan-shape1'>
                                        <img src={planshape2} />
                                    </div>
                                </div>
                                <div className='plan-purchase-h1'>
                                    <h1><span className='plan-span'>₹</span>29<span className='plan-span1'>/month</span></h1>
                                </div>
                                <div className='plan-purchase-p'>
                                    <p>Perfect for startup</p>
                                </div>
                            </div>


                            <div className='plan-li-container'>
                                <ul className='plan-ul-container'>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        5 user
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Learning Scope
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Team collaboration
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Export HTML code
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Upload Your Logo
                                    </li>
                                </ul>
                            </div>

                            <div className='plan-purchase-button'>
                                <button type='submit'>Get started</button>
                            </div>

                            <div className='plan-purchase-p1'>
                                <p>No credit card required</p>
                            </div>

                        </div>


                        <div className='plan-purchase-container'>
                            <div className='plan-box-container'>
                                <div className='plan-purchase-h2'>
                                    <h2>PRO</h2>
                                    <div className='plan-shape1'>
                                        <img src={planshape3} />
                                    </div>
                                </div>
                                <div className='plan-purchase-h1'>
                                    <h1><span className='plan-span'>₹</span>59<span className='plan-span1'>/month</span></h1>
                                </div>
                                <div className='plan-purchase-p'>
                                    <p>Perfect for startup</p>
                                </div>
                            </div>


                            <div className='plan-li-container'>
                                <ul className='plan-ul-container'>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        2 user
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Learning Scope
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Team collaboration
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Export HTML code
                                    </li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" /></svg>
                                        Upload Your Logo
                                    </li>
                                </ul>
                            </div>

                            <div className='plan-purchase-button'>
                                <button type='submit'>Get started</button>
                            </div>

                            <div className='plan-purchase-p1'>
                                <p>No credit card required</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            </FadeSlideOnScroll>
        </>
    )
}

export default Purchase_plan
