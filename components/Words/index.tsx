import React from 'react';
import backgroundImage from '../../assets/images/deal.png';
import Image from 'next/image'; 

export const Words = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-image">
        {/* <img src="https://i.postimg.cc/nL8SN8fH/hero.png" /> */}
        <Image src={backgroundImage} alt="words" />
      </div>
    </div>
  );
};

export default Words;
