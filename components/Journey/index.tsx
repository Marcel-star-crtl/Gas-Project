// import React from 'react';
// import backgroundImage from '../../assets/robot.png';
// import './locations.css'


// function Locations() {
//   return (
//     <div
//       className="bg-cover bg-no-repeat bg-center h-full w-full relative overflow-hidden rounded-lg shadow-md flex flex-col items-center justify-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         position: 'relative',
//       }}
//     >
//       <div
//         className="absolute inset-0 bg-black opacity-50 z-10"
//         style={{
//           borderRadius: '0.5rem',
//         }}
//       ></div>
//       <div className="relative z-20 text-center justify-between py-20 flex">
//         <div className="flex flex-row justify-center items-center mb-8 space-x-8 section__padding">
//           <div className="flex flex-col justify-start w-1/2">
//             <h1 className="small-text text-white mb-8" style={{ textAlign: 'left' }}>
//               LGV GAS SYSTEMS <br />
//               Journey
//             </h1>
//             <p className='text-white' style={{ textAlign: 'left' }}>In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas </p>
//           </div>

//           <div className="flex flex-col space-x-4 justify-end large-text w-1/2">
//             <div className="flex flex-col items-center">
//               <p className="large-text font-bold text-white">3000+</p>
//               <p className="text-sm text-white">Project Executed</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="large-text font-bold text-white">200+</p>
//               <p className="text-sm text-white">Happy Clients</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="large-text font-bold text-white">200+</p>
//               <p className="text-sm text-white">Global Partners</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Locations;







// import React from 'react';
// import Image from 'next/image';
// import backgroundImage from '../../assets/images/backgroundJourney.png';

// export const Journey = () => {
//   return (
//     <div className="relative h-full w-full overflow-hidden shadow-md flex flex-col items-center justify-center">
//       <div className="absolute inset-0 z-0">
//         <Image
//           src={backgroundImage}
//           alt="Hero Background"
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//         />
//       </div>
//       <div
//         className="absolute inset-0 bg-black opacity-50 z-10"
//         style={{
//           borderRadius: '0.5rem',
//         }}
//       ></div>
//       <div style={{marginLeft: "4rem", marginRight: "4rem"}}>
//         <div className="horizontal-divider" />
//       </div>
//       <div className="relative z-20 text-center justify-between py-20 flex">
//         <div className="flex flex-row justify-center items-center mb-8 space-x-8 section__padding" style={{ fontFamily: 'Montserrat' }}>
//           <div className="flex flex-col justify-start w-1/2">
//             <div style={{ marginRight: "4rem"}}>
//               <div className="horizontal-divider" />
//             </div>
//             <h1 className="small-text text-white mb-8" style={{ textAlign: 'left' }}>
//               LGV GAS SYSTEMS <br />
//               JOURNEY
//             </h1>
//             <p className="text-white" style={{ textAlign: 'left' }}>
//               In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas
//             </p>
//             <div style={{ marginRight: "4rem"}}>
//               <div className="horizontal-divider" />
//             </div>
//           </div>
//           <div className="flex flex-col space-x-4 justify-end large-text w-1/2">
//             <div style={{ marginRight: "4rem"}}>
//               <div className="horizontal-divider" />
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="large-text font-bold text-white" style={{ fontSize: "70px", color: "#9CDEEC"}}>3000+</p>
//               <p className="text-white">Project Executed</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="large-text font-bold text-white" style={{ fontSize: "70px", color: "#9CDEEC"}}>200+</p>
//               <p className="text-white">Happy Clients</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="large-text font-bold text-white" style={{ fontSize: "70px", color: "#9CDEEC"}}>200+</p>
//               <p className="text-white">Global Partners</p>
//             </div>
//             <div style={{ marginRight: "4rem"}}>
//               <div className="horizontal-divider" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Journey;






import React from 'react';
import Image from 'next/image';
import backgroundImage from '../../assets/images/backgroundJourney.png';
import icon from '../../assets/images/circle.png';

