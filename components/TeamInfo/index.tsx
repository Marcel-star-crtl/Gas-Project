// import React from 'react';
// import Image from 'next/image';
// import robot from '../../assets/images/robot.png';

// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
// };

// interface ArticleProps {
//   photos: StaticImageData[];
//   name: string;
//   address: string;
// }

// export const TeamInfo = ({
//   photos,
//   name,
//   address,
// }: ArticleProps) => {
//   const displayPhoto = photos && photos.length > 0 ? photos[0].src : null;

//   return (
//     <div className='ulev__blog-container_article'>
//       <div className='ulev__blog-container_article-image'>
//         {displayPhoto && <Image src={displayPhoto} alt="team_image" />}
//       </div>
//       <div className='ulev__blog-container_article-content'>
//         <div className='detail'>
//           <h3 className='name' style={{ fontFamily: "Montserrat-Bold", fontSize: "28px", fontWeight: "700", color: "#fff" }}>{name}</h3>
//           <h5 className='address' style={{ textAlign: "left", marginTop: "0", fontSize: "14px", color: "#9CDEEC" }}>{address}</h5>
//         </div>
//       </div>
//     </div>
//   );
// };



import React from 'react';
import Image from 'next/image';

interface StaticImageData {
  src: string;
  height: number;
  width: number;
}

interface ArticleProps {
  photos: StaticImageData[];
  name: string;
  address: string;
}

export const TeamInfo: React.FC<ArticleProps> = ({ photos, name, address }) => {
  const displayPhoto = photos && photos.length > 0 ? photos[0] : null;

  return (
    <div className='ulev__blog-container_article'>
      <div className='ulev__blog-container_article-image'>
        {displayPhoto && <Image src={displayPhoto.src} alt="team_image" width={displayPhoto.width} height={displayPhoto.height} />}
      </div>
      <div className='ulev__blog-container_article-content'>
        <div className='detail'>
          <h3 className='name' style={{ fontFamily: "Montserrat-Bold", fontSize: "28px", fontWeight: "700", color: "#fff" }}>{name}</h3>
          <h5 className='address' style={{ textAlign: "left", marginTop: "0", fontSize: "14px", color: "#9CDEEC" }}>{address}</h5>
        </div>
      </div>
    </div>
  );
};
