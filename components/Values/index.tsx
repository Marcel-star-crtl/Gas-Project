import React from 'react';
import Image from 'next/image'; 
import group from '../../assets/images/Group.png';

export const Values = () => {
    return (
      <div className="future section__padding">
        <div className="future-form">
          <div className='future-info'>
            <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
              {/* <Image src={group} alt="group" /> */}
              <div className="horizontal-divider" style={{height: "13px", width: "70px", background: "#67BDF8", marginLeft: "15%", marginBottom: "5px"}}/>
              <div className="horizontal-divider" style={{height: "13px", width: "70px", background: "#309AF0", marginLeft: "8%"}}/>
              <h1 style={{fontWeight: "700"}}>Integrity</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
            </div>
            <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
              {/* <Image src={group} alt="group" /> */}
              <div className="horizontal-divider" style={{height: "13px", width: "70px", background: "#67BDF8", marginLeft: "15%", marginBottom: "5px"}}/>
              <div className="horizontal-divider" style={{height: "13px", width: "70px", background: "#309AF0", marginLeft: "8%"}}/>
              <h1 style={{fontWeight: "700"}}>Total Quality</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
            </div>
            <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
              {/* <Image src={group} alt="group" /> */}
              <div className="horizontal-divider" style={{height: "13px", width: "70px", background: "#67BDF8", marginLeft: "15%", marginBottom: "5px"}}/>
              <div className="horizontal-divider" style={{height: "13px", width: "70px", background: "#309AF0", marginLeft: "8%"}}/>
              <h1 style={{fontWeight: "700"}}>Integrity</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Values;
