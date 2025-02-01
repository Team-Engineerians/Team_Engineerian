"use client";

import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "100%",
        backgroundImage: "url('/assets/GridBg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
     
      <div  className="mt-[100px]">
        <InfiniteScroll />
        </div>
    </div>
  );
};

export default Hero;



 