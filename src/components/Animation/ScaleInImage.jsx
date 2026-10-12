import React, { useRef, useEffect } from 'react';
import './ScaleInImage.css';

const ScaleInImage = ({ children, className = '', delay = 0 }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${className} ${delay ? 'scale-in-delayed' : 'scale-in'}`}
      style={{ '--delay': `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScaleInImage;
