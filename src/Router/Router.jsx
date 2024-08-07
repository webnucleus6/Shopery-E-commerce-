
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import WishList from "../Pages/WishList/WishList";


 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
 
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
 
       {path: "/wishList",
        element: <WishList />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },

    ]
  },
  
]);
export default router;

 
