import { Link } from 'react-router-dom'
import { ROUTES } from '../router/routes'

const links = [
  { name: 'Home', to: ROUTES.HOME },
  { name: 'Shop', to: '/shop' },
  { name: 'Contact Us', to: '/contact' },
]

const NavLinks = () => {
  return (
    <div className="flex items-center space-x-6 capitalize">
      {links.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className="text-gray-200 hover:text-white transition"
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default NavLinks
