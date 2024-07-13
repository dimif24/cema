import { useEffect, useState } from 'react'
import { Product } from '../../models/products'
import Catalog from '../../features/catalog/Catalog'
import Header from './Header'
import AddSupplier from '../../Components/Admin/supplier/addSupplier/main'
import SupplierProfile from '../../Components/Admin/supplier/SupplierProfile'
import AdminMainPage from '../../Components/Admin/supplier/Main'
import SuppliersListing from '../../Components/Admin/supplier/SuppliersListing'

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
      {/* <Catalog products={products || []}></Catalog> */}
      <AddSupplier></AddSupplier>
      <div style={{ marginTop: "100px" }}></div>
      {/* <AdminMainPage></AdminMainPage> */}
      <SuppliersListing />
      <SupplierProfile id={5}></SupplierProfile>
    </div>
  )
}

export default App
