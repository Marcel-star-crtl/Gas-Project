import React from 'react';

export const Related = () => {
  return (
    <div className="relative overflow-hidden bg-white my-20">
      {/* <div class="horizontal-divider"></div> */}
      <div className="flex flex-col justify-between h-full px-8 py-20">
        <p className="text-5xl text-gray-800 font-bold text-left leading-tight mb-8">
          Explore what we are doing right here, right now.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 self-end">
          Explore Now
        </button>
      </div>
      {/* <div class="horizontal-divider"></div> */}
    </div>
  );
}

export default Related;


