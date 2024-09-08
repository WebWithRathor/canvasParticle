import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const BackCircle = () => {
  const circlesRef = useRef([]);

  const createCircles = () => {
    return Array.from({ length: 20 }, (_, index) => (
      <div
        key={index}
        ref={(el) => (circlesRef.current[index] = el)} // Add each circle to the ref array
        style={{ transform: `rotateY(70deg) rotateX(${18 * index}deg)` , transformOrigin:'center 100px' }}
        className="lo rounded-full  border  -mt-20  h-[50vw] aspect-square absolute z-[-1]"
      ></div>
    ));
  };

  useEffect(() => {
    // GSAP animation
    gsap.to(circlesRef.current, {
      rotateX: '+=360deg',
      duration: 5,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <div className="h-screen opacity-30 w-full z-[0] absolute top-0 left-0 flex items-center justify-center ">
      {createCircles()}
    </div>
  );
};

export default BackCircle;
