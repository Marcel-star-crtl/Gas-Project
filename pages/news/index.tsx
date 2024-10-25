import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from "next";
import { posts } from "../../data/posts";
import { articles } from "../../data/articles";
import { PostBlock } from "@/components/PostBlock";
import { getPosts, getArticles } from "@/lib/service";
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

// const News = ({ posts, articles }: NewsPageProps) => {
const News = () => {
  return (
    <div>
      <div className="gpt3__header-image" style={{ position: 'relative' }}>
        <Image src={backgroundImage} alt="Header Background" />
        
        {/* Services Text */}
        <div className="about-us-text">
          <p>News</p>
        </div>
      </div>

      {/* Article Section */}
      <div className="padding__mobile mx-auto py-8" style={{padding: "4rem 4rem 1rem 4rem"}}>
        <div className="flex items-center" style={{ padding: "1rem 0" }}>
          <p className="mr-4" style={{ fontFamily: "Montserrat-Bold", width: "270px", fontWeight: "700", fontSize: "26px", color: "#309AF0" }}>Press Releases</p>
          <div className="w-full h-px bg-gray-300 items-end align-bottom " style={{background: "#67BDF8"}}></div>
        </div>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {articles.slice(0, 3).map((article) => (
            <div key={article.slug} className="bg-white rounded-lg border border-black p-4">
              <p className='' style={{fontSize: "12px"}}>Press Release</p>
              <p style={{fontSize: "12px"}}>{new Date(article.date).toLocaleDateString()}</p>
              <h2 className="font-bold my-6" style={{fontFamily: "Montserrat-Bold", fontSize: "16px", lineHeight: "1"}}>{article.title}</h2>
              <Link href={`/articles/${article.slug}`}>
                <button className="hover__btn-sec mt-2 text-black px-6 border border-black rounded-md" style={{fontSize: "12px"}}>Read More</button>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end mt-4" style={{paddingTop: "1rem"}}>
          <Link href="/press">
            <button className="hover__btn mr-4 bg-transparent border border-gray-500 rounded-md px-4 py-2 text-white" style={{ fontFamily: "Montserrat", background: "#1065C2", fontWeight: "700", fontSize: "12px" }}>All Press Releases</button>
          </Link>
        <div className="flex-1 h-px bg-gray-300" style={{background: "#67BDF8"}}></div>
        </div>
      </div>

      

      {/* Post Section */}
      {/* <div className="mx-auto py-8 section__padding">
        <div className="flex items-center" style={{ padding: "2rem 0" }}>
          <p className="" style={{ width: "200px", fontWeight: "700", fontSize: "20px" }}>Recent Articles</p>
          <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
        </div>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {posts.slice(0, 4).map((post) => (
            <PostBlock key={post.slug} post={post} />
          ))}
        </div>
        <div className="flex items-center" style={{ padding: "2rem 0" }}>
          <Link href="/postall">
            <button className="mr-4 bg-transparent border border-gray-500 rounded-md px-4 py-2" style={{ background: "#1065C2", color: "#fff", width: "200px", fontWeight: "700", fontSize: "16px" }}>All Articles</button>
          </Link>
          <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
        </div>
      </div> */}
      <div className="padding__mobile mx-auto py-4" style={{ padding: "1rem 4rem" }}>
        <div className="flex items-center" style={{ padding: "1rem 0 1rem 0" }}>
          <p className="mr-4" style={{ fontFamily: "Montserrat-Bold", width: "270px", fontWeight: "700", fontSize: "26px", color: "#309AF0" }}>Recent Articles</p>
          <div className="w-full h-px bg-gray-300 items-end align-bottom" style={{ background: "#67BDF8" }}></div>
        </div>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 4).map((post) => (
            <PostBlock key={post.slug} post={post} />
          ))}
        </div>
        <div className="flex items-center justify-end mt-4" style={{ padding: "1rem 0 2rem 0" }}>
          <Link href="/postall">
            <button className="hover__btn mr-4 bg-transparent border border-gray-500 rounded-md px-4 py-2 text-white" style={{ fontFamily: "Montserrat", background: "#1065C2", fontWeight: "700", fontSize: "12px" }}>All Articles</button>
          </Link>
          <div className="flex-1 h-px bg-gray-300" style={{ background: "#67BDF8" }}></div>
        </div>
      </div>

      <Connect imageUrl={serviceConnect} alt={"serviceConnect"} />
      <div style={{ padding: "3rem 4rem" }}>
        <div className="horizontal-divider" style={{ paddingLeft: "6rem", paddingRight: "6rem" }} />
      </div>
    </div>
  )
}

export default News;

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
