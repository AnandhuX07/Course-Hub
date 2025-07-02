import React from 'react'
import "./Header.css"
import "./Animation.css";

import FadeSlideOnScroll from './FadeSlideOnScroll';


const Header = () => {
    return (
        <>
        <FadeSlideOnScroll>
            <div className="fade-slide-in">
                <div className='header-container'>
                    <p>Call Us: +91 70127 16483 - Mail Us: info@galtechlearning.com</p>
                    <div className='header-logo-p'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                        </svg>
                        <p>First Floor, Oregano Tower, Koratty Junction, Thrissur</p>
                    </div>

                    <div className='logo-fixy'>
                        {/* facebook icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="20"
                            viewBox="0 0 50 50"
                            fill="white"
                        >
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z" />
                        </svg>

                        {/* Instagram icon */}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="20"
                            viewBox="0 0 50 50"
                            fill="white"
                        >
                            <path d="M16 3C8.83 3 3 8.83 3 16v18c0 7.17 5.83 13 13 13h18c7.17 0 13-5.83 13-13V16c0-7.17-5.83-13-13-13H16zM37 11c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM25 14c6.07 0 11 4.93 11 11s-4.93 11-11 11-11-4.93-11-11 4.93-11 11-11zm0 2c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z" />
                        </svg>

                        {/* X icon */}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="20"
                            viewBox="0 0 50 50"
                            fill="white"
                        >
                            <path d="M11 4C7.134 4 4 7.134 4 11v28c0 3.866 3.134 7 7 7h28c3.866 0 7-3.134 7-7V11c0-3.866-3.134-7-7-7H11zm2.086 9H21.02l5.637 8.01L33.5 13h2.5l-8.21 9.613L37.91 37h-7.93l-6.54-9.293L15.5 37H13l9.31-10.896L13.086 13zm3.828 2H31.02L34.086 35h-3.064L19.98 15h-3.066z" />
                        </svg>

                        {/* Youtube icon */}

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="20"
                            viewBox="0 0 50 50"
                            fill="white"
                        >
                            <path d="M44.898438 14.5C44.5 12.300781 42.601563 10.699219 40.398438 10.199219C37.101563 9.5 31 9 24.398438 9C17.800781 9 11.601563 9.5 8.300781 10.199219C6.101563 10.699219 4.199219 12.199219 3.800781 14.5C3.398438 17 3 20.5 3 25C3 29.5 3.398438 33 3.898438 35.5C4.300781 37.699219 6.199219 39.300781 8.398438 39.800781C11.898438 40.5 17.898438 41 24.5 41C31.101563 41 37.101563 40.5 40.601563 39.800781C42.800781 39.300781 44.699219 37.800781 45.101563 35.5C45.5 33 46 29.398438 46.101563 25C45.898438 20.5 45.398438 17 44.898438 14.5ZM19 32V18L31.199219 25Z" />
                        </svg>
                    </div>
                </div>
            </div>
            </FadeSlideOnScroll>
        </>
    )
}

export default Header
