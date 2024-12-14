import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../../features/home/components/Home'
import Admin from '../../features/admin/Admin'
import ProductDetails from '../../features/product/components/ProductDetails'
import { ROUTES } from './routes'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME, // '/'
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },

      {
        path: ROUTES.PRODUCT_DETAILS, // '/:id'
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: ROUTES.ADMIN, //'admin'
    element: <Admin />,
  },
])