export const Journey = () => {
  return (
    <div className="relative h-full w-full overflow-hidden shadow-md flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div
        className="absolute inset-0 bg-black opacity-0 z-10"
        style={{
          borderRadius: '0.5rem',
        }}
      ></div>
      <div className="relative z-20 text-center justify-between py-4 flex w-full">
        <div className="flex flex-col sm:flex-row justify-center items-center mb-8 space-x-0 sm:space-x-8 w-full" style={{ fontFamily: 'Montserrat', padding: "2rem 1rem 2rem 1rem"}}>
          <div className="journey-One flex flex-col justify-start sm:w-1/3 w-full" style={{ width: "300px" }}>
            <div className="hidden sm:block" style={{ marginRight: "4rem", padding: "3rem 0"}}>
              <div className="horizontal-divider" style={{width: "250px", marginLeft: "0"}}/>
            </div>
            {/* <h1 className="small-text text-white mb-4 text-left"> */}
            <h1 className="text-6xl sm:text-6xl font-bold text-gray-800" style={{ fontFamily: "Montserrat-Bold", textAlign: "left", color: "#fff", lineHeight: "1.2", fontWeight: "700", fontSize: "35px" }}>
              LGV GAS SYSTEMS <br />
              Journey
            </h1>
            <p className="text-white text-left" style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px", color: "#fff", marginTop: "15px"}}>
              In any multi-tenanted environment, whether commercial or residential, we are expert at taking gas
            </p>
            <div className="hidden sm:block" style={{ marginRight: "4rem", padding: "3rem 0", width: "300px" }}>
              <div className="horizontal-divider" style={{width: "250px", marginLeft: "0"}}/>
            </div>
          </div>

          <div className="padding__mobile-journey flex flex-col space-y-4 large-text w-full sm:w-1/2 ml-auto items-center sm:items-end">
            <div className="hidden sm:block w-96 py-8">
              <div className="horizontal-divider" />
            </div>

            {/* Projects Executed */}
            <div className="flex flex-col items-end sm:items-center">
              <div className="flex items-center">
                <Image src={icon} alt="Icon" width={50} height={50} />
                <p className="large-text font-bold text-white pl-8" style={{ fontFamily: "Montserrat-ExtraBold", color: "#9CDEEC", fontSize: "clamp(3rem, 5vw, 6rem)" }}>
                  3000+
                </p>
              </div>
              <p className="text-white mt-2 text-base sm:text-lg md:text-xl" style={{ fontFamily: "Montserrat-Bold", marginRight: "30px" }}>
                Projects Executed
              </p>
            </div>

            {/* Happy Clients */}
            <div className="flex flex-col items-end sm:items-center">
              <div className="flex items-center">
                <Image src={icon} alt="Icon" width={50} height={50} />
                <p className="large-text font-bold text-white pl-8" style={{ fontFamily: "Montserrat-ExtraBold", color: "#9CDEEC", fontSize: "clamp(3rem, 5vw, 6rem)" }}>
                  2000+
                </p>
              </div>
              <p className="text-white mt-2 text-base sm:text-lg md:text-xl" style={{ fontFamily: "Montserrat-Bold", marginRight: "60px" }}>
                Happy Clients
              </p>
            </div>

            {/* Global Partners */}
            <div className="flex flex-col items-end sm:items-center">
              <div className="flex items-center">
                <Image src={icon} alt="Icon" width={50} height={50} />
                <p className="large-text font-bold text-white pl-8" style={{ fontFamily: "Montserrat-ExtraBold", color: "#9CDEEC", fontSize: "clamp(3rem, 5vw, 6rem)" }}>
                  2000+
                </p>
              </div>
              <p className="text-white mt-2 text-base sm:text-lg md:text-xl" style={{ fontFamily: "Montserrat-Bold", marginRight: "30px" }}>
                Global Partners
              </p>
            </div>

            <div className="hidden sm:block w-96 py-8 mt-12">
              <div className="horizontal-divider" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
