// import React from 'react';

// const FullImage = ({ imageUrl }) => {
//   return (
//     <div className="relative h-screen overflow-hidden">
//       <div className="absolute inset-0 z-0 h-full section__padding-home">
//         <img src={imageUrl} alt="Hero Background" className="object-cover w-full h-full" />
//       </div>
//     </div>
//   );
// };

// export default FullImage;



// import React from 'react';

// interface FullImageProps {
//   imageUrl: string;
// }

// const FullImage: React.FC<FullImageProps> = ({ imageUrl }) => {
//   return (
//     <div className="relative h-screen overflow-hidden">
//       <div className="absolute inset-0 z-0 h-full section__padding-home">
//         <img src={imageUrl} alt="Hero Background" className="object-cover w-full h-full" />
//       </div>
//     </div>
//   );
// };

// export default FullImage;



// import React from 'react';
// import Image from 'next/image';
// import robot from '../../assets/images/robot.png';

// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
// };

// interface FullImageProps {
//   imageUrl: StaticImageData[];
// }

// export const Single = ({
//   imageUrl
// }: FullImageProps) => {
//   const displayPhoto = imageUrl && imageUrl.length > 0 ? imageUrl[0].src : null;

//   return (
//     <div className="relative h-screen overflow-hidden">
//       <div className="absolute inset-0 z-0 h-full section__padding-home">
//         <Image src={displayPhoto} alt="Hero Background" className="object-cover w-full h-full" />
//       </div>
//     </div>
//   );
// };




// import React from 'react';
// import Image from 'next/image';

// interface FullImageProps {
//   imageUrl: string;
// }

// export const Single = ({ imageUrl }: FullImageProps) => {
//   return (
//     <div className="relative h-screen overflow-hidden p-8 sm:p-4" style={{ margin: "4rem 4rem" }}>
//       <div className="absolute inset-0 z-0 h-full w-full ">
//         <Image src={imageUrl} alt="Hero Background" className="object-cover w-full h-full rounded-md" layout="fill" />
//       </div>
//     </div>
//   );
// };

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FullImageProps {
  imageUrl: StaticImageData;  
  alt: string;  
}

export const Single = ({ imageUrl, alt }: FullImageProps) => {
  return (
    <div className="gpt3__header-content section__padding">
      <div className="gpt3__header-image">
        <Image src={imageUrl.src} alt={alt} className="object-cover w-full h-full rounded-md" layout="fill" />
      </div>
    </div>
  );
};





// import React from 'react';
// import Image from 'next/image';
// import robot from '../../assets/images/robot.png';

// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
// };


// interface FullImageProps {
//   images: StaticImageData[];
// }

// const Single: React.FC<FullImageProps> = ({ images }) => {
//   const displayPhoto = images && images.length > 0 ? images[0].src : null;

//   return (
//     <div className="relative h-screen overflow-hidden">
//       <div className="absolute inset-0 z-0 h-full section__padding-home">
//         <Image src={displayPhoto} alt="Hero Background" className="object-cover w-full h-full" />
//       </div>
//     </div>
//   );
// };

// export default Single;
