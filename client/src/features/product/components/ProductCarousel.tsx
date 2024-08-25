import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from './ProductCard'
import { Product } from '../types/products'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/grid'

import { Grid, Navigation, Pagination } from 'swiper/modules'
import styles from './ProductCarousel.module.scss'

interface ProductCarouselProps {
  products: Product[]
  isGrid?: boolean
}

const ProductCarousel = ({
  products,
  isGrid = false,
}: ProductCarouselProps) => {
  const swiperModules = isGrid ? [Grid, Pagination] : [Navigation, Pagination]
  const paginationOptions = isGrid ? { clickable: true } : undefined

  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={4}
      modules={swiperModules}
      pagination={paginationOptions}
      navigation={!isGrid}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className={`px-8 pb-8 ${styles.sliderWrapper}`}
      grid={{
        rows: isGrid ? 2 : 1,
        fill: 'row',
      }}
    >
      {products.map((product) => (
        <SwiperSlide className="py-2" key={product.id}>
          <ProductCard {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProductCarousel
