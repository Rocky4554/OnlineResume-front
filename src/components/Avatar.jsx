import React, { useState, useEffect, useRef } from 'react';

const calculatePupilPosition = (eyeRef, mousePosition) => {
  if (!eyeRef.current) return { x: 0, y: 0 };

  const eyeRect = eyeRef.current.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  // Calculate the angle between the eye's center and the mouse pointer
  const angle = Math.atan2(mousePosition.y - eyeCenterY, mousePosition.x - eyeCenterX);

  // Maximum distance the pupil can move from the center (adjust as needed)
  const maxDistance = eyeRect.width / 4; 

  // Use trigonometry to find the new x and y coordinates for the pupil
  const x = maxDistance * Math.cos(angle);
  const y = maxDistance * Math.sin(angle);

  return { x, y };
};

const Avatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [leftPupilPos, setLeftPupilPos] = useState({ x: 0, y: 0 });
  const [rightPupilPos, setRightPupilPos] = useState({ x: 0, y: 0 });

  // 1. Set up the mouse tracking event listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 2. Update pupil positions whenever the mouse position changes
  useEffect(() => {
    setLeftPupilPos(calculatePupilPosition(leftEyeRef, mousePosition));
    setRightPupilPos(calculatePupilPosition(rightEyeRef, mousePosition));
  }, [mousePosition]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="relative w-40 h-40 md:w-56 md:h-56 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center space-x-6 md:space-x-12 shadow-xl border-4 border-gray-400 dark:border-gray-600 overflow-hidden">
        {/* Left Eye */}
        <div ref={leftEyeRef} className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex justify-center items-center">
          <div 
            className="w-5 h-5 md:w-8 md:h-8 bg-black rounded-full transition-transform duration-100 ease-linear" 
            style={{ transform: `translate(${leftPupilPos.x}px, ${leftPupilPos.y}px)` }}
          ></div>
        </div>

        {/* Right Eye */}
        <div ref={rightEyeRef} className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex justify-center items-center">
          <div 
            className="w-5 h-5 md:w-8 md:h-8 bg-black rounded-full transition-transform duration-100 ease-linear" 
            style={{ transform: `translate(${rightPupilPos.x}px, ${rightPupilPos.y}px)` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;