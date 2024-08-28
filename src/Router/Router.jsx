import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Dashboard from "../Pages/DashBoard/Dashboard";
import UserHome from "../Pages/DashBoard/UserPages/UserHome";
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
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product-details",
        element: <ProductDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "wishList",
        element: <WishList />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCart />,
      },
      {
        path: "billing-info",
        element: <BillingInfo />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "user",
            element: <UserHome />,
          },
        ],
      },
    ],
  },
]);

export default router;
