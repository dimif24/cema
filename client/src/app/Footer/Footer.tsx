import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/images/logo.png'

import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons'
import Copyright from './Copyright'

const footerData = {
  socialLinks: [
    { href: '#', icon: faFacebookSquare },
    { href: '#', icon: faInstagramSquare },
    { href: '#', icon: faTwitterSquare },
    { href: '#', icon: faGithubSquare },
  ],
  solutions: [
    { href: '#', text: 'Marketing' },
    { href: '#', text: 'Analytics' },
    { href: '#', text: 'Commerce' },
    { href: '#', text: 'Insights' },
  ],
  support: [
    { href: '#', text: 'Pricing' },
    { href: '#', text: 'Guides' },
    { href: '#', text: 'API Status' },
  ],
}

const Footer = () => {
  return (
    <>
      <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="logo" className="w-32" />
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              hic?
            </p>
            <div className="flex space-x-5">
              {footerData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </h3>
              <div className="mt-4 space-y-4">
                {footerData.solutions.map((solution, index) => (
                  <a
                    key={index}
                    href={solution.href}
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {solution.text}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </h3>
              <div className="mt-4 space-y-4">
                {footerData.support.map((supportItem, index) => (
                  <a
                    key={index}
                    href={supportItem.href}
                    className="text-base text-gray-500 hover:text-gray-900 block"
                  >
                    {supportItem.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  )
}

export default Footer
