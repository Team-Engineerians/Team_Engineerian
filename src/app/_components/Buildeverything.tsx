import React from 'react'

const everythingSection = () => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black text-white">
      {/* Outer Circle */}
      <div className="absolute w-[765px] h-[765px] flex-shrink-0 border border-white opacity-20 rounded-full"></div>
      {/* Inner Circle */}
      <div className="absolute w-[483px] h-[483px] flex-shrink-0 border border-white opacity-20 rounded-full"></div>
      
      <div className="text-center">
        <p className="font-seoulnamsan text-[28px] relative -top-12 text-gray-300">ENGX LAB.</p>
        <h1 className="text-center font-oswald font-normal text-[144px] leading-[100%] uppercase text-[rgba(255,255,255,0.20)]">WE BUILD <br /> EVERYTHING</h1>
      </div>
    </div>
  );
};

export default everythingSection