import React from "react";
import { Select } from "@headlessui/react";
import shopBanner from "/image/Shop Banner.png";
import ShopLeft from "./components/ShopLeft";
import ShopRight from "./components/ShopRight";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
const Shop = () => {
  return (
    <div className="">
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
        <div className="grid grid-cols-4 gap-6  max-w-7xl container mx-auto mt-8">
          <div className="col-span-1 hidden md:block">
            <ShopLeft />
          </div>
          <div className="col-span-4 md:col-span-3 ">
            <ShopRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
