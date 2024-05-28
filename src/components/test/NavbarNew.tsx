import React, { useState } from 'react';

const NavbarNew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="logo.png" alt="Greenville Badminton Club" className="h-12" />
          </div>
          <div className="flex">
            <button
              onClick={toggleMenu}
              className="text-black md:hidden"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">HOME</a>
            <a href="/membership-&-fees" className="text-gray-700 hover:text-black px-3 py-2 rounded-md text-sm font-medium">MEMBERSHIP & FEES</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">HOME</a>
          <a href="/membership-&-fees" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">MEMBERSHIP & FEES</a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
