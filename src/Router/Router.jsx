import {
    createBrowserRouter,
  } from "react-router-dom";
import About from "../Pages/About/About";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>hi ! dev</div>,
    },
    {
      path: "/about",
      element: <About/> ,
    },
  ]);
  export default router;