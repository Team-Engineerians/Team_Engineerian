"use client";

import React from "react";
import InfiniteScroll from "./InfiniteScroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "150vh", // Ensure the container is tall enough
        backgroundImage: "url('/assets/GridBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content Centering */}
      <div className="mt-48 flex flex-col items-center justify-center">
        {/* Status Banner */}
        <div className="top-0 flex items-center gap-3 rounded-full border-t border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)] px-4 py-2">
          <span className="h-2.5 w-2.5 animate-glow rounded-full bg-green-600"></span>
          <p className="font-inter text-xs text-white sm:text-sm md:text-base lg:text-lg">
            We are currently taking projects
          </p>
        </div>

        {/* Hero Text */}
        <h1 className="mt-6 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-white">Dream big,</span>
          <br />
          <span className="text-white/60">Well engineer</span>
          {"  "}
          <br />
          <span className="text-white/60">the rest.</span>
        </h1>

        {/* Email Button */}
        <button className="mt-8 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-300">
          Email us
        </button>

        {/* Description */}
        <p className="mt-6 max-w-xl text-center text-xs text-white/60 sm:text-sm md:text-base">
          At Engineerians, we&apos;re more than just a team of professionals,
          we&apos;re visionaries, problem-solvers, and creators.
        </p>

        {/* New Div with animation and hover effect */}
        <div className="mt-64 flex items-center justify-center bg-black">
  <div className="text-center">
  <span className="font-sequel text-[7rem] text-black drop-shadow-[50px_50px_150px_rgba(255,255,255,0.8)]">
      THE ENGX LAB.
    </span>
  </div>
</div>

      </div>

      {/* Infinite Scroll Section */}
      <div className="absolute bottom-10 flex w-full justify-center">
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default Hero;
