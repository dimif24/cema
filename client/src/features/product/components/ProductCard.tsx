import { Product } from '../types/products'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

const ProductCard = ({ id, name, price, pictureUrl }: Product) => {
  return (
    <div
      key={id}
      className="relative flex w-full max-w-[180px] xs:max-w-[200px] sm:max-w-xs mx-auto flex-col overflow-hidden rounded-lg bg-white shadow-md"
    >
      <a className="relative flex h-40 xs:h-48 sm:h-60 overflow-hidden" href="#">
        <img
          className="object-cover w-full"
          src={`../../../../public${pictureUrl}`}
          alt="product image"
        />
        <span className="absolute top-0 left-0 m-1 xs:m-2 rounded-full bg-black px-1.5 xs:px-2 text-center text-[10px] xs:text-xs sm:text-sm font-medium text-white">
          39% OFF
        </span>
      </a>
      <div className="mt-2 xs:mt-4 px-2 xs:px-3 sm:px-4 pb-3 xs:pb-4 sm:pb-5">
        <a href="#">
          <h5 className="text-sm xs:text-base sm:text-lg md:text-xl tracking-tight text-slate-900 truncate">
            {name}
          </h5>
        </a>
        <div className="mt-1 xs:mt-2 mb-2 xs:mb-3 md:mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="mb-1 sm:mb-0">
            <span className="text-lg xs:text-xl sm:text-2xl md:text-2xl font-bold text-slate-900">
              ${price}
            </span>
            <span className="text-xs sm:text-sm text-slate-900 line-through ml-1 xs:ml-2">
              ${(price * (1 - 0.3)).toFixed(2)}
            </span>
          </p>
          <div className="flex items-center">
            <StarOutlinedIcon className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <StarOutlinedIcon className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <StarOutlinedIcon className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <StarOutlinedIcon className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <StarHalfOutlinedIcon className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 text-yellow-300" />
            <span className="ml-1 xs:ml-2 rounded bg-yellow-200 px-1.5 xs:px-2 py-0.5 text-[10px] xs:text-xs font-semibold">
              5.0
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="flex items-center justify-center w-full rounded-md bg-primary border border-primary px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 text-center text-[10px] xs:text-xs sm:text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <ShoppingCartOutlinedIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
            <span className="hidden md:inline ml-2">Add to cart</span>
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-auto rounded-md ml-2 xs:ml-3 sm:ml-4 py-1.5 xs:py-2 sm:py-2.5 text-center text-xs sm:text-sm font-medium text-primary focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <FavoriteBorderOutlinedIcon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard