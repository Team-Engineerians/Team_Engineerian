import React from "react";

const ServicesGrid = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center mt-20 sm:mt-20 bg-black text-white px-4">
      {/* Title */}
      <h1 className="text-[45px] sm:text-[64px] font-semibold mb-10 text-center">We Deliver</h1>

      {/* Grid Layout */}
      <div className="flex flex-col justify-center w-full max-w-[1055px] gap-2 h-auto sm:h-[600px]">
        <div className="flex flex-col sm:flex-row justify-center gap-4 text-center">
          <div className="transition-all duration-500 text-white text-opacity-50 hover:text-opacity-100 hover:bg-gradient-to-br from-[#FDF6A9] from-10% via-[#E37BB0] via-54% to-[#824D98] to-92% bg-white bg-opacity-10 w-full sm:w-[467px] h-[200px] sm:h-[297px] rounded-xl inline-flex items-center justify-center">
            <p className="text-center text-[24px] sm:text-[32px] w-44">Creative Solutions</p>
          </div>
          <div className="w-full sm:w-[676px] h-[200px] sm:h-[297px] transition-all duration-500 text-white text-opacity-50 hover:text-opacity-100 rounded-xl flex items-center justify-center bg-white bg-opacity-10 hover:bg-[radial-gradient(circle_at_top,_#FFFFFF_-20%,_#00A4FF_70%)]">
            <p className="text-center text-[24px] sm:text-[32px]">Brand Identity</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="transition-all duration-500 text-white text-opacity-50 hover:text-opacity-100 hover:bg-gradient-to-t from-[#CBFF53] via-[#1A9859] via1-[#0C176D] to-transparent bg-white bg-opacity-10 w-full sm:w-[389px] h-[200px] sm:h-[297px] rounded-xl inline-flex items-center justify-center">
            <p className="text-center text-[24px] sm:text-[32px]">UI/UX Excellence</p>
          </div>
          <div className="transition-all duration-500 text-white text-opacity-50 hover:text-opacity-100 hover:bg-gradient-to-br from-[#CB003A] via-[#FF8000] to-[#CB003A] bg-white bg-opacity-10 w-full sm:w-[389px] h-[200px] sm:h-[297px] rounded-xl inline-flex items-center justify-center">
            <p className="w-48 text-center text-[24px] sm:text-[32px]">End-to-End Development</p>
          </div>
          <div className="hover:bg-[radial-gradient(circle_at_100%_100%,_#6F01FF_10%,_#2F00AF_100%)] bg-white bg-opacity-10 text-white text-opacity-50 hover:text-opacity-100 transition-all duration-500 w-full sm:w-[389px] h-[200px] sm:h-[297px] rounded-xl inline-flex items-center justify-center">
            <p className="w-44 text-center text-[24px] sm:text-[32px]">Continuous Support</p>
          </div>
        </div>
      </div>
      {/* Subtitle */}
      <p className="text-gray-500 text-sm sm:text-base mt-6 max-w-[600px] text-center">
        From creativity to execution, we deliver excellence that sets you apart.
      </p>
    </div>
  );
};

export default ServicesGrid;