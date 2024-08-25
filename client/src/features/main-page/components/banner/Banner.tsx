import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './Banner.module.scss'
import bannerImage1 from '../../../../assets/images/banner/banner-bg.jpg'
import bannerImage2 from '../../../../assets/images/banner/banner2-bg.jpg'
import bannerImage3 from '../../../../assets/images/banner/banner3-bg.png'

import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Example banner data
const banners = [
  {
    id: 1,
    image: bannerImage1,
    title: 'Best Collection for Home Decoration',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores odio.',
  },
  {
    id: 2,
    image: bannerImage2,
    title: 'Exclusive Furniture Deals',
    description:
      "Discover premium furniture to add comfort and style to your living space. Don't miss out on our special offers!",
  },
  {
    id: 3,
    image: bannerImage3,
    title: 'Modern Interior Design Trends',
    description:
      "Explore the latest trends in interior design and find pieces that elevate your home's aesthetic.",
  },
]

const Banner = () => {
  return (
    <div
      className={`${styles.sliderWrapper} w-full h-[500px] relative overflow-hidden`}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
      >
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.id}
            style={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="flex items-center justify-center text-center"
          >
            <div className="absolute -z-10 inset-0 bg-black opacity-30"></div>

            <div className="container mx-auto px-4 py-24 sm:py-32 md:py-36 lg:py-40 font-roboto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-4 capitalize">
                {banner.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                {banner.description}
              </p>
              <div className="mt-8 sm:mt-10 md:mt-12">
                <a
                  href="#"
                  className="bg-primary border border-primary text-white px-6 py-2 sm:px-8 sm:py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Banner
