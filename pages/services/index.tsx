import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image'; 
import backgroundImage from '../../assets/images/services.png';
import { Single } from "@/components/Single"; 
import { Values } from "@/components/Values";
import ServiceDetails from "@/components/ServiceDetails";
import ServiceDetails2 from "@/components/ServiceDetails2";
import Connect from '@/components/Connect';

import Employee from '../../assets/images/employee.png';
import Quality from '../../assets/images/Quality.png';
import Customer from '../../assets/images/Customer.png';
import Experience from '../../assets/images/Experience.png';
import service1 from '../../assets/images/services1.png';
import service2 from '../../assets/images/services2.png';
import service3 from '../../assets/images/services3.png';
const smokeVideoUrl = '/assets/images/smoke.mp4';
import play from '../../assets/images/play.png'
import serviceConnect from '../../assets/images/serviceConnect.png'


const Index = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      setPlaying(!playing);
      if (!playing || videoRef.current.ended) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
  };

  return (
    <div>
      <div className="gpt3__header" id="home">
      <div className="gpt3__header-image" style={{ position: 'relative' }}>
        {/* Background Image */}
        <Image src={backgroundImage} alt="Header Background" />
        
        {/* Services Text */}
        <div className="about-us-text">
          <p> Our Services</p>
        </div>
      </div>

      <div className="flex flex-col py-20 items-start section__padding">
        <div className="horizontal-divider w-full border-t border-gray-300 my-8"></div>
        <div className="text-left mt-16 text-[#309AF0] font-montserrat">
          {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4"> */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight text-white sm:text-5xl" style={{fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "1.3", color: "#309AF0", fontSize: "clamp(32px, 6vw, 50px)"}}>
            Our primary goal is to advance reliable gas delivery and ensure 
            <span className="text-[#67BDF8]"> seamless access for customers without unnecessary hassles.</span>
          </h1>
        </div>
        <div className="horizontal-divider w-full border-t border-gray-300 my-8" style={{marginTop: "4rem" }}></div>
      </div>



      <div className="mx-auto">
        <div className="padding__mobile w-full" style={{padding: "0 4rem 4rem 4rem"}}>
          {/* <div className="text-center sm:text-left mb-12">
            <p className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Montserrat-Bold", color: "#309AF0" }}>We Deliver Value</p>
          </div> */}
          <div className="mb-8">
            {/* Images aligned in a row for larger screens */}
            <div className="hidden sm:flex justify-between">
            <Image src={Experience} alt="Experience" className="w-1/3" />
              <Image src={Quality} alt="Quality" className="w-1/3" />
              <Image src={Customer} alt="Customer" className="w-1/3" />
            </div>
            
            {/* Images aligned in a column for smaller screens */}
            <div className="sm:hidden flex flex-col gap-4 items-center">
              <Image src={Experience} alt="Experience" className="w-full" />
              <Image src={Quality} alt="Quality" className="w-full" />
              <Image src={Customer} alt="Customer" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <ServiceDetails imageUrl={service1} alt={"service1"}
        title="Centralized Gas Distribution" 
        description="In any multi-tenanted environment, whether commercial or residential, we are expert at taking  gas from a single  source and distributing it to every tenant  in the development." 
        backgroundColor="linear-gradient(180deg, #1065C2 0%, #0A286E 100%)"
        textColor='#fff'
      />

      <ServiceDetails2 imageUrl={service2} alt={"service2"}
        title="Bulk Plant Construction" 
        description="As with vapor distribution, our expertise extends to liquid transfer environments. We have successfully deployed liquid transfer installations  from  5mt  mini-plants to 600mt  terminals." 
        backgroundColor="#fff"
        textColor='#000'
        titleColor="#309AF0"
      />

      <ServiceDetails imageUrl={service3} alt={"service3"}
        title="Equipment Procurement" 
        description="Our extensive network gives us access to every equipment you require in your LPG installations. From storage tanks of any size to pumps and compressors for liquid transfer to specialized piping material to valves for isolation and flow control, we are able to meet every need.



        " 
        backgroundColor="var(--Dark-Blue-2, #1065C2)"
        textColor='#fff'
      />

      <ServiceDetails2 imageUrl={service2} alt={"service2"}
        title="Consulting & Advisory" 
        description="In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the developmentIn any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the development" 
        backgroundColor="#fff"
        textColor='#000'
        titleColor="#309AF0"
      />

      <div className='padding__mobile-video ulev__details-video section__padding'>
        {/* <div className="video-container"> */}
        <div className="">
          <video
            ref={videoRef}
            controls
            width="100%"
            height="600px"
            style={{ objectFit: 'cover' }}
            onEnded={handleVideoEnded}
          >
            <source src={smokeVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* {!playing && (
            <div className="video-overlay" onClick={handlePlayPause}>
              <Image src={play} className="img-fluid" alt="video-preview-img" />
            </div>
          )} */}
        </div>
      </div>

      {/* <div className="flex flex-col py-20 items-start section__padding">
        <div className="horizontal-divider" />
        <div className="flex flex-col sm:flex-row items-center" style={{ marginTop: "4rem", marginBottom: "4rem", fontFamily: "Montserrat" }}>
          <div className="w-full sm:w-2/3 text-center sm:text-left">
            <h2 className="mb-4 text-4xl sm:text-6xl md:text-8xl font-bold" style={{ color: "#67BDF8", lineHeight: "1.2", fontWeight: "700" }}>
              <span style={{ color: "#B7E8EC" }}>We have Operated in the</span> Nigerian LPG Environment <span style={{ color: "#B7E8EC" }}>Since 1995</span>
            </h2>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end sm:items-end sm:mt-auto ">
            <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">
              Explore Now
            </button>
          </div>

        </div>
        <div className="horizontal-divider" />
      </div> */}
      <div className="padding__mobile flex flex-col py-20 items-start section__padding">
        <div className="horizontal-divider" />
        <div className="flex flex-col items-center sm:flex-row" style={{ marginTop: "4rem", marginBottom: "4rem", fontFamily: "Montserrat" }}>
          <div className="w-full text-center sm:w-2/3 sm:text-left mb-8 sm:mb-0">
            <h2 className="text_section-1 mb-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold" style={{ color: "#67BDF8", lineHeight: "1.2", fontWeight: "700", fontFamily: "Montserrat-Bold", fontSize: "clamp(32px, 6vw, 80px)" }}>
              <span style={{ color: "#B7E8EC" }}>We have operated in the</span> Nigerian LPG environment <span style={{ color: "#B7E8EC" }}>since 1995</span>
            </h2>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end sm:items-end sm:mt-auto">
            <a href="#" className="hover__btn rounded-md px-6 py-2 mt-4 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{ fontFamily: "Montserrat-Regular", background: "#1065C2" }}>
              Explore Now
            </a>
          </div>
        </div>
        <div className="horizontal-divider" />
      </div>
      <div style={{marginBottom: "3rem"}}>
        <Connect imageUrl={serviceConnect} alt={"serviceConnect"} />
      </div>
      </div>

      {/* < Values />

      <div className="flex flex-col py-20 items-start section__padding">
        <div className="horizontal-divider"/>
          <div className="text-left" style={{marginTop : "4rem"}}>
            <p className="text-6xl font-bold text-gray-800 mb-4">Our people are the driving force behind LGV GAS's success and united in it's beliefs and core values.</p>
          </div>
          <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-30" style={{ width: "70%", display: "flex", justifyContent: "flex-end" }}>
                <p className="mt-8 px-4 py-2 text-gray-800 font-bold rounded-md hover:bg-opacity-75">
                    We have operated in the Nigerian LPG environment since 1995 in the areas of LPG plant operations, LPG marketing and LPG fleet transportation. Our principal partners and technicians have over 60 years of combined industry experience.
                </p>
              </div>
          </div>
        </div>
        <div className="horizontal-divider"/>
      <div /> */}
    </div>
  )
}

export default Index