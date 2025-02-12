import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-screen flex flex-col justify-center bg-black p-28">
      {/* ENGX LAB Section */}
      <div className="flex flex-col items-start text-center w-full">
        <h1 className="text-[70px] bg-gradient-to-r from-white to-gray-400 to-70% bg-clip-text inline-block text-transparent ">
          <span className='font-extrabold'>ENGX</span>
          <span> LAB </span>
        </h1>
        <p className="text-[24px] font-base bg-gradient-to-r from-white to-gray-400 to-80% bg-clip-text inline-block text-transparent">
          made with <span >❤️</span> by Engineerians
        </p>
      </div>

      {/* Links and Social Icons Section */}
      <div className="flex justify-between items-center w-full mt-6 ">
        {/* Footer Links */}
        <div className="flex flex-col text-white h">
          <div className="flex space-x-6 mt-10 ">
            <a href="#" className="hover:text-gray-400">Our company</a>
            <a href="#" className="hover:text-gray-400">Teams</a>
            <a href="#" className="hover:text-gray-400">Support</a>
          </div>
          <p className="mt-5">© 2024 ENGXLAB. All rights reserved.</p>
        </div>

        {/* Social Icons and Contact Info */}
        <footer className="flex flex-col items-end text-gray-400">
          <div className="flex items-center space-x-4 mt-0">
          <a href="#" className=" ">
             <Image src="/icons/twitter.svg" height={24} width={24} alt="Facebook" className="hover:opacity-80 transition" />
          </a>
          <a href="#" className="">
             <Image src="/icons/telegram.svg" height={24} width={24} alt="Facebook" className="hover:opacity-80 transition" />
          </a>
          <a href="#" className="">
             <Image src="/icons/instagram.svg" height={24} width={24} alt="Facebook" className="hover:opacity-80 transition" />
          </a>
          <a href="#" className="">
             <Image src="/icons/youtube.svg" height={24} width={24} alt="Facebook" className="hover:opacity-80 transition" />
          </a>
          <a href="#" className="">
             <Image src="/icons/pintrest.svg" height={24} width={24} alt="Facebook" className="hover:opacity-80 transition" />
          </a>
          <a href="#" className="">
             <Image src="/icons/linkedin.svg" height={24} width={24} alt="Facebook" className="hover:opacity-80 transition" />
          </a>
          </div>
          <p className="mt-6">ENGX, Bangalore, India.</p>
          <p className="mt-2">mail: info@engx.com</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;