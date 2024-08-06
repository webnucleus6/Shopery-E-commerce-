import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
