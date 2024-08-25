import { useEffect, useState } from 'react'
import { Product } from '../../product/types/products'
import Banner from './banner/Banner'
import InfoSection from './info-section/InfoSection'
import ShopCategoriesSection from './shop-categories/ShopCategoriesSection'
import ProductCarouselSection from '../../product/components/ProductCarouselSection'

const MainPage = () => {
  const [products, setProducts] = useState<Product[]>()
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
  }, [])
  function addProduct() {
    // setProducts((prevState) => [
    //   ...prevState,
    //   { name: 'product' + (prevState.length + 1), price: 300.0 },
    // ])
  }
  console.log(products)
  return (
    <div className="flex flex-col items-center justify-center min-h">
      <Banner />
      <InfoSection />
      <ShopCategoriesSection />
      <ProductCarouselSection title="New Arrivals" products={products || []} />
      <ProductCarouselSection
        isGrid={true}
        title="Best Sellers"
        products={products || []}
      />
      <ProductCarouselSection
        title="Catch of the Day"
        products={products || []}
      />
    </div>
  )
}

export default MainPage
