import React, { useState } from 'react';
import CloseIcon from '../icons/CloseIcon';
import HamburgerMenuIcon from '../icons/HamburgerMenuIcon';
import { Link } from 'react-router-dom';
import logo from '../../images/pbc-logo-new.png';

const NavigationDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white md:p-4">
        <div className="flex flex-grow px-4 sm:px-6 lg:px-8">
          <div className="flex flex-grow flex-row">
            <div className="flex justify-between items-center max-md:py-2 md:w-1/4">
              <Link to="/">
                <img className="h-full max-md:h-16 w-full" src={logo} alt="Palmetto Badminton Club" />
              </Link>
            </div>
            <div className="flex-grow flex flex-row md:hidden justify-end max-md:px-4">
              <button
                onClick={toggleDrawer}
                className="text-black md:hidden"
              >
                {isOpen ? (
                  <CloseIcon />
                ) : (
                  <HamburgerMenuIcon />
                )}
              </button>
            </div>
            <div className="hidden md:flex flex-grow items-center justify-end pr-20">
              <ul className="list-none flex items-center space-x-8 font-bold">
                <li>
                  <Link to="/" className="hover:bg-gray-300">HOME</Link>
                </li>
                <li>
                  <Link to="/test-page" className="hover:bg-gray-300">TEST PAGE</Link>
                </li>
                <li>
                  <Link to="/membership-and-fees" className="hover:bg-gray-300">MEMBERSHIP & FEES</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 z-20 bg-gray-800 bg-opacity-50`} onClick={toggleDrawer}></div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out w-full bg-white shadow-lg z-30`}>
        <div className="fixed inset-y-0 left-0 w-full bg-black shadow-lg">
          <div className="flex items-end justify-end p-4">
            <button onClick={toggleDrawer} className="text-white justify-end items-end">
              <CloseIcon />
            </button>
          </div>
          <nav className="py-4 px-6 space-y-1 text-xl font-aria text-white text-left">
            <div className="block border-b border-gray-100 border-opacity-30 px-6 py-4">
              <Link to="/" onClick={toggleDrawer} className="hover:text-green-100">Home</Link>
            </div>
            <div className="block border-b border-gray-100 border-opacity-30 px-6 py-4">
              <Link to="/test-page" onClick={toggleDrawer} className="">Test Page</Link>
            </div>
            <div className="block border-b border-gray-100 border-opacity-30 px-6 py-4">
              <Link to="/membership-and-fees" onClick={toggleDrawer} className="">Membership & Fees</Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavigationDrawer;
