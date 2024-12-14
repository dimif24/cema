import sofaIcon from '../../assets/icons/category-dropdown/sofa.svg'
import terraceIcon from '../../assets/icons/category-dropdown/terrace.svg'
import bedIcon from '../../assets/icons/category-dropdown/bed.svg'
import officeIcon from '../../assets/icons/category-dropdown/office.svg'
import outdoorIcon from '../../assets/icons/category-dropdown/outdoor-cafe.svg'
import mattressIcon from '../../assets/icons/category-dropdown/bed-2.svg'

const categories = [
  { name: 'Sofa', icon: sofaIcon },
  { name: 'Terrace', icon: terraceIcon },
  { name: 'Bed', icon: bedIcon },
  { name: 'Office', icon: officeIcon },
  { name: 'Outdoor', icon: outdoorIcon },
  { name: 'Mattress', icon: mattressIcon },
]

const CategoryDropdown = () => {
  return (
    <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
      <span className="text-white">
        <i className="fa-solid fa-bars"></i>
      </span>
      <span className="capitalize ml-2 text-white">All Categories</span>

      <div className="z-50 absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
          >
            <img
              src={category.icon}
              alt={category.name}
              className="w-5 h-5 object-contain"
            />
            <span className="ml-6 text-gray-600 text-sm">{category.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default CategoryDropdown
