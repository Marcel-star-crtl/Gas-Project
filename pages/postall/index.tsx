import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from "next";
import { posts } from "../../data/posts";
import { PostBlock } from "@/components/PostBlock";
// import { getPosts, getArticles } from "@/lib/service";
import Connect from '@/components/Connect';

import backgroundImage from '../../assets/images/community.png';
import serviceConnect from '../../assets/images/serviceConnect.png';

// interface Post {
//   slug: string;
//   title: string;
//   featuredImage: { node: { sourceUrl: string; }; };
// }

// interface Article {
//   slug: string;
//   title: string;
//   featuredImage: { node: { sourceUrl: string; }; };
//   date: string;
// }

// interface NewsPageProps {
//   posts: Post[];
//   articles: Article[];
// }

// const Postall = ({ posts, articles }: NewsPageProps) => {
const Postall = () => {
  return (
    <div>
      <div className="gpt3__header-image" style={{ position: 'relative' }}>
        <Image src={backgroundImage} alt="Header Background" />
        
        {/* Services Text */}
        <div className="about-us-text">
          <p>Press Release</p>
        </div>
      </div>

      {/* Post Section */}
      <div className="mx-auto py-8 section__padding">
        <div className="flex items-center" style={{ padding: "2rem 0" }}>
          <p className="" style={{ width: "200px", fontWeight: "700", fontSize: "20px" }}>Recent Articles</p>
          <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
        </div>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {posts.slice(0, 4).map((post) => (
              <PostBlock key={post.slug} post={post} />
            ))}
        </div>
      </div>

      <div style={{ padding: "3rem 4rem" }}>
        <div className="horizontal-divider" style={{ paddingLeft: "6rem", paddingRight: "6rem" }} />
      </div>
    </div>
  )
}

export default Postall;

// export const getStaticProps: GetStaticProps<NewsPageProps> = async () => {
//   const posts = await getPosts(100);
//   const articles = await getArticles(100);

//   return {
//     props: {
//       posts,
//       articles,
//     },
//     revalidate: 3600,
//   };
// };
