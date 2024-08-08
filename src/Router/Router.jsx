
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
 
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
 
import BillingInfo from "../Pages/BillingInfo/BillingInfo";
 
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import WishList from "../Pages/WishList/WishList";
 
 


 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
 
 
    children: [
     {
        path:"/",
        element:<Home/>
      },
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
 
   {
    path: "/about",
    element:  <About/> ,
  },
 
      {
        path: "/billing-info",
        element: <BillingInfo />,
      },
 

 
    ]
  },
 
]);
export default router;

 
