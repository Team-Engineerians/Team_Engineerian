import React from 'react'

type Props = {}

const everythingSection = (props: Props) => {
  return (
    <div className="relative flex justify-center items-center h-screen w-full bg-black text-white overflow-hidden">

      {/* <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] border border-gray-600 rounded-full opacity-30" /> */}
      <div className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] border border-gray-600 rounded-full opacity-40" />
      <div className="absolute w-[200px] h-[200px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] border border-gray-600 rounded-full opacity-40" />
          
      <div className="absolute inset-0 flex justify-center items-center">
      <div className="text-center z-10">
        <h2 className="text-xl md:text-4xl text-gray-300 tracking-wide ">ENGX LAB.</h2>
        <h1
            className="font-bold text-5xl md:text-7xl lg:text-8xl text-white opacity-90 leading-tight"
            style={{ fontSize: "120px", color: "rgba(255, 255, 255, 0.20)" }}
        >
            WE BUILD <br /> EVERYTHING
        </h1>
      </div>
    </div>
    </div>
  );
};

export default everythingSection