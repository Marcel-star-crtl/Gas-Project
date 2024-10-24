import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';
import { Sponsors } from "@/components/Sponsors";
import { Connect } from "@/components/Connect";
import backgroundImage from '../../assets/images/community.png';
import CommunityConnect from '../../assets/images/communityConnect.png';

const index = () => {
  return (
    <div>
      <div className="gpt3__header" id="home">
        <div className="gpt3__header-image" style={{ position: 'relative' }}>
          {/* Background Image */}
          <Image src={backgroundImage} alt="Header Background" />
    
          {/* Services Text */}
          <div className="about-us-text">
            <p>Community</p>
          </div>
        </div>

        <div className="events_pad flex flex-col py-16 items-start section__padding">
          <div className=" events_pad text-left mt-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#309AF0]" style={{fontFamily: "Montserrat-Bold", fontSize: "45px", }}>Events</p>
          </div>
        </div>


        <Sponsors />

        <div className="flex items-center px-8 sm:px-16 py-8 sm:py-16">
          <button className="hover__btn mr-4 bg-[#1065C2] text-white border border-gray-500 rounded-md px-4 py-2 w-48 font-bold text-base">
            All Events
          </button>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        <div style={{padding: "0 4rem"}}>
          <div className="horizontal-divider"/>
        </div>
        <div className='section__padding'>
          <div className="text-left mt-8">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#309AF0] mb-4" style={{fontFamily: "Montserrat-Bold", fontSize: "40px", }}>Safety</p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#309AF0] mt-8 sm:mt-4" style={{fontFamily: "Montserrat-Bold", fontSize: "23px", }}>Safety Tips</p>
          </div>
            <div className="flex flex-col" style={{flexDirection: "column"}}>
              <div className="safety w-full sm:w-70 flex-col" style={{  display: "flex", justifyContent: "flex-end" }}>
                <p>We’ve developed Integrity Management and Process Safety Management Plans to continually improve the safety of our pipeline systems and allocate resources effectively to accomplish each of the following:</p>
                <ul className="list-disc ml-8"> 
                  <li className="mt-8 text-gray-800 rounded-md hover:bg-opacity-75">
                    Identify and analyze actual and potential precursor events that can result in pipeline incidents
                  </li>
                  <li className="mt-8 text-gray-800 rounded-md hover:bg-opacity-75">
                    Provide comprehensive and integrated means for examining and comparing the spectrum of risks and risk reduction activities available
                  </li>
                  <li className="mt-8 text-gray-800 rounded-md hover:bg-opacity-75">
                    Provide a structured and comprehensive means for selecting and implementing risk reduction activities
                  </li>
                  <li className="mt-8 text-gray-800 rounded-md hover:bg-opacity-75">
                    Ensure we use appropriately trained and qualified company and third-party personnel for risk management and pipeline integrity assurance
                  </li>
                  <li className="mt-8 text-gray-800 rounded-md hover:bg-opacity-75">
                    Establish and track system performance with the goals of continued improvement
                  </li>
                  <li className="mt-8 text-gray-800 rounded-md hover:bg-opacity-75">
                    Develop best practices in pipeline integrity
                  </li>
                </ul>
                <div className="flex items-center" style={{padding: "2rem 0"}}>
                  <Link href="/safety">
                    <button className="hover__btn mr-4 bg-transparent border border-gray-500 rounded-md px-4 py-2" style={{ background: "#1065C2", color: "#fff", width: "200px", fontWeight: "700", fontSize: "16px" }}>View More</button>
                  </Link>
                  <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Connect imageUrl={CommunityConnect} alt="community" />
        <div style={{padding: "3rem 0 3rem 4rem"}}>
          <div className="horizontal-divider" style={{paddingLeft: "6rem", paddingRight: "0"}}/>
        </div>
      <div />
    </div>
  )
}

export default index;
