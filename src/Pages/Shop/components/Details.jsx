import React from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaRegHeart,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Details = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };
  const handleRemoveProduct = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col md:flex-row  justify-between items-start gap-5">
      <Carousel className="h-[400px] pl-24 w-full md:w-[50%]">
        <div className="h-[400px] border">
          <img
            src="./image/Tomato.png"
            className="w-full h-full p-1"
            alt="Products"
          />
        </div>
        <div className="h-[400px] border">
          <img
            src="./image/Tomato.png"
            className="w-full h-full p-1"
            alt="Products"
          />
        </div>
        <div className="h-[400px] border">
          <img
            src="./image/Tomato.png"
            className="w-full h-full p-1"
            alt="Products"
          />
        </div>
      </Carousel>

      <div className="w-full md:w-[50%]">
        <div>
          <h1 className="text-3xl font-bold inline-block mr-3">
            Chinese Cabbage{" "}
          </h1>
          <button className="btn btn-sm text-[#2C742F] bg-[#20B52633]">
            In Stock
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-orange-500 text-sm">
            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
          </span>{" "}
          <p className="text-sm">
            {" "}
            <span> 4</span> Review
          </p>
          <p className="text-sm font-semibold">
            SKU: <span className="font-normal"> 2,51,594</span>
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <p className="text-xl font-semibold text-[#B3B3B3] line-through">
            $<span>48.00</span>
          </p>
          <p className="text-xl font-semibold text-[#2C742F]">
            $<span>17.28</span>
          </p>
          <button className="btn btn-sm text-[#EA4B48] bg-[#EA4B481A]">
            <span> 64</span> % Off
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5  mt-4">
          <div className="h-16 flex items-center gap-2 ">
            <p>Brand:</p>
            <div className="h-full flex flex-col items-center justify-center border  p-3 rounded-md">
              <div className="h-4 w-10 ">
                <img
                  className="h-full w-full"
                  src="/image/Brand.png"
                  alt="Brand-Img"
                />
              </div>
              <p className="font-dancingScript">farmary</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <h5 className="text-xl font-bold">Share item:</h5>
            <div>
              <button className="btn btn-circle p-2 bg-white hover:bg-[#00B207] group">
                <FaFacebook className="text-xl text-black  group-hover:text-white" />
              </button>
              <button className="btn btn-circle p-2 bg-white hover:bg-[#00B207] group">
                <FaTwitter className="text-xl text-black  group-hover:text-white" />
              </button>
              <button className="btn btn-circle p-2 bg-white hover:bg-[#00B207] group">
                <FaPinterest className="text-xl text-black  group-hover:text-white" />
              </button>
              <button className="btn btn-circle p-2 bg-white hover:bg-[#00B207] group">
                <FaInstagram className="text-xl text-black  group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-3">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.{" "}
          </p>
          <div className="w-full flex justify-between items-center gap-3 mt-4">
            <div className="flex justify-center items-center gap-2 w-36 border p-1 rounded-[43px] ">
              <button
                onClick={handleRemoveProduct}
                className="text-lg btn bg-gray-200 btn-circle btn-sm outline-none hover:text-white hover:bg-[#128d16]"
                disabled={quantity <= 1 ? true : false}
              >
                <TiMinus className="font-thin" />
              </button>
              <span className="text-sm font-semibold">{quantity}</span>
              <button
                onClick={handleAddProduct}
                className="text-lg btn bg-gray-200 btn-circle btn-sm outline-none hover:bg-[#128d16] hover:text-white"
              >
                <TiPlus className="font-thin" />
              </button>
            </div>

            <div className="w-full">
              <button className=" btn flex items-center w-full justify-center bg-[#00B207] text-white hover:bg-[#128d16] rounded-[43px]">
                Add to Cart <HiOutlineShoppingBag />
              </button>
            </div>
            <div>
              <button
                data-tooltip-id="wishlist"
                data-tooltip-content="Add To Wishlist"
                data-tooltip-place="top"
                className="rounded-full mb-3 text-[#2C742F]  p-3 border !bg-[20B526] hover:bg-[#128d16]  flex justify-center items-center outline-none hover:text-white"
              >
                <FaRegHeart className="text-xl" />
              </button>
              <Tooltip
                id="wishlist"
                className="bg-[#00B207]  text-white text-sm "
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h4 className="font-medium">
            Category: <span className="text-gray font-normal">Vegetables</span>
          </h4>
          <h4 className="font-medium">
            Tag:{" "}
            <span className="text-gray font-normal">
              Vegetables Healthy Chinese Cabbage Green Cabbage
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
