import React from "react";
import InfiniteScroll from "./InfiniteScroll";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
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
        {[...Array(6)].map((_, index) => (
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
      <div className="relative inset-0 z-10 my-40 flex h-[517.001px] w-full flex-col gap-[60px] px-[10rem] text-[28px]">
        <p className="font-inter">The Engineerians</p>
        <div className="flex h-auto w-full items-stretch justify-between">
          <div className="flex h-auto w-[45rem] flex-col items-start">
            <p className="font-extrabold h-auto text-[95px] leading-[1.1] text-white">
              Dream big, <br />We’ll engineer<br /> the rest.
            </p>
          </div>
          <div className="w-[326px]">
            <p className="font-inter py-[2rem] text-right text-[18px] text-white">
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
          <div className="absolute bottom-[20px] flex h-[38px] w-[366px] items-center gap-[12px] rounded-full border-l-0 border-r-0 border-t-[1px] border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.07)] p-[6px_20px] opacity-100">
            <span className="animate-glow h-[10px] w-[10px] rounded-full bg-green-600"></span>
            <p className="font-inter text-xl text-white">
              We are currently taking projects
            </p>
          </div>
        </div>
        <InfiniteScroll />
      </div>
    </div>
  );
};

export default Hero;
