import type { NextPage } from 'next';
import Image from "next/image";

const Loading: NextPage = () => {
  return (
    <div className="w-full relative h-screen bg-black text-center text-white text-[64px] font-['Sequel_Sans'] flex items-center justify-center overflow-hidden">
      {/* Animated Grid with Glowing Borders */}
      <div className="absolute inset-0 grid grid-cols-5 grid-rows-10 sm:grid-cols-12 sm:grid-rows-6 opacity-20 mask-radial animate-border-glow z-10">
        {Array.from({ length: 72 }, (_, i) => (
          <div key={i} className="border border-gray-400 z-10"></div>
        ))}
      </div>
      
      {/* Rotating Logo */}
      <div className="absolute font-sequel top-1/2 left-1/2 transform -translate-x-[83px] -translate-y-[4px] backdrop-blur-lg opacity-90">
        ENGX
      </div>
      <Image 
        className="relative w-[63px] h-[63px] mb-20 animate-spin-slow z-20" 
        width={63} 
        height={63} 
        alt="" 
        src="/Social_Icons/loading.svg" 
      />
    </div>
  );
};

export default Loading;
