import React from 'react';

type Props = {};

const MadebyEngineerians = (props: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center bg-black text-gray-400 p-12">
      {/* ENGX LAB Section */}
      <div className="flex flex-col items-start text-center w-full">
        <h1 className="text-[120px]">
          <span className='font-extrabold'>ENGX</span>
          <span> LAB </span>
        </h1>
        <p className="mt-2 text-[24px] font-medium" style={{ color: '#5A5A5A' }}>
          made with <span style={{ color: '#3A3A3A' }}>❤️</span> by Engineerians
        </p>
      </div>

      {/* Links and Social Icons Section */}
      <div className="flex justify-between items-center w-full mt-12 ">
        {/* Footer Links */}
        <div className="flex flex-col ">
          <div className="flex space-x-6 mt-10 ">
            <a href="#" className="hover:text-white">Our company</a>
            <a href="#" className="hover:text-white">Teams</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
          <p className="mt-6">© 2024 ENGXLAB. All rights reserved.</p>
        </div>

        {/* Social Icons and Contact Info */}
        <footer className="flex flex-col items-end text-gray-500">
          <div className="flex items-center space-x-4 mt-0">
            <a href="#" className="text-gray-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37a4 4 0 1 1-4.63-4.63 4 4 0 0 1 4.63 4.63z"/>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 3L9 13"/>
                <path d="M21 3L14 21l-5-8-4-2z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M8 11v5"/>
                <path d="M8 8h.01"/>
                <path d="M12 16v-5"/>
                <path d="M16 16v-3a2 2 0 0 0-4 0"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.37 2.37 0 0 0-1.67-1.68C19.08 4.34 12 4.34 12 4.34s-7.08 0-8.87.4a2.37 2.37 0 0 0-1.67 1.68 24.1 24.1 0 0 0-.46 5.58 24.1 24.1 0 0 0 .46 5.58 2.37 2.37 0 0 0 1.67 1.68c1.79.4 8.87.4 8.87.4s7.08 0 8.87-.4a2.37 2.37 0 0 0 1.67-1.68 24.1 24.1 0 0 0 .46-5.58 24.1 24.1 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98"/>
              </svg>
            </a>
          </div>
          <p className="mt-6">ENGX, Bangalore, India.</p>
          <p className="mt-6">mail: info@engx.com</p>
        </footer>
      </div>
    </div>
  );
};

export default MadebyEngineerians;