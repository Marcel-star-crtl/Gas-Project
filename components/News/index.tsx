import React from 'react';

export const News = () => {
  return (
    <div className="padding__mobile mx-auto section__padding"> 
      {/* Press Releases Header */}
      <div className="flex items-center justify-between" style={{marginBottom: "4rem"}}>
        <p className="mr-4 font-bold text-xl">Press Releases</p>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {/* News Card 1 */}
        <div className="bg-white rounded-lg border border-black p-4">
          <p className='font-bold'>Press Release</p>
          <p className='text-gray-600 text-sm'>20.02.2024</p>
          <h2 className="text-xl font-bold my-2">NAEC 2023: LGV GAS GM, Operations Speaks about LGV GAS.</h2>
          <button className="mt-2 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md">Read More</button>
        </div>

        {/* News Card 2 */}
        <div className="bg-white rounded-lg border border-black p-4">
          <p className='font-bold'>Press Release</p>
          <p className='text-gray-600 text-sm'>20.02.2024</p>
          <h2 className="text-xl font-bold my-2">NAEC 2023: LGV GAS GM, Operations Speaks about LGV GAS.</h2>
          <button className="mt-2 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md">Read More</button>
        </div>

        {/* News Card 3 */}
        <div className="bg-white rounded-lg border border-black p-4">
          <p className='font-bold'>Press Release</p>
          <p className='text-gray-600 text-sm'>20.02.2024</p>
          <h2 className="text-xl font-bold my-2">NAEC 2023: LGV GAS GM, Operations Speaks about LGV GAS.</h2>
          <button className="mt-2 bg-gray-200 hover:bg-gray-300 text-black px-4 py-2 rounded-md">Read More</button>
        </div>
      </div>

      {/* All Press Releases Button */}
      <div className="flex items-center justify-end mt-4" style={{paddingTop: "4rem"}}>
        <button className="mr-4 bg-transparent border border-gray-500 rounded-md px-4 py-2 text-white" style={{ background: "#1065C2", fontWeight: "700", fontSize: "16px" }}>All press releases</button>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>
    </div>
  );
};

export default News;
