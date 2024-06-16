import { Product } from '../../models/products'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return product.variants.map((variant) => (
    <>
      <div
        key={variant.id}
        className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-contain w-full"
            src={variant.pictureUrl}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">
              {product.name}
            </h5>
          </a>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${variant.price}
              </span>
              <span className="text-sm text-slate-900 line-through">
                $
                {
                  // TODO: add discount to variant
                  variant.price * (1 - 0.3)
                }
              </span>
            </p>
            <div className="flex items-center">
              <StarOutlinedIcon className="h-5 w-5 text-yellow-300" />
              <StarOutlinedIcon className="h-5 w-5 text-yellow-300" />
              <StarOutlinedIcon className="h-5 w-5 text-yellow-300" />
              <StarOutlinedIcon className="h-5 w-5 text-yellow-300" />
              <StarHalfOutlinedIcon className="h-5 w-5 text-yellow-300" />

              <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                5.0
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="flex items-center justify-center w-full rounded-md bg-primary border border-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-white hover:text-primary focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <ShoppingCartOutlinedIcon className="mr-2 h-6 w-6"></ShoppingCartOutlinedIcon>
              Add to cart
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-auto rounded-md  mx-5 py-2.5 text-center text-sm font-medium text-primary focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <FavoriteBorderOutlinedIcon className="h-6 w-6"></FavoriteBorderOutlinedIcon>
            </a>
          </div>
        </div>
      </div>
    </>
  ))
}
export default ProductCard

