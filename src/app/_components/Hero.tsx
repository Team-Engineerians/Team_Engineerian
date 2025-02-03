"use client";

import React, { useState, useRef } from "react";
import InfiniteScroll from "./InfiniteScroll";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLSpanElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (textRef.current) {
      const { left, top } = textRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setMousePos({ x, y });
    }
  };

  return (
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
      <div className="py-24 sm:py-32 md:py-44 flex flex-col items-center px-6 sm:px-12">
        {/* Hero Text */}
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center">
          Dream big,
        </h1>

        {/* Subheading */}
        <h1 className="text-center mt-6 font-bold font-sequel text-white/20 text-2xl sm:text-4xl md:text-5xl lg:text-[115px] leading-tight sm:leading-[1.2]">
          We'll engineer
          <br />
          the rest.
        </h1>

        {/* Email Button */}
        <button className="mt-8 sm:mt-12 rounded-full text-white hover:text-black font-medium border border-white px-6 sm:px-9 py-2 hover:bg-white transition-all shadow-none hover:shadow-[0_0_110px_10px_rgba(255,255,255,0.8)] text-sm sm:text-base">
          Email us
        </button>

        {/* Status Banner */}
        <div className="flex items-center gap-2 sm:gap-3 mt-6 sm:mt-10">
          <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 animate-glow rounded-full bg-green-600"></span>
          <p className="text-white text-xs sm:text-[14px]">
            We are currently taking projects
          </p>
        </div>

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-center text-xs text-white/60 sm:text-sm md:text-xl lg:text-[22px] leading-relaxed">
          At Engineerians, we&apos;re more than just a team of professionals,
          <br />
          we&apos;re visionaries, problem-solvers, and creators.
        </p>

        {/* Large Text Animation with Cursor Glow */}
        <div
          className="mt-24 sm:mt-44 flex items-center justify-center bg-transparent group"
          onMouseMove={handleMouseMove}
        >
          <div className="text-center">
            <span
              ref={textRef}
              className="font-sequel text-5xl sm:text-6xl md:text-[7rem] text-black relative glow-mask"
              style={{
                "--x": `${mousePos.x}px`,
                "--y": `${mousePos.y}px`,
              } as React.CSSProperties}
            >
              THE ENGX LAB.
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Section */}
      <div className="flex w-full justify-center mt-10 sm:mt-16">
        <InfiniteScroll />
      </div>
    </div>
  );
}
