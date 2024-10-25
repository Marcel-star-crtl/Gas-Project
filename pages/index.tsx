import { GetStaticProps } from "next";
import { Hero } from "@/components/Hero";
import { PostBlock } from "@/components/PostBlock";
import { getPosts, getArticles } from "@/lib/service";
import { News } from "@/components/News";
import { Combo } from "@/components/Combo"
import { Connect } from "@/components/Connect";
import { Sponsors } from "@/components/Sponsors";
import { Related } from "@/components/Related";
import { Future } from "@/components/Future";
import { CTA } from "@/components/CTA";
import { Journey } from "@/components/Journey";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const smokeVideoUrl = '/assets/images/smoke.mp4';
import play from '../assets/images/play.png'
import Quality from '../assets/images/Quality.jpg';
import Customer from '../assets/images/Customer.jpg';
import Experience from '../assets/images/Experience.jpg';
import Environtment from "@/components/Environment";
import backgroundImageUrl from '../assets/images/Douala.jpg';
import Journeys from '../assets/images/rsz_jurney.png';
import { Single } from "@/components/Single";

interface Post {
  slug: string;
  title: string;
  featuredImage: { node: { sourceUrl: string; }; };
}

interface Article {
  slug: string;
  title: string;
  featuredImage: { node: { sourceUrl: string; }; };
  date: string;
}

interface HomePageProps {
  posts: Post[];
  articles: Article[];
}

