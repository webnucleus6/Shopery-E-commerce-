import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
<<<<<<< HEAD
import Dashboard from "../Pages/DashBoard/Dashboard";
import UserHome from "../Pages/DashBoard/UserPages/UserHome";
=======

import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/UserPages/UserHome";

>>>>>>> d3e5acbfacec6b6b53a3cf1845b4d9bc528f76c1
import BillingInfo from "../Pages/BillingInfo/BillingInfo";
import ContactPage from "../Pages/ContactPage/contactPage";
import ShoppingCart from "../Pages/ShoppingCart/ShoppingCart";
import WishList from "../Pages/WishList/WishList";
import Error from "../Pages/Error/Error";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";

<<<<<<< HEAD
=======





>>>>>>> d3e5acbfacec6b6b53a3cf1845b4d9bc528f76c1
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
<<<<<<< HEAD
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
=======
    errorElement: <Error></Error>,

    children: [
      {
        path: "/",
        element: <Home />
>>>>>>> d3e5acbfacec6b6b53a3cf1845b4d9bc528f76c1
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
<<<<<<< HEAD
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
=======
        path: "/wishList",
        element: <WishList />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: '/login',
        element: <LogIn/>

      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: "/billing-info",
        element: <BillingInfo />
      },

      {
        path: "/contact-us",
        element: <ContactPage />,
      },

    ],

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

>>>>>>> d3e5acbfacec6b6b53a3cf1845b4d9bc528f76c1
]);

<<<<<<< HEAD
export default router;
=======

>>>>>>> d3e5acbfacec6b6b53a3cf1845b4d9bc528f76c1
