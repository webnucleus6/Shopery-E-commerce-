import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      { path: "/about", element: <About/> },
      // Add more routes here...
    ]
  },
  
]);
export default router;

