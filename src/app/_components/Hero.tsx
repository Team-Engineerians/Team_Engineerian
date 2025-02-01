"use client";

import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: 1440,
        height: 1107,
        backgroundImage: "url('/assets/GridBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen text-white px-4]">
        {/* Status Banner */}
        <div className="top-0 px-4 py-2 flex items-center gap-3 rounded-full border-t border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)]">
          <span className="animate-glow h-2.5 w-2.5 rounded-full bg-green-600"></span>
          <p className="font-inter text-white text-sm md:text-base lg:text-lg">
            We are currently taking projects
          </p>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-6 text-center">
          <span className="text-white">Dream big,</span>
          <br />
          <span className=" text-white/20">Well engineer</span>{"  "}
          <br />
          <span className="text-white/20">the rest.</span>
        </h1>

        {/* Email Button */}
        <button className="mt-8 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-300 transition">
          Email us
        </button>

        {/* Description */}
        <p className="mt-6 text-white/60 text-sm sm:text-base max-w-xl text-center">
          At Engineerians, we're more than just a team of professionals,
          we're visionaries, problem-solvers, and creators.
        </p>

        
      </div>
        {/* Infinite Scroll Section */}
        <div className="absolute bottom-10 w-full flex justify-center">
          <InfiniteScroll />
        </div>
    </div>
  );
};

export default Hero;
