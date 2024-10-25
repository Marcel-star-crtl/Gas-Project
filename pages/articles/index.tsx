import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { articles } from "@/data/articles";
import backgroundImage from '../../assets/images/community.png';

const Press = () => {
  return (
    <div>
      <div className="gpt3__header-image" style={{ position: 'relative' }}>
        <Image src={backgroundImage} alt="Header Background" />
        <div className="about-us-text">
          <p>Articles</p>
        </div>
      </div>

      <div className="mx-auto py-8 section__padding">
        <div className="flex items-center" style={{ padding: "2rem 0" }}>
          <p className="" style={{ width: "200px", fontWeight: "700", fontSize: "20px" }}>
            Recent Articles
          </p>
          <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
        </div>
        <div className="my-6 grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
          {articles.slice(0, 4).map((article) => (
            <div key={article.slug} className="bg-white rounded-lg border border-black p-4">
              <p className='font-bold'>Press Release</p>
              <p>{new Date(article.date).toLocaleDateString()}</p>
              <h2 className="text-xl font-bold my-2">{article.title}</h2>
              <Link href={`/articles/${article.slug}`}>
                <button className="hover__btn-sec mt-2 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "3rem 4rem" }}>
        <div className="horizontal-divider" style={{ paddingLeft: "6rem", paddingRight: "6rem" }} />
      </div>
    </div>
  );
};

export default Press;