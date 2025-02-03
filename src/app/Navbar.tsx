"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons from Lucide

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Toggle for mobile menu

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setVisible(false); // Hide on scroll down
    } else {
      setVisible(true); // Show on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-5 sm:top-10 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 z-50 ${
        visible ? "opacity-100" : "opacity-0"
      } w-full max-w-7xl px-6`}
    >
      <div className="flex items-center justify-center">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-4 bg-[#3A3A3A] bg-opacity-10 border-2 border-opacity-20 border-white text-white py-2 px-6 rounded-full shadow-lg">
          <button className="hover:bg-white hover:bg-opacity-15 px-4 py-2 rounded-full">
            Our Work
          </button>
          <button className="hover:bg-white hover:bg-opacity-15 px-4 py-2 rounded-full">
            Services
          </button>
          <button className="hover:bg-white hover:bg-opacity-25 bg-white bg-opacity-15 px-4 py-2 rounded-full">
            Contact
          </button>
        </div>

        {/* Mobile Navbar - Hamburger Menu (Aligned to Right) */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button
            className="p-3 bg-[#3A3A3A] bg-opacity-10 border-2 border-opacity-20 border-white text-white rounded-full shadow-lg"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />} {/* ☰ Icon */}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Below the Hamburger) */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-[#3A3A3A] bg-opacity-90 border-2 border-opacity-20 border-white text-white py-3 px-6 rounded-xl shadow-lg flex flex-col items-start space-y-3">
          <button className="hover:bg-white hover:bg-opacity-15 px-4 py-2 rounded-full">
            Our Work
          </button>
          <button className="hover:bg-white hover:bg-opacity-15 px-4 py-2 rounded-full">
            Services
          </button>
          <button className="hover:bg-white hover:bg-opacity-25 bg-white bg-opacity-15 px-4 py-2 rounded-full">
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
