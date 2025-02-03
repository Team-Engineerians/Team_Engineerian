import React from 'react';

const EverythingSection = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black text-white my-28">
      {/* Outer Circle */}
      <div className="absolute w-[90vw] max-w-[765px] h-[90vw] max-h-[765px] border border-white opacity-20 rounded-full"></div>
      {/* Inner Circle */}
      <div className="absolute w-[60vw] max-w-[483px] h-[60vw] max-h-[483px] border border-white opacity-20 rounded-full"></div>
      
      <div className="text-center">
        <p className="font-seoulnamsan text-lg md:text-2xl lg:text-3xl relative -top-6 md:-top-10 lg:-top-12 text-gray-300">
          ENGX LAB.
        </p>
        <h1 className="font-oswald font-normal uppercase text-[10vw] md:text-[8vw] lg:text-[144px] leading-[100%] text-[rgba(255,255,255,0.20)]">
          WE BUILD <br /> EVERYTHING
        </h1>
      </div>
    </div>
  );
};

export default EverythingSection;
