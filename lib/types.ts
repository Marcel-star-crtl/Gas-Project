// // types.ts
// export interface Post {
//     content: string;
//     featuredImage: {
//       node: {
//         sourceUrl: string;
//       };
//     };
//     slug: string;
//     title: string;
// }
  
// // export interface Article {
// //     content: string;
// //     featuredImage: {
// //         node: {
// //             sourceUrl: string;
// //         };
// //     };
// //     slug: string;
// //     title: string;
// // }
  

// export interface Article {
//     date: string;
//     content: string;
//     slug: string;
//     title: string;
// }





//types.ts
export interface Post {
  content: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  slug: string;
  title: string;
  tags: {
    nodes: {
      name: string;
    }[];
  };
}

export interface Article {
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  date: string;
  title: string;
  slug: string;
  content: string;
  tags: {
    nodes: { name: string }[];
  };
}
