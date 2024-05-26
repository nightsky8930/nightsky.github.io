import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';
import logo from '../../images/pbc-logo.png';

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex justify-between bg-white p-4">
        <div className="flex-shrink-0 items-center w-1/4">
          <Link to="/">
            <img className="h-20 w-36" src={logo} alt="Palmetto Badminton Club" />
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-end ">
          <ul className="list-none flex items-center space-x-8 ">
            <li>
              <Link to="/" className="hover:bg-gray-300">HOME</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:bg-gray-300">ABOUT US</Link>
            </li>
            <li>
              <Link to="/membership-&-fees" className="hover:bg-gray-300">MEMBERSHIP & FEES</Link>
            </li>
          </ul>
        </div>
        <div className="flex-none w-20"></div>
      </nav>
    </header>
    );
}

export default NavBar;