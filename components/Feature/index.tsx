import React from 'react';
import Image from 'next/image'; 
import backgroundImage from '../../assets/images/robot.png';

export const Feature = () => {
  return (
      <div className="gpt3__header" id="home">
      <div className="gpt3__header-image" style={{ position: 'relative' }}>
        {/* Background Image */}
        <Image src={backgroundImage} alt="Header Background" />
  
        {/* About Us Text */}
        <div className="about-us-text">
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
