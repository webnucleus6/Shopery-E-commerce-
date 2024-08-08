import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import BillingInfo from "../Pages/BillingInfo/BillingInfo";
import ContactPage from "../Pages/ContactPage/ContactPage";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import WishList from "../Pages/WishList/WishList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        path: "/wishList",
        element: <WishList />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "/billing-info",
        element: <BillingInfo />,
      },
      {
        path: "/contact-us",
        element: <ContactPage/>,
      },

    ]
  },
  
]);
export default router;

