import React from 'react';
import Image from 'next/image';

export const CTA = () => {
    const getRandomImage = () => {
        const randomImageId = Math.floor(Math.random() * 1000) + 1; 
        return `https://picsum.photos/200/300?random=${randomImageId}`; 
    };
    return (
        // <div className="container mx-auto section__padding">
        <div className="mx-auto section__padding">
            <div className="flex items-center" style={{padding: "0 4rem"}}>
                <p className="mr-4" style={{ width: "150px", fontWeight: "700px", fontSize: "20px" }}>Recent Articles</p>
                <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
            </div> 
            <div className="grid grid-cols-3 gap-4 height section__padding">
                <div className="bg-white rounded-lg shadow-md text-left">
                    <Image src={getRandomImage()} alt="Random Image" layout="responsive" width={200} height={300} className="w-full h-48 object-cover images-height"/>
                    <h2 className="text-xl font-bold mb-2 p-4 text-left my-10">NAEC 2023: LGV GAS GM, Operations Speaks about LGV GAS.</h2>
                    <button className="m-4 border border-black p-4 text-black px-4 py-2 rounded-md text-left">Read More</button>
                </div>
                <div className="bg-white rounded-lg shadow-md text-left">
                    <Image src={getRandomImage()} alt="Random Image" layout="responsive" width={200} height={300} className="w-full h-48 object-cover images-height"/>
                    <h2 className="text-xl font-bold mb-2 p-4 text-left my-10">NAEC 2023: LGV GAS GM, Operations Speaks about LGV GAS.</h2>
                    <button className="m-4 border border-black p-4 text-black px-4 py-2 rounded-md text-left">Read More</button>
                </div>
                <div className="bg-white rounded-lg shadow-md text-left">
                    <Image src={getRandomImage()} alt="Random Image" layout="responsive" width={200} height={300} className="w-full h-48 object-cover images-height"/>
                    <h2 className="text-xl font-bold mb-2 p-4 my-10">NAEC 2023: LGV GAS GM, Operations Speaks about LGV GAS.</h2>
                    <button className="m-4 border border-black p-4 text-black px-4 py-2 rounded-md text-left">Read More</button>
                </div>
            </div>
            <div className="flex items-center" style={{padding: "0 4rem"}}>
                <button className="mr-4 bg-transparent border border-gray-500 rounded-md px-4 py-2" style={{ background: "#1065C2", color: "#fff", width: "200px", fontWeight: "700", fontSize: "16px" }}>All Articles</button>
                <div className="w-full h-px bg-gray-300 items-end align-bottom"></div>
            </div>
        </div>
    );
};

export default CTA;
