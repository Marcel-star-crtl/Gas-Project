// //types.ts
// export interface Post {
//   content: string;
//   featuredImage: {
//     node: {
//       sourceUrl: string;
//     };
//   };
//   slug: string;
//   title: string;
//   tags: {
//     nodes: {
//       name: string;
//     }[];
//   };
// }

// export interface Article {
//   featuredImage: {
//     node: {
//       sourceUrl: string;
//     };
//   };
//   date: string;
//   title: string;
//   slug: string;
//   content: string;
//   tags: {
//     nodes: { name: string }[];
//   };
// }





// types.ts
export interface Post {
  slug: string;
  title: string;
  content: string;
  featuredImage: string;
  date: string;
}

export interface Article {
  slug: string;
  title: string;
  content: string;
  featuredImage: string;
  date: string;
  tags: string[];
}