import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import FAQ from "../Pages/FAQ/FAQ";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      { path: "/about", element: <About/> },
      { path: "/faq", element: <FAQ/> },
      // Add more routes here...
    ]
  },
  
]);
export default router;

