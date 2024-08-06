import { useEffect, useState } from 'react'
import { Product } from '../../models/products'
import Catalog from '../../features/catalog/Catalog'
import Header from './Header'
import AdminMainPage from '../../Components/Admin/supplier/Main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    <Router>

      {/* <Header /> */}
      {/* <Catalog products={products || []}></Catalog> */}
      {/* <AddSupplier></AddSupplier> */}
      {/* <div style={{ marginTop: "100px" }}></div>
      <AdminMainPage></AdminMainPage> */}
      {/* <SuppliersListing /> */}
      {/* <SupplierProfile id={5}></SupplierProfile> */}

      <Routes>
        <Route path="/admin/*" element={<AdminMainPage />} />

        <Route path="/" element={<><Header /><Catalog products={products || []}></Catalog></>}></Route>
        {/* Define other routes here */}
      </Routes>
    </Router>

  )
}

export default App
