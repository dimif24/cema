import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { ROUTES } from '../router/routes'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="shadow-sm bg-white">
      <div className="container py-4 mx-auto flex items-center justify-around">
        <a href={ROUTES.HOME}>
          <img src={logo} alt="Logo" className="w-32" />
        </a>

        <div className="w-full max-w-xl relative flex">
          <span className="absolute left-4 top-3 text-lg text-gray-400">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            name="search"
            id="search"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
            placeholder="search"
          />
          <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex items-center">
            Search
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="text-xs leading-3">Wishlist</div>
            <div className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              8
            </div>
          </a>
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <div className="text-xs leading-3">Cart</div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </div>
          </a>
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="text-xs leading-3">Account</div>
          </a>
        </div>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
