// import Link from "next/link";

// export const Hero = () => {
//   return (
//     <section className="container mx-auto py-12 text-center border-b">
//       <div>
//         <h1 className="text-2xl md:text-4xl">
//           Hey, <strong>welcome to {"Jeffrey's"} blog</strong>. See my thoughts,
//           stories and ideas.
//         </h1>
//         <p className="my-6 text-lg">
//           Follow me on{" "}
//           <Link
//             href="https://twitter.com/JeffreySunny1"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="underline text-blue-500"
//           >
//             Twitter
//           </Link>
//           .
//         </p>
//         <p className="text-center">😎😎😎</p>
//       </div>
//     </section>
//   );
// };







// import Link from "next/link";
// import React, { useState } from 'react';
// import { Dialog } from '@headlessui/react';
// import Image from 'next/image';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// // Images
// import robotImage from '../../assets/images/Hero.png';
// import logo from '../../assets/images/LogoLGV.png';

// const navigation = [
//   { name: 'About Us', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Community', href: '/community' },
//   { name: 'News', href: '/news' },
//   { name: 'Contact Us', href: '/contact' },
// ];

// export const Hero = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <section className="mx-auto py-12 text-center border-b relative overflow-hidden">
//       <div className="bg-white">
//         <Image
//           src={robotImage}
//           alt="Background"
//           layout="fill"
//           objectFit="cover"
//         />

//         <div className="relative isolate px-6 pt-14 lg:px-8">
//           <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
//             <div className="text-center" style={{ width: "100%" }}>
//               <h1 className="text-4xl tracking-tight text-white sm:text-5xl" style={{ fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "1.2", fontSize: "clamp(32px, 5vw, 50px)" }}>
//                 The Number One LPG Gas <span className="hero__hover" style={{ color: "#309AF0" }}>Piping Solutions</span> Provider In Nigeria.
//               </h1>

//               <div className="mt-10 flex items-center justify-center gap-x-6">
//                 <a
//                   href="#"
//                   className="hover__btn rounded-md px-8 py-2.5 mt-16 text-sm text-white shadow-sm hover:bg-[#309AF0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#309AF0]"
//                   style={{ fontFamily: "Montserrat-Regular", background: "#1065C2" }}
//                 >
//                   Explore More
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;





import Link from "next/link";
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Images
import robotImage from '../../assets/images/Hero.png';
import logo from '../../assets/images/LogoLGV.png';

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Community', href: '/community' },
  { name: 'News', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
];

export const Hero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="mx-auto py-12 text-center border-b relative overflow-hidden">
      <div className="bg-white">
        <Image
          src={robotImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center" style={{ width: "100%" }}>
              <h1 className="text-4xl tracking-tight text-white sm:text-5xl" style={{ fontFamily: "Montserrat-Bold", fontWeight: "900", lineHeight: "1.2", fontSize: "clamp(32px, 5vw, 50px)" }}>
                The Number One LPG Gas <span className="hero__hover" style={{ animation: "color-change 5s infinite", color: "#309AF0" }}>Piping Solutions</span> Provider In Nigeria.
              </h1>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="hover__btn rounded-md px-8 py-2.5 mt-16 text-sm text-white shadow-sm hover:bg-[#309AF0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#309AF0]"
                  style={{ fontFamily: "Montserrat-Regular", background: "#1065C2" }}
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

