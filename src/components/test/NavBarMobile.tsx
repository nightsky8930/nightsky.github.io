import * as React from 'react';
import CloseIcon from '../icons/CloseIcon';

const NavBarMobile = () => {
  return (
    <div className="bg-black">
      <CloseIcon />
      {/* Mobile Menu */}
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="/" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">HOME</a>
        {/* <a href="/test-page" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">Test Page</a> */}
        <a href="/membership-&-fees" className="text-gray-700 hover:text-black block px-3 py-2 rounded-md text-base font-medium">MEMBERSHIP & FEES</a>
      </div>
    </div>
  );
};

export default NavBarMobile;
