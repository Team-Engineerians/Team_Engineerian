"use client";

import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/assets/GridBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      {/* Status Banner */}
      <div className="px-4 py-2 transform -translate-x-1/2 flex items-center gap-3 rounded-full border-t border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)]">
        <span className="animate-glow h-2.5 w-2.5 rounded-full bg-green-600"></span>
        <p className="font-inter text-white text-sm md:text-base lg:text-lg">
          We are currently taking projects
        </p>
      </div>

      {/* Hero Text */}
      <h1 className="font-sequel font-normal text-5xl mt-4">
        <span className="text-white">Dream big,</span>
        <br />
        <span className="text-white/20">Well engineer</span>{" "}
        <span className="text-white/20">the rest.</span>
      </h1>

      {/* Email Button */}
      <button className="mt-6 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-300 transition">
        Email us
      </button>

      {/* Description */}
      <p className="mt-4 text-white/60 text-sm max-w-xl">
        At Engineerians, we're more than just a team of professionals,
        we're visionaries,problem-solvers,and creators
      </p>

      {/* Infinite Scroll Section */}
      <div className="absolute bottom-10 w-full">
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default Hero;