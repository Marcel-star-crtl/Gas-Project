import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link'; 
import { TeamInfo } from "@/components/TeamInfo";
import { Feature } from "@/components/Feature";
import { Journey } from "@/components/Journey";
import { Single } from "@/components/Single";
// import { team1, team4, team8, team9 } from './import'

import about from '../../assets/images/about.png';
import Employee from '../../assets/images/employee.png';
import john from '../../assets/images/John.PNG';
import Connect from '@/components/Connect';
import team1 from '../../assets/images/team1.png';
import team4 from '../../assets/images/team4.png';
import team8 from '../../assets/images/team8.png';
import team9 from '../../assets/images/team9.png';


type StaticImageData = {
  src: string;
  height: number;
  width: number;
};


const page = () => {
  const teamMembers = [
    { id: 1, photos: [{ src: team1.src, width: team1.width, height: team1.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
    { id: 2, photos: [{ src: team4.src, width: team4.width, height: team4.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
    { id: 3, photos: [{ src: team1.src, width: team1.width, height: team1.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
    { id: 4, photos: [{ src: team4.src, width: team4.width, height: team4.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
    { id: 5, photos: [{ src: team9.src, width: team9.width, height: team9.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
    { id: 6, photos: [{ src: team8.src, width: team8.width, height: team8.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
    { id: 7, photos: [{ src: team1.src, width: team1.width, height: team1.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
    { id: 8, photos: [{ src: team8.src, width: team8.width, height: team8.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
    { id: 9, photos: [{ src: team9.src, width: team9.width, height: team9.height }], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
  ];

  return (
    <div className="mx-auto">
      <div className="gpt3__header-image" style={{ position: 'relative' }}>
        <Image src={about} alt="Header Background" />
        
        <div className="about-us-text">
          <p> About Us</p>
        </div>
      </div>


      <div className="horizontal-divider " style={{width: "700px", marginRight: "0", marginTop: "4rem"}}/>
      <div className="padding__mobile-special flex flex-col py-0 items-start" style={{padding: "0 4rem 4rem 4rem"}}>
        {/* <div className="text-left mt-16 text-[#309AF0] font-[Montserrat]">
          <h1 className="text-4xl tracking-tight text-white sm:text-5xl" style={{fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "65px", fontSize: "50px", color: "#67BDF8"}}>
             We are here to shape a future where every Nigerian home and business experiences unwavering safety and reliability in their gas supply.
          </h1>
        </div> */}
        <div className="text-left mt-16 text-[#309AF0] font-[Montserrat]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl  tracking-tight text-[#67BDF8] font-bold" style={{ lineHeight: "1.2", fontFamily: "Montserrat-Bold", fontSize: "clamp(32px, 6vw, 50px)" }}>
            We are here to shape a future where every Nigerian home and business experiences unwavering safety and reliability in their gas supply.
          </h1>
        </div>
      </div>
      <div className="horizontal-divider" style={{width: "700px", marginLeft: "0"}}/>

      <div className="future-form padding__mobile" style={{fontFamily: "Montserrat", padding: "4rem 4rem 0rem 4rem"}}>
        <div className='future-info'>
          <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="horizontal-divider" style={{height: "15px", width: "10px", background: "#67BDF8", marginLeft: "0%", marginBottom: "5px", marginRight: "0"}}/>
              <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#9CDEEC", marginLeft: "0"}}/>
            </div>

            <h1 className="font-bold" style={{fontSize: "35px"}}>Integrity</h1>
            <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
          </div>
          <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="horizontal-divider" style={{height: "15px", width: "10px", background: "#309AF0", marginLeft: "0%", marginBottom: "5px", marginRight: "0"}}/>
              <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#67BDF8", marginLeft: "0"}}/>
            </div>
            <h1 className='font-bold' style={{fontSize: "35px"}}>Total Quality</h1>
            <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
          </div>
          <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className="horizontal-divider" style={{height: "15px", width: "10px", background: "#67BDF8", marginLeft: "0%", marginBottom: "5px", marginRight: "0"}}/>
              <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#9CDEEC", marginLeft: "0"}}/>
            </div>
            <h1 className='font-bold' style={{fontSize: "35px"}}>Integrity</h1>
            <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
          </div>
        </div>
      </div>

      <Journey />
      <div style={{padding: "4rem 4rem 0rem 4rem"}}>
        <div className="horizontal-divider"/>
      </div>

      <Single imageUrl={Employee} alt="employee" />

      <div className="future-form section__padding">
      <div className="text-center sm:text-left mb-12">
            <p className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Montserrat-Bold", lineHeight: "1.2", color: "#309AF0", fontSize: "clamp(32px, 6vw, 36px)" }}>Our Values</p>
          </div>
        <div className='future-info'>
          <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
            <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#67BDF8", marginLeft: "15%", marginBottom: "5px"}}/>
            <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#9CDEEC", marginLeft: "8%"}}/>
            <h1 className="font-bold" style={{fontSize: "35px"}}>Integrity</h1>
            <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
          </div>
          <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
            <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#67BDF8", marginLeft: "15%", marginBottom: "5px"}}/>
            <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#309AF0", marginLeft: "8%"}}/>
            <h1 className="font-bold" style={{fontSize: "35px"}}>Total Quality</h1>
            <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
          </div>
          <div className="image-container" style={{ border: "1px solid black", borderRadius: "5px", padding: "4rem 1rem 4rem 1rem"}}>
            <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#67BDF8", marginLeft: "15%", marginBottom: "5px"}}/>
            <div className="horizontal-divider" style={{height: "15px", width: "70px", background: "#9CDEEC", marginLeft: "8%"}}/>
            <h1 className="font-bold" style={{fontSize: "35px"}}>Integrity</h1>
            <p style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel soluta quas iure illum, deleniti doloribus porro ad asperiores dolore, ducimus itaque adipisci atque fugit omnis est. Quo corrupti consequatur quisquam!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-20 items-start section__padding">
        <div className="horizontal-divider"/>
          {/* <div className="text-left" style={{marginTop : "4rem", fontFamily: "Montserrat"}}>
            <p className="text-4xl tracking-tight text-white sm:text-5xl" style={{fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "65px", fontSize: "50px", color: "#000"}}>
              Our people are the driving force behind LGV GAS&apos;s success and united in its beliefs and core values.
            </p>
          </div> */}
          <div className="text-left mt-8 sm:mt-16 font-Montserrat">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold" style={{ lineHeight: "1.2", color: "#000", fontFamily: "Montserrat-Bold", fontSize: "clamp(32px, 6vw, 50px)" }}>
              Our people are the driving force behind LGV GAS&apos;s success and united in its beliefs and core values.
            </p>

        </div>
          <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-30" style={{ width: "70%", display: "flex", justifyContent: "flex-end" }}>
                <p className="mt-8 text-gray-800 rounded-md hover:bg-opacity-75" style={{fontFamily: "Montserrat", fontSize: "16px", lineHeight: "1.2"}}>
                  Our team is guided by a deep commitment to diversity. We strive to build in inclusive workplace environment that encourages innovation and allows all individuals to flourish. Training, lifelong learning and development, active employee engagement, and diverse employee benefits are essential elements of the INNIO culture.
                </p>
              </div>
          </div>
        </div>
        <div className="horizontal-divider"/>
      <div />

      <div style={{ background: "linear-gradient(180deg, #1065C2 0%, #0A286E 52%)"}}>
        <div className='padding__mobile-spec ulev__team-head section-team__padding'>
          <h1 className='team__intro' style={{fontFamily: "Montserrat-Bold", color: "#309AF0", fontSize: "40px", marginBottom: "0"}}>Leadership</h1>
          <p className="mt-0 text-gray-800 rounded-md hover:bg-opacity-75" style={{fontFamily: "Montserrat", fontSize: "16px", lineHeight: "1.2", color: "#fff"}}>Our team is guided by a deep commitment to diversity. We strive to build in inclusive workplace environment that encourages innovation and allows all individuals to flourish. Training, lifelong learning and development, active employee engagement, and diverse employee benefits are essential elements of the INNIO culture.</p>
        </div>
        <div className='padding__mobile-special ulev__team-container' style={{padding: "0 4rem 4rem 4rem"}}>
          <div className='ulev__team-container_group'>
            {teamMembers.map((member) => (
              <Link key={member.id} href={`/teamDetails/${member.id}`}>
                <TeamInfo photos={member.photos} name={member.name} address={member.address} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <div className="relative h-screen overflow-hidden" style={{margin: "6rem 0"}}>
        <div className="absolute inset-0 z-0 h-full section__padding-home">
          <Image src={john} alt="Hero Background" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* <Single imageUrl={john} alt="employee" /> */}


      {/* <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-900 via-blue-900 to-transparent py-10 md:py-0 items-center section__padding-connect" style={{fontFamily: "Montserrat"}}>
        <div className="w-full md:w-7/10 px-4 md:px-0">
            <h2 className="text-3xl md:text-5xl font-bold text-left mb-4 text-gray-800" style={{color: "#1065C2"}}>
              Stay in <br/> Contact With Us!
            </h2>
            <div className="flex flex-col md:flex-row text-white space-y-2 md:space-y-0 md:space-x-4">
              <button onClick={() => window.open("https://www.instagram.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Instagram</button>
              <button onClick={() => window.open("https://www.twitter.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Twitter</button>
              <button onClick={() => window.open("https://www.facebook.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Facebook</button>
              <button onClick={() => window.open("https://www.linkedin.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">LinkedIn</button>
            </div>
        </div>
        <div className="w-full md:w-3/10 mt-4 md:mt-0" style={{width: "70%"}}>
          <Image src={Employee} alt="Background" layout="responsive" width={300} height={300} objectFit="cover" className="w-full h-full"/>
        </div>
      </div> */}

      <Connect imageUrl={Employee} alt="employee" />

      <div style={{padding: "3rem 0 3rem 4rem"}}>
        <div className="horizontal-divider" style={{paddingLeft: "6rem", paddingRight: "0"}}/>
      </div>
    </div>
  )
}

export default page;
