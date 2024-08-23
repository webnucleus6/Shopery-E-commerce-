
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
 
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/UserPages/UserHome";
 
import BillingInfo from "../Pages/BillingInfo/BillingInfo";
import ContactPage from "../Pages/ContactPage/contactPage";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import WishList from "../Pages/WishList/WishList";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
 
 

 

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error></Error>,
 
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
 
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "user",
            element: <UserHome />,
          },
        ],
      },
    ],
 
 
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
    path:'/login',
    element:<LogIn></LogIn>
 
  },
  {
    path:'/register',
    element:<Register></Register>
  },
 
 
      {
        path: "/billing-info",
        element: <BillingInfo />
      },
  
      {
        path: "/contact-us",
        element: <ContactPage/>,
      },
 
 

 
    ]
  },
 
]);
export default router;

 
