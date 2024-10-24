import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ConnectImageProps {
  imageUrl: StaticImageData;  
  alt: string;
}

export const Connect = ({ imageUrl }: ConnectImageProps) => {
    return (
      <div className="padding__mobile flex flex-col md:flex-row bg-gradient-to-b md:bg-gradient-to-r from-blue-900 via-blue-900 to-transparent py-10 md:py-0 items-center section__padding-connect" style={{fontFamily: "Montserrat"}}>
        <div className="w-full md:w-7/10 px-4 md:px-0">
            <h2 className="mb-4 text-4xl sm:text-6xl md:text-8xl font-bold" style={{ color: "#1065C2", lineHeight: "1.1", fontWeight: "700", fontFamily: "Montserrat-Bold", fontSize: "45px" }}>
              Stay in <br/> Contact With Us!
            </h2>
            <div className="flex flex-col md:flex-row text-white space-y-2 md:space-y-0 md:space-x-4">
              <button onClick={() => window.open("https://www.instagram.com", "_blank")} className="hover__btn focus:outline-none border border-gray-300 rounded-md px-4" style={{ paddingTop: "5px", paddingBottom: "5px" , fontSize: "14px"}}>Instagram</button>
              <button onClick={() => window.open("https://www.twitter.com", "_blank")} className="hover__btn focus:outline-none border border-gray-300 rounded-md px-4" style={{ paddingTop: 0, paddingBottom: 0, fontSize: "14px" }}>Twitter</button>
              <button onClick={() => window.open("https://www.facebook.com", "_blank")} className="hover__btn focus:outline-none border border-gray-300 rounded-md px-4" style={{ paddingTop: 0, paddingBottom: 0, fontSize: "14px" }}>Facebook</button>
              <button onClick={() => window.open("https://www.linkedin.com", "_blank")} className="hover__btn focus:outline-none border border-gray-300 rounded-md px-4" style={{ paddingTop: 0, paddingBottom: 0, fontSize: "14px" }}>LinkedIn</button>
            </div>
        </div>
        <div className="connect-image w-full md:w-7/10 mt-4 md:mt-0" style={{width: "70%"}}>
          <Image src={imageUrl} alt="Background" layout="responsive" width={300} height={300} objectFit="cover" className="w-full h-full"/>
        </div>
      </div>
    );
};

export default Connect;



// import React from 'react';
// import Image from 'next/image'; 

// interface ConnectImageProps {
//   imageUrl: string; 
// }

// export const Connect = ({ imageUrl }: ConnectImageProps) => {
//   return (
//     <div className="padding__mobile flex flex-col md:flex-row bg-gradient-to-r from-blue-900 via-blue-900 to-transparent py-10 md:py-0 items-center section__padding-connect" style={{fontFamily: "Montserrat"}}>
//       <div className="w-full md:w-7/10 px-4 md:px-0">
//         <h2 className="text-3xl md:text-5xl font-bold text-left mb-4 text-gray-800" style={{color: "#1065C2"}}>
//           Stay in <br/> Contact With Us!
//         </h2>
//         <div className="flex flex-col md:flex-row text-white space-y-2 md:space-y-0 md:space-x-4">
//           <button onClick={() => window.open("https://www.instagram.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Instagram</button>
//           <button onClick={() => window.open("https://www.twitter.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Twitter</button>
//           <button onClick={() => window.open("https://www.facebook.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Facebook</button>
//           <button onClick={() => window.open("https://www.linkedin.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">LinkedIn</button>
//         </div>
//       </div>
//       <div className="connect-image w-full md:w-7/10 mt-4 md:mt-0">
//         <Image src={imageUrl} alt="Background" layout="responsive" width={300} height={300} objectFit="cover" className="w-full h-full"/>
//       </div>
//     </div>
//   );
// };

// export default Connect;


// import React from 'react';
// import Image from 'next/image'; 

// interface ConnectImageProps {
//   imageUrl: string; 
// }

// export const Connect = ({ imageUrl }: ConnectImageProps) => {
//     return (
//       <div className="padding__mobile flex flex-col md:flex-row bg-gradient-to-r from-blue-900 via-blue-900 to-transparent py-10 md:py-0 items-center section__padding-connect" style={{fontFamily: "Montserrat"}}>
//         <div className="w-full md:w-7/10 px-4 md:px-0">
//             <h2 className="text-3xl md:text-5xl font-bold text-left mb-4 text-gray-800" style={{color: "#1065C2"}}>
//               Stay in <br/> Contact With Us!
//             </h2>
//             <div className="flex flex-col md:flex-row text-white space-y-2 md:space-y-0 md:space-x-4">
//               <button onClick={() => window.open("https://www.instagram.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Instagram</button>
//               <button onClick={() => window.open("https://www.twitter.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Twitter</button>
//               <button onClick={() => window.open("https://www.facebook.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">Facebook</button>
//               <button onClick={() => window.open("https://www.linkedin.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">LinkedIn</button>
//             </div>
//         </div>
//         <div className="w-full md:w-3/10 mt-4 md:mt-0" style={{width: "70%"}}>
//           <Image src={imageUrl} alt="Background" layout="responsive" width={300} height={300} objectFit="cover" className="w-full h-full"/>
//         </div>
//       </div>
//     );
// };

// export default Connect;




// import React from 'react';
// import Image from 'next/image'; 

// interface ConnectImageProps {
//   imageUrl: string; 
// }

// export const Connect = ({ imageUrl }: ConnectImageProps) => {
//     return (
//       <div className="flex flex-col md:flex-row bg-gradient-to-r from-blue-900 via-blue-900 to-transparent py-0 items-center section__padding">
//         <div className="w-full md:w-2/3 p-4">
//             <h2 className="text-3xl md:text-5xl font-bold text-left text-gray-800 mb-4" style={{color: "#1065C2"}}>
//               Stay in <br/> Contact With Us!
//             </h2>
//             <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-white">
//               <button onClick={() => window.open("https://www.instagram.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">
//                 Instagram
//               </button>
//               <button onClick={() => window.open("https://www.twitter.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">
//                 Twitter
//               </button>
//               <button onClick={() => window.open("https://www.facebook.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">
//                 Facebook
//               </button>
//               <button onClick={() => window.open("https://www.linkedin.com", "_blank")} className="focus:outline-none border border-gray-300 rounded-md px-4 py-2">
//                 LinkedIn
//               </button>
//             </div>
//         </div>
//         <div className="w-full md:w-1/3">
//           <Image src={imageUrl} alt="Background" layout="responsive" width={300} height={300} objectFit="cover" className="w-full h-full m-0 p-0"/>
//         </div>
//       </div>
//     );
// };

// export default Connect;
