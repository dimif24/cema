import { List } from '@mui/material'
import { Product } from '../../models/products'
import ProductCard from './ProductCard'

interface ProductListProps {
  products: Product[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <List>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  )
}

export default ProductList
