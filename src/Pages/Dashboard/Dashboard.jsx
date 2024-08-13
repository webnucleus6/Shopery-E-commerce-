import { Link, Outlet } from "react-router-dom";

import ShopBanner from "../Shop/components/ShopBanner";
import LargeDeviceMenu from "./DashboardMenu/LargeDeviceMenu";
const Dashboard = () => {
  return (
    <div className="">
      <div>
        <ShopBanner />
      </div>
      <div className="flex items-start gap-5 h-screen max-w-7xl container mx-auto mt-10 ">
        <LargeDeviceMenu />
        <div className="flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
