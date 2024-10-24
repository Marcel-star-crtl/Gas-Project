import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ServiceDetailsProps {
  imageUrl: StaticImageData;  
  alt: string; 
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
}

export const ServiceDetails2 = ({ imageUrl, title, description, backgroundColor, titleColor, textColor }: ServiceDetailsProps) => {
  return (
    <div className="flex flex-col md:flex-row section__padding" id="home" style={{ background: backgroundColor }}>
      <div className="flex-1 flex justify-center items-center mb-10 md:mb-0">
        <Image src={imageUrl} alt="Service Image" className="w-full h-auto" />
      </div>
      <div className="gpt3__header-content-serve flex-1 flex flex-col justify-center items-end text-right md:ml-20">
        <h1 className="" style={{ color: titleColor }}>{title}</h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl" style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px", color: textColor}}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails2;




// import React from 'react';
// import Image from 'next/image'; 
// import env from '../../assets/images/Environment.png';

// interface ServiceDetailsProps {
//     imageUrl: string; 
//     title: string;
//     description: string;
//     backgroundColor: string;
//     textColor: string;
// }

// export const ServiceDetails2 = ({ imageUrl, title, description, backgroundColor, textColor }: ServiceDetailsProps) => {
//     return (
//         <div className="gpt3__header section__padding" id="home" style={{ background: backgroundColor }}>
//             <div className="gpt3__header-image">
//                 <Image src={imageUrl} alt="Service Image" />
//             </div>
//             <div className="gpt3__header-content-service" style={{ textAlign: "right" }}>
//                 <h1 className="gradient__text">{title}</h1>
//                 <p style={{ color: textColor }}>{description}</p>
//             </div>

//             <style jsx>{`
//                 .gpt3__header {
//                     display: flex;
//                     flex-direction: row;
//                     background: #fff;
//                 }

//                 .gpt3__header-content-service {
//                     flex: 1;
//                     display: flex;
//                     justify-content: center;
//                     align-items: flex-start;
//                     flex-direction: column;
//                     text-align: left;
//                     margin-right: 5rem;
//                 }

//                 .gpt3__header-image {
//                     flex: 1;
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                 }

//                 .gpt3__header-image img {
//                     width: 100%;
//                     height: 100%;
//                 }

//                 @media screen and (max-width: 1050px) {
//                     .gpt3__header {
//                         flex-direction: column;
//                     }

//                     .gpt3__header-content {
//                         margin: 0;
//                     }
//                 }

//                 @media screen and (max-width: 650px) {
//                     .gpt3__header-content {
//                         margin-bottom: 3rem;
//                     }
//                 }

//                 @media screen and (max-width: 490px) {
//                     .gpt3__header-content {
//                         margin-bottom: 3rem;
//                     }
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default ServiceDetails2;
