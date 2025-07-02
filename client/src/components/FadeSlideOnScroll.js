// FadeSlideOnScroll.jsx
import React, { useRef, useState, useEffect } from 'react';

const FadeSlideOnScroll = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? 'fade-slide-in' : ''}
      style={{ opacity: 0 }}
    >
      {children}
    </div>
  );
};

export default FadeSlideOnScroll;
