import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UserHome from "../Pages/Dashboard/UserPages/UserHome";

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
  },
]);
export default router;
