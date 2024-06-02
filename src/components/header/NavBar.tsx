import React from 'react';
import NavigationDrawer from './NavigationDrawer';

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50">
      {/* <nav className="bg-white md:p-4">
        <div className="flex flex-grow px-4 sm:px-6 lg:px-8">
          <div className="flex flex-grow flex-row">
            <div className="flex-shrink-0 justify-between items-center w-1/4">
              <Link to="/">
                <img className="h-24 w-36 max-md:h-16 max-md:w-30" src={logo} alt="Palmetto Badminton Club" />
              </Link>
            </div>
            <div className="flex-grow flex flex-row  md:hidden justify-end max-md:px-4">
              <button className="text-black md:hidden">
                <HamburgerMenuIcon />
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
                  <Link to="/membership-&-fees" className="hover:bg-gray-300">MEMBERSHIP & FEES</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
      <NavigationDrawer />
    </div>
  );
}

export default NavBar;
