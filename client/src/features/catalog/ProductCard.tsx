import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import { Product } from '../../models/products'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return product.variants.map((variant) => (
    <ListItem key={variant.id}>
      <ListItemAvatar>
        <Avatar src={variant.pictureUrl} />
      </ListItemAvatar>
      <ListItemText>
        {product.name} - {variant.price}
      </ListItemText>
    </ListItem>
  ))
}
export default ProductCard
