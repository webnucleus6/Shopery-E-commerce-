import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
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

    ]
  },
  
]);
export default router;

