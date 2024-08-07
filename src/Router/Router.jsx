import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Shop from "../Pages/Shop/Shop";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

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
    ],
  },
]);
export default router;
