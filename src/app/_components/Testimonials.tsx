'use client';
import React, { useState, useEffect } from 'react';
import img from "../../../public/assets/testimonialcard.jpg";

const TrustedByProfessionals: React.FC = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth >= 500 && window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Call initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {screenSize === 'desktop' && <DesktopView />}
      {screenSize === 'tablet' && <TabletView />}
      {screenSize === 'mobile' && <MobileView />}
      
      {/* Title */}
      <h2 className="text-[42px] sm:text-[64px] font-sequel text-center mt-[-50px] sm:mt-[-106px]">Trusted by Professionals</h2>
    </div>
  );
};

// Desktop View (Web)
const DesktopView: React.FC = () => (
  <div className='flex flex-row gap-4'>
    <div className='flex flex-col gap-4'>
      <div className='h-[223px] w-[199px] bg-white rounded-lg bg-cover bg-center' style={{ backgroundImage: `url(${img.src})` }}></div>
      <div className='h-[267px] w-[199px] bg-white rounded-lg bg-cover bg-center' style={{ backgroundImage: `url(${img.src})` }}></div>
    </div>
    <div className='flex flex-row gap-4'>
      <div className='h-[267px] w-[199px] bg-white rounded-lg mt-20 bg-cover bg-center' style={{ backgroundImage: `url(${img.src})` }}></div>
      <div className='h-[267px] w-[199px] bg-white rounded-lg mt-10 bg-cover bg-center' style={{ backgroundImage: `url(${img.src})` }}></div>
      <div className='h-[267px] w-[199px] bg-white rounded-lg mt-10 bg-cover bg-center' style={{ backgroundImage: `url(${img.src})` }}></div>
      <div className='h-[267px] w-[199px] bg-white rounded-lg mt-20 bg-cover bg-center' style={{ backgroundImage: `url(${img.src})` }}></div>
    </div>
    <div className='flex flex-col gap-4'>
      <div className='h-[223px] w-[199px] bg-white rounded-lg bg-cover bg-center' style={{ backgroundImage: `url(${img.src})` }}></div>
      <div className='h-[267px] w-[199px] bg-white rounded-lg bg-cover bg-center' style={{ backgroundImage: `url(${img.src})` }}></div>
    </div>
  </div>
);

// Tablet View (iPad)
const TabletView: React.FC = () => (
  <div className='grid grid-cols-2 gap-4 scroll-smooth mb-44 overflow-y-auto h-[45vh] w-[80vw] place-items-center
 snap-y snap-mandatory'>
    <div className='h-[223px] w-[199px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[223px] w-[199px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[267px] w-[199px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[267px] w-[199px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[267px] w-[199px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[267px] w-[199px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
  </div>
);

// Mobile View (Phones)
const MobileView: React.FC = () => (
  <div className='grid grid-cols-1 gap-4 bg-red-300 mb-44 overflow-y-auto h-[75vh] w-[70vw] place-items-center snap-y snap-mandatory'>
    <div className='h-[223px] w-[159px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[223px] w-[159px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[267px] w-[159px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[267px] w-[159px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[267px] w-[159px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
    <div className='h-[267px] w-[159px] bg-white rounded-lg bg-cover bg-center snap-start' style={{ backgroundImage: `url(${img.src})` }}></div>
  </div>
);

export default TrustedByProfessionals;
