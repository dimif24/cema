import { List } from '@mui/material'
import { Product } from '../types/products'
import ProductCard from './ProductCard'

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <List>
      {products?.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </List>
  )
}

export default ProductList
