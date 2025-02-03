'use client';

import React from 'react';

const TrustedByProfessionals: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className='flex flex-row gap-4' >
        <div className='flex flex-col gap-4'>
          <div className='h-[223px] w-[199px] bg-white opacity-50 rounded-lg' ></div>
          <div className='h-[267px] w-[199px] bg-white opacity-50 rounded-lg' ></div>
        </div>
        <div className='flex flex-row gap-4'>
        <div className='h-[267px] w-[199px] bg-white opacity-50 rounded-lg mt-20' ></div>
        <div className='h-[267px] w-[199px] bg-white opacity-50 rounded-lg mt-10' ></div>
        <div className='h-[267px] w-[199px] bg-white opacity-50 rounded-lg mt-10' ></div>
        <div className='h-[267px] w-[199px] bg-white opacity-50 rounded-lg mt-20' ></div>

        </div>
        <div className='flex flex-col gap-4'>
          <div className='h-[223px] w-[199px] bg-white opacity-50 rounded-lg' ></div>
          <div className='h-[267px] w-[199px] bg-white opacity-50 rounded-lg' ></div>
        </div>
      </div>
      
      {/* Title */}
      <h2 className="text-[64px] sm:text-[64px] font-sequel text-center mt-[-106px]">Trusted by Professionals</h2>
    </div>
  );
};

export default TrustedByProfessionals;