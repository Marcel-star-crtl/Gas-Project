import React from 'react';
import Image from 'next/image'; 
import group from '../../assets/images/Group.png';

export const Future = () => {
    return (
        <div className="future section__padding">
        <div className="future-form">
          <div className='future-info'>
            <div className="image-container">
              <Image src={group} alt="group" />
              <h1 className='font-bold' >Centralized Gas Distribution</h1>
              <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the development</p>
            </div>
            <div className="image-container">
              <Image src={group} alt="group" />
              <h1>Bulk Plant Construction</h1>
              <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>As with vapor distribution, our expertise extends to liquid transfer environments. We have successfully deployed liquid transfer installations  from  5mt  mini-plants to 600mt  terminals.</p>
            </div>
            <div className="image-container">
              <Image src={group} alt="group" />
              <h1>Procurement and Consulting</h1>
              <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>Our extensive network gives us access to every equipment you require in your LPG installations. From storage tanks of any size to pumps and compressors for liquid transfer to specialized piping material to valves for isolation and flow control, we are able to meet every need.</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Future;
