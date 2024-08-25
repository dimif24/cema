import { Button } from '@mui/material'
import { Product } from '../types/products'
import ProductList from './ProductList'
interface CatalogProps {
  products: Product[]
}
const Catalog = ({ products: products }: CatalogProps) => {
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" type="button">
        Add Product
      </Button>
    </>
  )
}

export default Catalog
