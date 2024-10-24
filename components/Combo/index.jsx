import React from 'react';
import Image from 'next/image'; 
import robot from '../../assets/images/robot.png';

export const Combo = () => {
    return (
        <div className="padding__mobile relative overflow-hidden bg-gray-900">
            <Image
                src={robot}
                alt="Explore what we are doing right here, right now"
                layout="fill" 
                objectFit="cover" 
                priority 
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                <p className="text-5xl text-black font-bold text-center leading-tight">
                Explore what we are doing right here, right now.
                </p>
                <button className="mt-8 px-4 py-2 bg-black text-gray-800 font-bold rounded-md hover:bg-opacity-75">
                    Explore Now
                </button>
            </div>
        </div>
    );
};

export default Combo;
