import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Shop from "../Pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);
export default router;
