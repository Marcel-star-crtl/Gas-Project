// import React from 'react';
// import Link from 'next/link'; 
// import './team.css';
// import { team1, team2, team3, team4, team5, team6, team7, team8, team9 } from './imports';

// const Team = () => {
//   const teamMembers = [
//     { id: 1, photos: [team1], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//     { id: 2, photos: [team2], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//     { id: 3, photos: [team3], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//     { id: 4, photos: [team4], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//     { id: 5, photos: [team5], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//     { id: 6, photos: [team6], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//     { id: 7, photos: [team7], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//     { id: 8, photos: [team8], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//     { id: 8, photos: [team9], name: "Dr. Geral Doe", address: "Chief Executive Officer" },
//   ];

//   return (
//     <div className="ulev__team section__padding">
//       <div className='ulev__team-head'>
//         <h1 className='team__intro'>Leadership</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus odit, consequatur soluta quasi nisi nam nobis enim officia! Cupiditate distinctio ipsa delectus eveniet accusamus sint? Earum corrupti quos adipisci veritatis?.</p>
//       </div>
//       <div className='ulev__team-container'>
//         <div className='ulev__team-container_group'>
//           {teamMembers.map((member) => (
//             <Link key={member.id} href={`/teamDetails/${member.id}`}>
//               {/* Wrap the Link component around the Article */}
//               <a>
//                 <Article photos={member.photos} name={member.name} address={member.address} showDetailsInfo={false} />
//               </a>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Team;

import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index