import React from "react";

const EverythingSection = () => {
  return (
    <div className="relative flex items-center justify-center bg-black text-white h-auto sm:h-auto md:h-auto lg:h-screen my-52 sm:my-36 md:my-44 lg:my-32">

      <div className="absolute h-[85vw] max-h-[700px] w-[85vw] max-w-[700px] rounded-full border border-white opacity-20"></div>
      {/* Inner Circle */}
      <div className="absolute h-[55vw] max-h-[400px] w-[55vw] max-w-[400px] rounded-full border border-white opacity-20"></div>

      <div className="text-center">
        <p className="font-seoulnamsan relative -top-4 text-base text-gray-300 sm:-top-6 sm:text-lg md:-top-10 md:text-2xl lg:-top-12 lg:text-3xl">
          ENGX LAB.
        </p>
        <h1 className="font-oswald text-[12vw] font-normal uppercase leading-[100%] text-[rgba(255,255,255,0.20)] sm:text-[10vw] md:text-[8vw] lg:text-[128px]">
          WE BUILD <br /> EVERYTHING
        </h1>
      </div>
    </div>
  );
};

export default EverythingSection;
