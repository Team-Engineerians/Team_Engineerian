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
      <div className="flex w-full h-[917.001px] justify-center flex-shrink-0 bg-white opacity-0" >
        <h1 className='text-white'>Hello</h1>
      </div>
    </div>
    
  );
}

export default Hero;
