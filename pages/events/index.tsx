import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 
import ServiceDetails from "@/components/ServiceDetails";
import Connect from "@/components/Connect";

import backgroundImage from '../../assets/images/Events.png';
import service1 from '../../assets/images/services1.png';
import events1 from '../../assets/images/events1.png';
import CommunityConnect from '../../assets/images/communityConnect.png';

const index = () => {
  return (
    <div>
        <div className="gpt3__header-image" style={{ position: 'relative' }}>
          {/* Background Image */}
          <Image src={backgroundImage} alt="Header Background" />
    
          {/* Services Text */}
          <div className="about-us-text">
            <p>Events</p>
          </div>
        </div>
        <div className="flex flex-col py-20 items-start section__padding" style={{ background: "#0A286E"}}>
          <div className="text-left">
            {/* <p className="text-6xl font-bold text-gray-800 mb-4" style={{color: "#309AF0"}}><span style={{color: "#B7E8EC"}}>We have operated in the</span> Nigerian LPG environment since 1995</p> */}
            <p className="text-4xl tracking-tight text-white sm:text-5xl" style={{fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "65px", fontSize: "50px", color: "#B7E8EC"}}>We have operated in the<span style={{color: "#309AF0"}}> Nigerian LPG environment since 1995</span></p>
          </div>
        </div>

        <div className="flex flex-col py-20 items-start section__padding">
                <div className="text-left">
                    <p className="text-4xl tracking-tight text-white sm:text-5xl" style={{fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "45px", fontSize: "40px", color: "#000"}}>Our people are the driving force behind LGV GAS’s success and united in it’s beliefs and core values.</p>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-60" style={{width: "60%",fontSize: "50px"}}>
                        <h2 className="text-6xl font-bold text-gray-800 mb-4" style={{textAlign: "left"}}></h2>
                    </div>
                    <div className="w-full sm:w-50" style={{ width: "60%" }}>
                        <p className="mt-8 px-4 text-gray-800 rounded-md hover:bg-opacity-75" style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>
                            Our team is guided by a deep commitment to diversity. We strive to build an inclusive workplace environment that encourages innovation and allows all individuals to flourish. Training, lifelong learning and development, active employee engagement, and diverse employee benefits are essential elements of the INNIO culture.
                        </p>
                        <p className="mt-8 px-4 py-2 text-gray-800 rounded-md hover:bg-opacity-75" style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>
                            Our team is guided by a deep commitment to diversity. We strive to build an inclusive workplace environment that encourages innovation and allows all individuals to flourish. Training, lifelong learning and development, active employee engagement, and diverse employee benefits are essential elements of the INNIO culture.
                        </p>
                    </div>
                </div>
            </div>
        <div />
        <ServiceDetails imageUrl={service1} alt={"service1"}
            title="Centralized Gas Distribution" 
            description="In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the developmentIn any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the developmentIn any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the development" 
            backgroundColor="#1065C2"
            textColor='#fff'
        />

        <div className="relative h-screen overflow-hidden" style={{margin: "4rem 4rem"}}>
            <div className="absolute inset-0 z-0 h-full section__padding-home">
                <Image src={backgroundImage} alt="Hero Background" className="object-cover w-full h-full" />
            </div>
        </div>

        <ServiceDetails imageUrl={events1} alt={"event"}
            title="Centralized Gas Distribution" 
            description="In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the developmentIn any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the developmentIn any multi-tenanted environment, whether commercial or residential, we are expert at taking gas from a single source and distributing it to every tenant in the development" 
            backgroundColor="#0A286E"
            textColor='#fff'
        />
        <div style={{margin: "4rem 0"}}>
            <Connect imageUrl={CommunityConnect} alt={"CommunityConnect"} />
        </div>
    </div>
    
  )

}

export default index