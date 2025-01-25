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
        backgroundImage: "url('/assets/bg-img.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Grid Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          pointerEvents: "none", // Makes it non-interactive
        }}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              opacity: 0.1,
              width: "1px",
              height: "100%",
              margin: "0 auto",
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="flex flex-col mt-[121px] ml-[173px]    h-[486px] w-[1121px] " >
        <div className="mb-[60px]">
        <span className="text-[28px] font-inter font-semibold text-white" > The Engineerians </span>
        </div>
        <div className="flex flex-row justify-between mb-[39px] ">
          <div className=" text-white w-[618px] h-auto text-[95px] font-sequel leading-[1.2] " >
            <p > Dream big, <br />We’ll engineer<br /> the rest. </p>
          </div>
          <div className="text-end w-[326px]" >
            <p className="font-inter text-[20px] mt-5 text-[#FFFFFF] leading-[1.6] " >
              At Engineerians, we’re more than just a team of professionals
              <br />
              <br />
              we’re visionaries, problem-solvers, and creators.
              <br />
              <br />
              With a passion for innovation, we craft solutions that inspire,
              empower, and redefine what’s achievable.
            </p>
          </div>
        </div>
        
        <div className="  flex h-[38px] w-[366px] items-center gap-[12px] rounded-full border-t-[1px] border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)] p-[6px_20px] opacity-100">
            <span className="animate-glow h-[10px] w-[10px] rounded-full bg-green-600"></span>
            <p className="font-inter text-xl text-white">
              We are currently taking projects
            </p>
          </div>
      </div>
     
      <div  className="mt-[100px]">
        <InfiniteScroll />
        </div>
    </div>
  );
};

export default Hero;



 