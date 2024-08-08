import React from "react";
import shopBanner from "/image/Shop Banner.png";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
const ShopBanner = () => {
  return (
    <div>
      <div className="h-32 w-full relative">
        <img src={shopBanner} className="w-full h-full" alt="" />
        <div className="inset-0 absolute">
          <div className="max-w-7xl w-full mx-auto h-full flex items-center">
            <div className="text-white flex items-center gap-1 text-lg">
              <IoHomeOutline />
              <MdOutlineNavigateNext />
              <span>Categories</span>
              <MdOutlineNavigateNext />
              <span className="text-[#00B207]">Vegetables</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
