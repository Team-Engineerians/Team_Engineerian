"use client";

import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down - hide the navbar
      setVisible(false);
    } else {
      // Scrolling up - show the navbar
      setVisible(true);
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
      className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 z-50 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex space-x-4 bg-[#3A3A3A] bg-opacity-10 border-2 border-opacity-20 border-white text-white py-2 px-4 rounded-full shadow-lg">
        <button className="hover:bg-white hover:bg-opacity-15 px-3 py-1 rounded-full">
          Our work
        </button>
        <button className="hover:bg-white hover:bg-opacity-15 px-3 py-1 rounded-full">
          Services
        </button>
        <button className="hover:bg-white hover:bg-opacity-25 bg-white bg-opacity-15 px-3 py-1 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
