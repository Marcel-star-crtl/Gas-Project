import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 
import ServiceDetails from "@/components/ServiceDetails";
import Connect from "@/components/Connect";
import {Single} from "@/components/Single";

import backgroundImage from '../../assets/images/safety.png';
import safety1 from '../../assets/images/safety1.png';
import Employee from '../../assets/images/employee.png';
import CommunityConnect from '../../assets/images/communityConnect.png';

const index = () => {
  return (
    <div>
        <div className="gpt3__header-image" style={{ position: 'relative' }}>
          {/* Background Image */}
          <Image src={backgroundImage} alt="Header Background" />
    
          {/* Services Text */}
          <div className="about-us-text">
            <p>Safety</p>
          </div>
        </div>
        <div className="flex flex-col py-20 items-start section__padding">
          <div className="text-left">
            <p className="text-6xl font-bold text-gray-800" style={{fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "1.2", fontSize: "clamp(32px, 5vw, 50px)", color: "#1065C2"}}>At LGV GAS, safety is our highest priority. We are committed to Zero Incidents because we care about each other</p>
          </div>
        </div>
        <div></div>

        <div className="flex flex-col py-16 items-start section__padding" style={{background: "#F4F4F4"}}>
            <div className="text-left" style={{marginTop : "3rem", fontFamily: "Montserrat", color: "#309AF0", lineHeight: "1.2", fontSize: "16px"}}>
                <p className="text-4xl font-bold" style={{fontFamily: "Montserrat-Bold", fontSize: "35px", lineHeight: "1.2" }}>Safety Commitment</p>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-30" style={{ width: "100%", display: "flex", justifyContent: "flex-end" , marginBottom : "3rem"}}>
                  <p className="mt-8 font-bold rounded-md hover:bg-opacity-75" style={{fontFamily: "Montserrat-Bold", fontSize: "20px", fontWeight: "700", lineHeight: "1.2"}}>
                    We are committed to Zero Incidents because we care about each other, our families and the communities where we live, work and serve our customers. We are committed to a safety culture that delivers top-tier safety performance through individual ownership, operational discipline, shared learning and prompt action.​​
                  </p>
              </div>
            </div>
            </div>
        <div />

        {/* <div className="relative h-screen overflow-hidden" style={{margin: "4rem 4rem"}}>
            <div className="absolute inset-0 z-0 h-full section__padding-home">
                <Image src={safety1} alt="Hero Background" className="object-cover w-full h-full" />
            </div>
        </div> */}

        <Single imageUrl={safety1} alt="safety" />

        <div className='padding__mobile-safety' style={{padding: "0 4rem", marginBottom: "2rem"}}>
          <div className="text-left">
              <p className="text-4xl font-bold text-gray-800 mb-4" style={{fontFamily: "Montserrat-Bold", fontSize: "35px", color: "#309AF0", marginBottom: "20px" }}>Safety Commitment</p>
            </div>
            <div className="flex flex-col" style={{flexDirection: "column"}}>
              <div className="safety w-full sm:w-70 flex-col" style={{  display: "flex", justifyContent: "flex-end" }}>
                <p>We’ve developed Integrity Management and Process Safety Management Plans to continually improve the safety of our pipeline systems and allocate resources effectively to accomplish each of the following:</p>
                <ul className="list-disc ml-8"> 
                  <li className="mt-4 text-gray-800 rounded-md hover:bg-opacity-75">
                    Identify and analyze actual and potential precursor events that can result in pipeline incidents
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Provide comprehensive and integrated means for examining and comparing the spectrum of risks and risk reduction activities available
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Provide a structured and comprehensive means for selecting and implementing risk reduction activities
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Ensure we use appropriately trained and qualified company and third-party personnel for risk management and pipeline integrity assurance
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Establish and track system performance with the goals of continued improvement
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Develop best practices in pipeline integrity
                  </li>
                </ul>
              </div> 
            </div>
        </div>


        <div className='padding__mobile-safety' style={{padding: "2rem 4rem 0 4rem"}}>
          <div className="text-left">
              <p className="text-4xl font-bold text-gray-800 mb-4" style={{fontFamily: "Montserrat-Bold", fontSize: "35px", color: "#309AF0", marginBottom: "20px" }}>Safety Tips</p>
            </div>
            <div className="flex flex-col" style={{flexDirection: "column"}}>
              <div className="safety w-full sm:w-70 flex-col" style={{  display: "flex", justifyContent: "flex-end" }}>
                <p>We’ve developed Integrity Management and Process Safety Management Plans to continually improve the safety of our pipeline systems and allocate resources effectively to accomplish each of the following:</p>
                <ul className="list-disc ml-8"> 
                  <li className="mt-4 text-gray-800 rounded-md hover:bg-opacity-75">
                    Identify and analyze actual and potential precursor events that can result in pipeline incidents
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Provide comprehensive and integrated means for examining and comparing the spectrum of risks and risk reduction activities available
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Provide a structured and comprehensive means for selecting and implementing risk reduction activities
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Ensure we use appropriately trained and qualified company and third-party personnel for risk management and pipeline integrity assurance
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Establish and track system performance with the goals of continued improvement
                  </li>
                  <li className="mt-2 text-gray-800 rounded-md hover:bg-opacity-75">
                    Develop best practices in pipeline integrity
                  </li>
                </ul>
                <div className="flex items-center" style={{padding: "2rem 0"}}>
                  <a href="/safety-documents.pdf" download>
                    <button className="hover__text mr-4 bg-transparent py-2" style={{ width: "300px", fontWeight: "700", fontSize: "16px", color: "#309AF0", fontFamily: "Montserrat-Bold" }}>Download Our Safety Documents</button>
                  </a>
                  <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
                </div>
              </div>
            </div>
        </div>

        {/* <div className="relative h-screen overflow-hidden" style={{margin: "4rem 4rem"}}>
            <div className="absolute inset-0 z-0 h-full section__padding-home">
                <Image src={safety1} alt="Hero Background" className="object-cover w-full h-full" />
            </div>
        </div> */}

        <Single imageUrl={safety1} alt="safety" />

        <div className='section__margin'>
          <Connect imageUrl={Employee} alt={"Employee"} />
        </div>
    </div>
  );
}

export default index;
