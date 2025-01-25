import React from "react";

const Hero = () => {
  return (
    <div 
      style={{
        backgroundImage: "url('/assets/bg-img.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
      }}
    >
      <div className="flex h-[917.001px] w-full flex-shrink-0 justify-center gap-[230px] bg-[rgba(255,255,255,0.0)] opacity-100">
        <div className="h-[917.001px] w-[1px] bg-[rgba(255,255,255,0.8)] opacity-10"></div>
        <div className="h-[917.001px] w-[1px] bg-[rgba(255,255,255,0.8)] opacity-10"></div>
        <div className="h-[917.001px] w-[1px] bg-[rgba(255,255,255,0.8)] opacity-10"></div>
        <div className="h-[917.001px] w-[1px] bg-[rgba(255,255,255,0.8)] opacity-10"></div>
        <div className="h-[917.001px] w-[1px] bg-[rgba(255,255,255,0.8)] opacity-10"></div>
        <div className="h-[917.001px] w-[1px] bg-[rgba(255,255,255,0.8)] opacity-10"></div>
      </div>
      <div className="absolute w-full inset-0 flex-col flex gap-[2rem] bg-[rgba(255,255,255,0.1)] my-60 px-[10rem] h-auto">
        
        <div className="flex text-[28px] ">
          <p>The Engineerians</p>
        </div>
        
        <div className="flex items-stretch justify-between bg-[rgba(255,255,255,0.1)] w-full h-auto">
          
          <div className="flex w-[45rem] h-auto flex-col items-start gap-[39px]">
            <div>
              <p className="text-white text-[95px] leading-[1.2] font-semibold h-auto">Dream big,
              We’ll engineer the rest.</p>
            </div>

          </div>

          <div className="w-[326px]">
            <p className="text-white text-[20px] font-regular py-[2rem] text-right">At Engineerians, we’re more than just a team of professionals<br /> <br /> we’re visionaries, problem-solvers, and creators.<br /><br /> With a passion for innovation, we craft solutions that inspire, empower, and redefine what’s achievable.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
