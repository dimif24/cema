import { Product } from '../types/products'
import ProductCarousel from './ProductCarousel'

interface ProductCarouselSectionProps {
  title: string
  products: Product[]
  isGrid?: boolean
}
const ProductCarouselSection = ({
  title,
  products,
  isGrid = false,
}: ProductCarouselSectionProps) => (
  <div className="container py-8 px-4 mx-auto">
    <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
      {title}
    </h2>
    <ProductCarousel isGrid={isGrid} products={products}></ProductCarousel>
  </div>
)

export default ProductCarouselSection
