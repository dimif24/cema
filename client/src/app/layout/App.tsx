import { useEffect, useState } from 'react'
import { Product } from '../../models/products'
import Catalog from '../../features/catalog/Catalog'
import Header from './Header'

function App() {
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
  return (
    <div>
      <Header />
      <Catalog products={products || []}></Catalog>
    </div>
  )
}

export default App
