"use client";

import React, { useState } from "react";
import InfiniteScroll from "./InfiniteScroll";
import { FlipWords } from "./ui/flip-words";

const words = [
  "Achieve", "Build", "Create", "Design", "Engineer", 
  "Forge", "Grow", "Handle", "Innovate", "Juggle", 
  "Kickstart", "Lead", "Modify", "Nurture", "Optimize", 
  "Plan", "Quantify", "Refine", "Structure", "Tailor", 
  "Upgrade", "Vision", "Weave", "Execute", "Yield", "Zone"
];

const Hero = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Background Overlay when Button is Hovered */}
      {isButtonHovered && (
        <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-500 z-10"></div>
      )}

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/GridBg1.svg')",
          backgroundSize: "cover",
        }}
      >
        {/* Main Content Centering */}
        <div className="py-20 sm:py-32 md:py-44 flex flex-col items-center px-6 sm:px-12 relative z-10">
          
          {/* Status Banner */}
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 animate-glow rounded-full bg-green-600"></span>
            <p className="font-inter text-xs text-white sm:text-sm md:text-base lg:text-lg">
              Open to new collaborations
            </p>
          </div>

          {/* Hero Text */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center mt-4">
            Dream big,
          </h1>
          
          {/* Subheading with Glow */}
          <div className="w-[90%]">
            <h1
              className="text-center mt-4 font-bold font-sequel text-white/20 text-5xl sm:text-5xl md:text-5xl lg:text-[115px] leading-tight sm:leading-[1.2] transition-all duration-300 hover:text-white/50 ease-in"
              >
              We&apos;ll <FlipWords words={words} />
              <br />
              the rest.
            </h1>
          </div>

          {/* Email Button with Hover Effect */}
          <button
            className="mt-8 sm:mt-12 rounded-full text-white hover:text-black font-medium border border-white px-6 sm:px-9 py-2 duration-300 hover:bg-white transition-all shadow-none hover:shadow-[0_0_110px_10px_rgba(255,255,255,0.8)] text-sm sm:text-base relative z-20"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Email us
          </button>

          {/* Description */}
          <p className="mt-6 sm:mt-12 text-center text-xs text-white/60 sm:text-sm md:text-xl lg:text-[22px] leading-relaxed hover:text-white hover:text-shadow-[0px_0px_30px_#fdec6e] transition-all duration-200 ease-in">
            At Engineerians, we&apos;re more than just a team of professionals,
            <br />
            we&apos;re visionaries, problem-solvers, and creators.
          </p>

          {/* Large Text Animation with Glow */}
          <div className="mt-18 sm:mt-48 flex flex-col items-center justify-center bg-transparent relative">
            {/* Main Text with Hover Detection */}
            <div className="text-center relative transition-all duration-300">
              <span className="font-sequel font-bold text-5xl sm:text-6xl md:text-[7rem] text-black duration-500 hover:text-white/60 drop-shadow-[30px_30px_100px_rgba(255,255,255,0.8)]">
                THE ENGX LAB.
              </span>
            </div>
            {/* <SparklesPreview /> */}
          </div>
        </div>

        {/* Infinite Scroll Section */}
        <div className="flex w-full justify-center mt-0 sm:mt-0 mb-12 sm:mb-24 text-white">
          <InfiniteScroll />
        </div>
      </div>
    </div>
  );
};

export default Hero;
