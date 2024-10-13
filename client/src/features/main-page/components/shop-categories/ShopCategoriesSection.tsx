import ImageCard from './ImageCard' // Adjust path according to your folder structure
import category1 from '../../../../assets/images/category/category-1.jpg'
import category2 from '../../../../assets/images/category/category-2.jpg'
import category3 from '../../../../assets/images/category/category-3.jpg'
import category4 from '../../../../assets/images/category/category-4.jpg'
import category5 from '../../../../assets/images/category/category-5.jpg'
import category6 from '../../../../assets/images/category/category-6.jpg'

const ShopCategoriesSection = () => {
  const categories = [
    { id: 1, title: 'Bedroom', image: category1, link: '#' },
    { id: 2, title: 'Mattrass', image: category2, link: '#' },
    { id: 3, title: 'Outdoor', image: category3, link: '#' },
    { id: 4, title: 'Sofa', image: category4, link: '#' },
    { id: 5, title: 'Living Room', image: category5, link: '#' },
    { id: 6, title: 'Kitchen', image: category6, link: '#' },
  ]

  return (
    <div className="container py-8 px-4 mx-auto">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {categories.map((category) => (
          <ImageCard
            key={category.id}
            image={category.image}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>
    </div>
  )
}

export default ShopCategoriesSection
