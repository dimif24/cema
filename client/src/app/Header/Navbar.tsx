import CategoryDropdown from './CategoryDropdown'
import NavLinks from './Navlinks'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container flex">
        <CategoryDropdown />
        <div className="flex items-center justify-between flex-grow pl-12">
          <NavLinks />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