export default function HomePage({ posts, articles }: HomePageProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      setPlaying(!playing);
      if (!playing || videoRef.current.ended) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleVideoEnded = () => {
    setPlaying(false);
  };


  return (
    <>
      <Hero />
      <div className="padding__mobile flex flex-col py-10 sm:py-20 items-start section__padding">
      <div className="horizontal-divider w-full mb-8 sm:mb-12" />
        <div className="text-left" style={{ marginTop: "0", marginBottom: "2rem", fontSize: "clamp(32px, 4vw, 72px)"}}>
          <p className="text-4xl sm:text-6xl font-bold text-gray-800" style={{ fontFamily: "Montserrat-Bold", color: "#67BDF8", fontWeight: "700", fontSize: "clamp(2rem, 6vw, 8rem)" }}>
          </p>
        </div>
        <div className="section__1 flex flex-col sm:flex-row items-center justify-between" style={{ marginBottom: "2rem" }}>
          <div className="CustomHeading w-full sm:w-1/2" style={{ fontSize: "clamp(32px, 4vw, 90px)" }}>
            <h2 className="text-6xl mb-4 mt-8 sm:mt-0 sm:text-6xl font-bold text-gray-800" style={{ fontFamily: "Montserrat-Bold", textAlign: "left", color: "#67BDF8", lineHeight: "1.2", fontWeight: "700", fontSize: "clamp(32px, 6vw, 80px)" }}>
              We have operated in the Nigerian LPG environment since 1995
            </h2>
          </div>
          <div className="section__1 w-full sm:w-1/4 mt-4 sm:0 mb-8 sm:mt-0" style={{ fontSize: "clamp(1rem, 1.3vw, 1.5rem)", textAlign: "right", marginTop: "auto" }}>
            <p className="text-gray-800" style={{fontFamily: "Montserrat", fontWeight: "400", lineHeight: "1.2", fontSize: "16px"}}>
            Since 1995, we’ve been dedicated to serving YOU in the Nigerian LPG environment in the areas of LPG plant operations, LPG marketing, and LPG fleet transportation.  With over 75 years of combined industry experience, our principal partners and technicians are committed to delivering top-tier gas services across Nigeria.
            </p>
          </div>
        </div>
        <div className="horizontal-divider w-full mt-8 sm:mt-12" />
      </div>


      
      <div className="mx-auto">
        <div className="padding__mobile-spect w-full">
          <div className="text-center sm:text-left mb-12">
            <p className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4" style={{ fontFamily: "Montserrat-Bold", lineHeight: "1.2", color: "#309AF0", fontSize: "clamp(32px, 6vw, 36px)" }}>We Deliver Value</p>
          </div>
          <div className="mb-8">
            {/* Images aligned in a row for larger screens */}
            <div className="hidden sm:flex justify-between">
            <Image src={Experience} alt="Experience" className="w-1/3" />
              <Image src={Quality} alt="Quality" className="w-1/3" />
              <Image src={Customer} alt="Customer" className="w-1/3" />
            </div>
            
            {/* Images aligned in a column for smaller screens */}
            <div className="sm:hidden flex flex-col gap-4 items-center">
              <Image src={Experience} alt="Experience" className="w-full" />
              <Image src={Quality} alt="Quality" className="w-full" />
              <Image src={Customer} alt="Customer" className="w-full" />
            </div>
          </div>
        </div>
      </div>


      <div className='padding__mobile-video ulev__details-video section__padding'>
        <div className="">
          <video
            ref={videoRef}
            controls
            width="100%"
            height="600px"
            style={{ objectFit: 'cover' }}
            onEnded={handleVideoEnded}
            autoPlay
            muted
          >
            <source src={smokeVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="padding__mobile flex flex-col py-20 items-start section__padding">
        <div className="horizontal-divider" />
        <div className="flex flex-col items-center sm:flex-row" style={{ marginTop: "4rem", marginBottom: "4rem", fontFamily: "Montserrat" }}>
          <div className="w-full text-center sm:w-2/3 sm:text-left mb-8 sm:mb-0">
            <h2 className="mb-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold" style={{ color: "#67BDF8", lineHeight: "1.2", fontWeight: "700", fontFamily: "Montserrat-Bold", fontSize: "clamp(32px, 6vw, 80px)" }}>
              <span style={{ color: "#B7E8EC" }}>We have operated in the</span> Nigerian LPG environment <span style={{ color: "#B7E8EC" }}>since 1995</span>
            </h2>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end sm:items-end sm:mt-auto">
            <a href="#" className="hover__btn rounded-md px-6 py-2 mt-4 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" style={{ fontFamily: "Montserrat-Regular", background: "#1065C2" }}>
              Explore Now
            </a>
          </div>
        </div>
        <div className="horizontal-divider" />
      </div>


      <Future />
      <Sponsors />

      <div className="padding__mobile flex flex-col py-20 items-start px-16 sm:px-8 lg:px-16">
        <div className="horizontal-divider" />
        
        <div className="flex flex-col sm:flex-row items-center mt-16 mb-16" style={{ fontFamily: "Montserrat" }}>
          <div className="w-full sm:w-2/3 text-center sm:text-left">
            <h2 className="hover__text mb-4 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold" style={{ color: "#67BDF8", lineHeight: "1.1", fontWeight: "700", fontFamily: "Montserrat-Bold" }}>
              <span className="hover__text" style={{ color: "#E5E5E5" }}>Explore what we are doing right here, right now.</span>
            </h2>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end sm:items-end sm:mt-0 mt-16 sm:mt-auto">
            <a
              href="#"
              className="hover__btn rounded-md px-6 py-2.5 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style={{ fontFamily: "Montserrat-Regular", background: "#1065C2" }}
            >
              Explore More
            </a>
          </div>

        </div>

        <div className="horizontal-divider" />
      </div>


      {/* <News /> */}
      {/* Article Section */}
      <div className="padding__mobile-article mx-auto pb-16 px-16 sm:pb-16 sm:px-16">
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
      {/* <CTA /> */}

      <div className="padding__mobile-post mx-auto py-8" style={{ padding: "1rem 4rem" }}>
        <div className="flex items-center" style={{ padding: "2rem 0 1rem 0" }}>
          <p className="mr-4" style={{ fontFamily: "Montserrat-Bold", width: "270px", fontWeight: "700", fontSize: "26px", color: "#309AF0" }}>Recent Articles</p>
          <div className="w-full h-px bg-gray-300 items-end align-bottom" style={{ background: "#67BDF8" }}></div>
        </div>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.slice(0, 3).map((post) => (
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
      
      <Journey />
      {/* <div className="relative h-[80vh] overflow-hidden" style={{ margin: "6rem 0" }}>
        <div className="absolute inset-0 z-0 w-full h-full section__padding-home">
          <Image src={Journeys} alt="Hero Background" layout="fill" objectFit="cover" />
        </div>
      </div> */}
      {/* <Single imageUrl={Journeys} /> */}


      <div className='padding__mobile-video ulev__details-video section__padding'>
        <div className="">
          <video
            ref={videoRef}
            controls
            width="100%"
            height="600px"
            style={{ objectFit: 'cover' }}
            onEnded={handleVideoEnded}
            autoPlay
            muted
          >
            <source src={smokeVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>


      <div className="flex flex-col py-20 items-start section__padding" style={{ fontFamily: "Montserrat" }}>
        <div className="horizontal-divider" />
        <div className="text-left sm:text-left mt-16" style={{ fontWeight: "700", color: "#67BDF8" }}>
          <p className="mb-4 text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold" style={{ color: "#67BDF8", lineHeight: "1.1", fontFamily: "Montserrat-Bold", fontSize: "clamp(32px, 6vw, 80px)" }}>
            Gas Piping <br /> Solution in <br /> Nigeria and West Africa
          </p>
        </div>
        <div className="flex flex-col sm:flex-row mb-16">
          <div className="w-full sm:w-2/3 mb-8 sm:mb-0" style={{ fontFamily: "Montserrat", fontSize: "16px" }}>
            <h2 className="text-gray-800" style={{ fontWeight: "400", lineHeight: "1.3", fontSize: "16px" }}>
              Since 1995, we’ve been dedicated to serving YOU in the Nigerian LPG environment in the areas of LPG plant operations, LPG marketing, and LPG fleet transportation.  With over 75 years of combined industry experience, our principal partners and technicians are committed to delivering top-tier gas services across Nigeria...
            </h2>
          </div>
          <div className="w-full sm:w-1/3 flex justify-center sm:justify-end sm:items-end sm:mt-0 mt-4">
            <a
              href="#"
              className="hover__btn rounded-md px-6 py-2.5 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style={{ fontFamily: "Montserrat-Regular", background: "#1065C2" }}
            >
              More about Sustainability
            </a>
          </div>
        </div>
        <div className="horizontal-divider" />
      </div>

      <Environtment />
      <Connect imageUrl={backgroundImageUrl} alt={"backgroundImageUrl"} />
      <div style={{ padding: "3rem 4rem 3rem 4rem"}}>
        <div className="horizontal-divider" style={{paddingLeft: "6rem", paddingRight: "6rem"}}/>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const posts = await getPosts(100);
  const articles = await getArticles(100);
  return {
    props: {
      posts,
      articles,
    },
    revalidate: 3600,
  };
};