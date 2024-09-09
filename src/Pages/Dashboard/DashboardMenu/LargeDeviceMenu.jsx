import { MdDashboard } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { FaProductHunt, FaSackDollar } from "react-icons/fa6";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
const LargeDeviceMenu = () => {
  const role = "manager";

  const userLinks = (
    <>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/user-home"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <MdDashboard /> Dashboard
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 ">
        <Link
          to={"/dashboard/order-history"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <GrHistory /> Order History
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/order-history"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <FaRegHeart /> Wishlist
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/order-history"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <RiShoppingBagLine /> Shopping Cart
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/user-setting"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <IoSettingsOutline /> Setting
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link className="flex items-center  gap-1   font-semibold rounded-none">
          {" "}
          <RiLogoutBoxLine /> Log-out
        </Link>
      </li>
    </>
  );
  const managerLinks = (
    <>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/manager-home"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <MdDashboard /> Dashboard
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 ">
        <Link
          to={"/dashboard/add-product"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <IoIosAddCircle /> Add A Product
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/manage-products"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <FaProductHunt /> Manage Products
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/manage-orders"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <MdOutlineLocalShipping /> Manage Orders
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/payment-history"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          <FaSackDollar />
          Payment History
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/manager-setting"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <IoSettingsOutline /> Setting
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link className="flex items-center  gap-1   font-semibold rounded-none">
          {" "}
          <RiLogoutBoxLine /> Log-out
        </Link>
      </li>
    </>
  );
  const adminLinks = (
    <>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/admin-home"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <MdDashboard /> Dashboard
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 ">
        <Link
          to={"/dashboard/manage-products"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          <FaProductHunt /> Manage Products
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/manage-users"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <IoIosPeople /> Manage Users
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/all-payments"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          <FaSackDollar /> Payment History
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link
          to={"/dashboard/admin-setting"}
          className="flex items-center  gap-1   font-semibold rounded-none"
        >
          {" "}
          <IoSettingsOutline /> Setting
        </Link>
      </li>
      <li className="w-full h-full px-0 py-0 rounded-none">
        <Link className="flex items-center  gap-1   font-semibold rounded-none">
          <RiLogoutBoxLine /> Log-out
        </Link>
      </li>
    </>
  );

  return (
    <div className="w-64 border shadow rounded-2xl !h-auto ">
      <div>
        <h3 className="text-xl font-semibold mt-5 px-3">Navigation</h3>
      </div>
      <div className="h-full">
        <ul className="menu menu-vertical lg:menu-horizontal rounded-none  w-full mt-4 px-0 py-0 space-y-1">
          {role === "user" && userLinks}
          {role === "manager" && managerLinks}
          {role === "admin" && adminLinks}
        </ul>
      </div>
    </div>
  );
};

export default LargeDeviceMenu;
