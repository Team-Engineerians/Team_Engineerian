"use client";

import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setVisible(false); // Hide on scroll down
    } else {
      setVisible(true); // Show on scroll up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed mt-12 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 z-50 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center space-x-2 sm:space-x-4 bg-[#3A3A3A] bg-opacity-10 border-2 border-opacity-20 border-white text-white py-1 sm:py-2 px-3 sm:px-4 rounded-full shadow-lg">
        <button className="hover:bg-white hover:bg-opacity-15 px-2 sm:px-3 py-1 text-sm sm:text-base rounded-full">
          Our work
        </button>
        <button className="hover:bg-white hover:bg-opacity-15 px-2 sm:px-3 py-1 text-sm sm:text-base rounded-full">
          Services
        </button>
        <button className="hover:bg-white hover:bg-opacity-25 bg-white bg-opacity-15 px-2 sm:px-3 py-1 text-sm sm:text-base rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
