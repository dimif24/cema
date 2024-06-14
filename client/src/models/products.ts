export interface ProductVariant {
  id: number
  color: string
  price: number
  quantityInStock: number
  pictureUrl: string
  productId: number
}

export interface Product {
  id: number
  name: string
  description: string
  type: string
  category: string
  brand: string
  weight: number
  height: number
  width: number
  variants: ProductVariant[]
}
