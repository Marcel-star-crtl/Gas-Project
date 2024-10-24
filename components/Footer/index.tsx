// import Link from "next/link";

// export const Footer = () => {
//   return (
//     <footer className="container mx-auto">
//       <div className="text-center border-t py-8">
//         <h3 className="text-xl">Important Links</h3>
//         <div className="flex items-center justify-center my-4 underline">
//           <Link href="https://dev.to/jeffsalive" className="px-4">
//             Dev.to (Jeffrey)
//           </Link>
//           <Link href="https://twitter.com/JeffreySunny1" className="px-4">
//             Twitter
//           </Link>
//           <Link href="https://linkedin.com/in/jeffsalive" className="px-4">
//             LinkedIn
//           </Link>
//           <Link href="https://jeffreynwankwo.com" className="px-4">
//             Website
//           </Link>
//         </div>
//         <small>Jeffrey &copy; {new Date().getFullYear()}</small>
//       </div>
//     </footer>
//   );
// };




import React from 'react';

export const Footer = () => {
  return (
    <>   
      <div className="horizontal-divider" style={{ height: "7px", background: "#309AF0" }}></div>
      <footer className="gpt3__footer">
        <div className="gpt3__footer-links section__padding flex flex-col md:flex-row flex-wrap items-left md:items-center">
        <div className="horizontal-divider" style={{marginBottom: "4rem"}} />
          <div className="gpt3__footer-links_logo mb-6 md:mb-0 text-center md:text-left">
            <h4>What we do <br /> Services</h4>
          </div>
          <div className="gpt3__footer-links_div mb-6 md:mb-0 text-center md:text-left">
            <p>Who we are</p>
            <p>Vision & Mission</p>
            <p>Our People</p>
            <p>Ethics & Compliance</p>
          </div>
          <div className="gpt3__footer-links_div mb-6 md:mb-0 text-center md:text-left">
            <p>News</p>
          </div>
          <div className="gpt3__footer-links_div mb-6 md:mb-0 text-center md:text-left">
            <p>39, Shomade Crescent,</p>
            <p>Off Tafawa Balewa</p>
            <p>Crescent, Surulere</p>
            <p>Lagos</p>
          </div>
          <div className="gpt3__footer-links_div mb-6 md:mb-0 text-center md:text-left">
            <p>Privacy Policies</p>
            <p>Cookie Policy</p>
            <p>Website Terms</p>
            <p className='last-p'>Code Of Conduct</p>
          </div>
          <div className="horizontal-divider" style={{marginTop: "4rem"}}/>
        </div>
        <div className="ulev__footer-btn flex flex-col md:flex-row justify-between items-center text-center mt-2 px-6 py-4 md:px-10">
          <div className='text section__padding'>
            <p className="foteer-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[245px] font-bold" style={{animation: "color-change 5s infinite", fontFamily: "Montserrat-Bold", color: "#309AF0", fontSize: "clamp(32px, 25vw, 290px)"}}>LGV-GAS</p>
          </div>
        </div>
      </footer>
      <div className="gpt3__footer-copyright">
        <p className="text-xl">&copy; 2024 LGV GAS SYSTEMS. All Rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
