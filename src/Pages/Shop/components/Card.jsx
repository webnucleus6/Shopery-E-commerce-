import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";

import { LuEye } from "react-icons/lu";
import { Rating } from "@smastrom/react-rating";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";
const Card = ({ open }) => {
  return (
    <div>
      <div className="w-full group rounded-lg shadow  border hover:border-[#2C742F]">
        <div className="w-full  h-[302px] relative">
          <img
            src="./image/Tomato.png"
            className="w-full h-full p-1"
            alt="Products"
          />
          {/* STOCK QUANTIY */}
          <div className="bg-black text-sm w-28 p-1 rounded-md text-center text-white absolute top-3 left-3">
            Out of stock
          </div>
          {/* WISHLIST AND QUUCK VIEW BUTTON */}

          <div className="absolute top-3 right-3 block md:hidden group-hover:block">
            <button
              data-tooltip-id="wishlist"
              data-tooltip-content="Add To Wishlist"
              data-tooltip-place="top"
              className="rounded-full mb-3  p-3 border !bg-none hover:bg-[#E6E6E6]  flex justify-center items-center outline-none"
            >
              <FaRegHeart className="text-xl" />
            </button>
            <Tooltip
              id="wishlist"
              className="bg-[#00B207]  text-white text-sm "
            />
            <button
              data-tooltip-id="quick"
              data-tooltip-content="Quick View"
              data-tooltip-place="bottom"
              className="rounded-full  p-3 border !bg-none hover:bg-[#E6E6E6]  flex justify-center items-center outline-none"
              onClick={open}
            >
              <LuEye className="text-xl" />
            </button>
            <Tooltip id="quick" className="bg-[#00B207]  text-white text-sm " />
          </div>
        </div>

        <div className="p-4">
          <h4 className="text-gray group-hover:text-[#2C742F]">Red Tomato</h4>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold">
              $<span>14.99</span>
            </h4>
            <Link to={"/product-details"}>
              {" "}
              <button
                data-tooltip-id="cart"
                data-tooltip-content="Add to cart"
                data-tooltip-place="top"
                className="rounded-full btn p-3 border bg-[#E6E6E6] group-hover:bg-[#00B207] flex justify-center items-center outline-none"
              >
                <RiShoppingBagLine className="text-xl group-hover:text-white" />
              </button>
            </Link>
            <Tooltip id="cart" className="bg-[#00B207]  text-white text-sm " />
          </div>
          <Rating style={{ maxWidth: 120 }} value={4} />
        </div>
      </div>
    </div>
  );
};

export default Card;
