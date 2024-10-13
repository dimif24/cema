import { useState } from 'react';
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser, faBagShopping,faTimes, faHome,faList,faChevronDown, faChevronUp  } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
interface IconLinkProps {
  icon: IconDefinition;
  text: string;
  count?: number;
}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const categories = ['Bedroom', 'Mattress', 'Outdoor', 'Sofa', 'Living Room', 'Kitchen'];


  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-between mb-4">
          <div className='flex flex-row items-center '>
          {/* Collapse button */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Logo */}
          <a href="index.html" className="w-24 ml-2 md:w-32 md:ml-0">
            <img src={logo} alt="Logo" className="w-full" />
          </a>
          </div>
          {/* Account and Cart icons */}
          <div className="flex items-center space-x-4 md:hidden">
            <IconLink icon={faUser} text="Account" />
            <IconLink icon={faBagShopping} text="Cart" count={2} />
          </div>

          {/* Search bar - hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex w-full max-w-xl relative mx-4">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
              placeholder="Search"
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition flex items-center">
              Search
            </button>
          </div>

          {/* Icons - hidden on mobile, visible on larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <IconLink icon={faHeart} text="Wishlist" count={8} />
            <IconLink icon={faBagShopping} text="Cart" count={2} />
            <IconLink icon={faUser} text="Account" />
          </div>
        </div>

    {/* Search bar for mobile */}
    <div className="relative md:hidden flex items-center">
  <input
    type="text"
    name="search-mobile"
    id="search-mobile"
    className="w-full border border-primary py-3 pl-4 pr-10 rounded-md focus:outline-none"
    placeholder="Search"
  />
  <button className="absolute right-0 top-0 h-full bg-primary text-white px-4 rounded-r-md flex items-center justify-center">
    <FontAwesomeIcon icon={faMagnifyingGlass} />
  </button>
</div>
      {/* Drawer Menu */}
<div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
  <div className="p-4">
    <button 
      className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
      onClick={() => setIsMenuOpen(false)}
    >
      <FontAwesomeIcon icon={faTimes} className="text-2xl" />
    </button>
    <nav className="mt-8">
      <ul className="space-y-2">
        <li>
          <a href="#" className="flex items-center py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded border-l-4 border-primary">
            <FontAwesomeIcon icon={faHome} className="mr-3 text-primary" />
            Home
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded border-l-4 border-primary">
            <FontAwesomeIcon icon={faHeart} className="mr-3 text-primary" />
            Wishlist
          </a>
        </li>
       
        <li>
                <button 
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="flex items-center justify-between w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded border-l-4 border-primary"
                >
                  <div className="flex items-center">
                    <FontAwesomeIcon icon={faList} className="mr-3 text-primary" />
                    Categories
                  </div>
                  <FontAwesomeIcon icon={isCategoryOpen ? faChevronUp : faChevronDown} className="text-primary" />
                </button>
                {isCategoryOpen && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a href="#" className="block py-2 px-4 bg-gray-50 hover:bg-gray-100 rounded">
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
        <li>
          <a href="#" className="flex items-center py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded border-l-4 border-primary">
            <FontAwesomeIcon icon={faUser} className="mr-3 text-primary" />
            Account
          </a>
        </li>
        {/* Add more menu items as needed */}
      </ul>
    </nav>
  </div>
</div>

      </div>
    </header>
  );
};

const IconLink = ({ icon, text, count }:IconLinkProps) => (
  <a
    href="#"
    className="text-center text-gray-700 hover:text-primary transition relative"
  >
    <div className="text-2xl">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className="text-xs leading-3">{text}</div>
    {count && (
      <div className="absolute -right-2 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
        {count}
      </div>
    )}
  </a>
);

export default Header;