'use client';
import React, { useState, useEffect } from 'react';
import img from "../../../public/assets/testimonialcard.jpg";

const TrustedByProfessionals: React.FC = () => {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('mobile');
      } else if (window.innerWidth >= 500 && window.innerWidth < 1310) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white px-4">
      {screenSize === 'desktop' && <DesktopView />}
      {screenSize === 'tablet' && <TabletView />}
      {screenSize === 'mobile' && <MobileView />}
      <h2 className="text-[42px] sm:text-[64px] font-sequel text-center mt-[-60px] sm:mt-[-106px]">Trusted by Professionals</h2>
    </div>
  );
};

const imageUrls = [
  img.src,
  "/assets/testimonialcard.jpg",
  "/assets/testimonialcard.jpg",
  "/assets/testimonialcard.jpg",
];

const DesktopView: React.FC = () => (
  <div className='flex flex-row justify-center gap-4 w-[90vw]'>
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

const TabletView: React.FC = () => (
  <div className="grid grid-cols-2 gap-4 overflow-y-auto h-[75vh] w-[80vw] place-items-center snap-y snap-mandatory">
    {imageUrls.map((src, index) => (
      <div
        key={index}
        className="h-[400px] w-[300px] bg-white rounded-lg bg-cover bg-center snap-start"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    ))}
  </div>
);

const MobileView: React.FC = () => (
  <div className="flex gap-4 scroll-smooth overflow-x-auto h-[55vh] w-[80vw] snap-x snap-mandatory px-4">
    {imageUrls.map((src, index) => (
      <div
        key={index}
        className="h-[210px] w-[180px] bg-white rounded-lg bg-cover bg-center snap-start shrink-0"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    ))}
  </div>
);

export default TrustedByProfessionals;
