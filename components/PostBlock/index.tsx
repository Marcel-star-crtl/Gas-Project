// import Link from "next/link";
// import Image from "next/image";

// import defaultImage from "@/assets/images/default.jpg";

// export const PostBlock = ({ post }: { post: any }) => {
//   return (
//     <div className="post-block p-2 rounded-md">
//       <Link href="/post-link">
//         <div className="relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
//           <Image
//             src={defaultImage}
//             alt="Post title"
//             className="absolute rounded-md h-full w-full object-cover"
//           />
//         </div>
//       </Link>
//       <Link href="/post-link" className="post-content my-4">
//         <h3 className="text-2xl py-4">Post Title</h3>
//         <p className="italic">Post excerpt</p>
//       </Link>
//     </div>
//   );
// };











import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export const PostBlock = ({ post }: { post: any }) => {
  return (
    <div className="post-block bg-white border border-black text-left rounded-md">
      <Link href={`/posts/${post.slug}`}>
        <div className="relative h-60">
          <Image
            src={post.featuredImage?.node?.sourceUrl ?? defaultImage}
            fill
            alt={post.title}
            className="absolute rounded-md h-full w-full object-cover"
          />
        </div>
      </Link>
      <Link href={`/posts/${post.slug}`} className="post-content">
        <h2 className="font-bold mt-5 ml-4 mr-4" style={{ fontFamily: "Montserrat-Bold", fontSize: "16px", lineHeight: "1" }}>
          {post.title}
        </h2>
        <div className="italic" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
        <button className="hover__btn-sec m-4 text-black px-6 border border-black rounded-md" style={{ fontSize: "12px" }}>Read More</button>
      </Link>
    </div>
  );
};
