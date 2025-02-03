"use client";

import React, { useState } from "react";
import InfiniteScroll from "./InfiniteScroll";
import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";
import { SparklesPreview } from "./SparkelsUi";

const words = [
  "Achieve", "Build", "Create", "Design", "Engineer", 
  "Forge", "Grow", "Handle", "Innovate", "Juggle", 
  "Kickstart", "Lead", "Modify", "Nurture", "Optimize", 
  "Plan", "Quantify", "Refine", "Structure", "Tailor", 
  "Upgrade", "Vision", "Weave", "Execute", "Yield", "Zone"
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredText1, setHoveredText1] = useState(false);
  const [hoveredText2, setHoveredText2] = useState(false);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setHoveredState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setHoveredState(true);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundImage: "url('/assets/GridBg.svg')",
        backgroundSize: "cover",
      }}
    >
      {/* Main Content Centering */}
      <div className="py-20 sm:py-32 md:py-44 flex flex-col items-center px-6 sm:px-12">

        {/* Status Banner */}
        <div className="flex items-center gap-3 rounded-full border-t border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)] px-4 py-2">
          <span className="h-2.5 w-2.5 animate-glow rounded-full bg-green-600"></span>
          <p className="font-inter text-xs text-white sm:text-sm md:text-base lg:text-lg">
          Open to new collaborations
          </p>
        </div>

        {/* Hero Text */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center mt-4">
          Dream big,
        </h1>

        {/* Cursor Glow Effect */}
        {(hoveredText1 || hoveredText2) && (
          <motion.div
            className="absolute w-[100px] h-[100px] bg-white opacity-100 blur-2xl pointer-events-none"
            animate={{
              top: mousePosition.y - 150,
              left: mousePosition.x - 150,
            }}
            transition={{ type: "tween", ease: "linear", duration: 0 }}
          />
        )}

        {/* Subheading with Glow */}
        <h1
          className="text-center mt-4 font-bold font-sequel text-white/20 text-5xl sm:text-5xl md:text-5xl lg:text-[115px] leading-tight sm:leading-[1.2] transition-all duration-300 hover:text-white/50 ease-in"
          onMouseMove={(e) => handleMouseMove(e, setHoveredText1)}
          onMouseEnter={() => setHoveredText1(true)}
          onMouseLeave={() => setHoveredText1(false)}
        >
          We&apos;ll <FlipWords words={words} />
          <br />
          the rest.
        </h1>

        {/* Email Button */}
        <button className="mt-8 sm:mt-12 rounded-full text-white hover:text-black font-medium border border-white px-6 sm:px-9 py-2 duration-300 hover:bg-white transition-all shadow-none hover:shadow-[0_0_110px_10px_rgba(255,255,255,0.8)] text-sm sm:text-base">
          Email us
        </button>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-center text-xs text-white/60 sm:text-sm md:text-xl lg:text-[22px] leading-relaxed hover:text-white hover:text-shadow-[0px_0px_30px_#fdec6e] transition-all duration-200 ease-in">
          At Engineerians, we&apos;re more than just a team of professionals,
        <br />
          we&apos;re visionaries, problem-solvers, and creators.
        </p>


        {/* Large Text Animation with Glow */}
        <div className="mt-16 sm:mt-44 flex flex-col items-center justify-center bg-transparent relative">
          {/* Main Text with Hover Detection */}
          <div className="text-center relative transition-all duration-300">
            <span className="font-sequel font-bold text-5xl sm:text-6xl md:text-[7rem] text-white/60 duration-500 hover:text-white">
              THE ENGX LAB.
            </span>
          </div>
          <SparklesPreview />
        </div>
      </div>

      {/* Infinite Scroll Section */}
      <div className="flex w-full justify-center mt-0 sm:mt-0 mb-12 sm:mb-24 text-white">
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default Hero;
