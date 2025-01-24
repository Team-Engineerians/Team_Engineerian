import React from 'react';

const Hero = () => {
  return (
    <div
      style={{
          backgroundImage: "url('/assets/bg-img.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "auto",
          minHeight: "100vh",
      }}
    >
      <div className="flex w-full h-[917.001px] justify-center gap-[230px] flex-shrink-0 bg-[rgba(255,255,255,0.0)] opacity-100" >
      <div className="w-[1px] h-[917.001px] opacity-10 bg-[rgba(255,255,255,0.8)]"></div>
      <div className="w-[1px] h-[917.001px] opacity-10 bg-[rgba(255,255,255,0.8)]"></div>
      <div className="w-[1px] h-[917.001px] opacity-10 bg-[rgba(255,255,255,0.8)]"></div>
      <div className="w-[1px] h-[917.001px] opacity-10 bg-[rgba(255,255,255,0.8)]"></div>
      <div className="w-[1px] h-[917.001px] opacity-10 bg-[rgba(255,255,255,0.8)]"></div>
      <div className="w-[1px] h-[917.001px] opacity-10 bg-[rgba(255,255,255,0.8)]"></div>
      </div>
    </div>
    
  );
}

export default Hero;
