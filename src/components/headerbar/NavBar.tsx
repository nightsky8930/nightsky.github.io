import { Link } from 'react-router-dom';
import logo from '../../images/pbc-logo.png';
import HamburgerMenuIcon from './HamburgerMenuIcon';

const NavBar = () => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="flex bg-white md:p-4">
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
        <div className="max-sm:hidden flex-grow flex items-center justify-end">
          <ul className="list-none flex items-center space-x-8 font-bold">
            <li>
              <Link to="/" className="hover:bg-gray-300">HOME</Link>
            </li>
            {/* <li>
              <Link to="/about-us" className="hover:bg-gray-300">ABOUT US</Link>
            </li> */}
            <li>
              <Link to="/membership-&-fees" className="hover:bg-gray-300">MEMBERSHIP & FEES</Link>
            </li>
          </ul>
        </div>
        <div className="max-md:hidden flex-none w-20"></div>
      </nav>
    </div>
  );
}

export default NavBar;