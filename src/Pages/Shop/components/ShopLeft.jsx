import React from "react";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import discountBanner from "/image/Banner.png";
import discountProduct from "/image/Image.png";
import { GrLinkNext } from "react-icons/gr";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
const ShopLeft = () => {
  const [values, setValues] = useState([50, 800]);
  const min = 0;
  const max = 1000;
  return (
    <div>
      <div className="flex items-center gap-10">
        <button className="btn  bg-[#00b207] hover:bg-[#1e7121] focus:outline-none text-white rounded-[43px] px-8">
          Filter{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
          >
            <path
              d="M18 5H9"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 14H4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="5" cy="5" r="4" stroke="white" strokeWidth="1.5" />
            <circle cx="17" cy="14" r="4" stroke="white" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {/* All Categories */}

      <div className=" w-full mt-6 ">
        <div className="divide-y divide-white/5 rounded-xl ">
          <Disclosure as="div" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between focus:!outline-none">
              <h3 className="text-xl font-semibold ">All Categories</h3>
              <FaChevronDown className="size-5  group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel>
              <div>
                <form className="flex flex-col gap-3 mt-3">
                  <div className="flex items-center gap-2">
                    {" "}
                    <input
                      type="radio"
                      id="fresh-food"
                      name="category"
                      value="fresh-food"
                      className="radio border-2 border-[#00B207]  focus:!outline-none"
                    />{" "}
                    <label htmlFor="fresh-food">
                      {" "}
                      <span className="cursor-pointer">Fresh Fruit (25)</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    {" "}
                    <input
                      type="radio"
                      id="Cooking"
                      name="category"
                      value="Cooking"
                      className="radio border-2 border-[#00B207]  focus:!outline-none"
                    />{" "}
                    <label htmlFor="Cooking">
                      {" "}
                      <span className="cursor-pointer">Cooking (25)</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    {" "}
                    <input
                      type="radio"
                      id="Snacks"
                      name="category"
                      value="Snacks"
                      className="radio border-2 border-[#00B207]  focus:!outline-none"
                    />{" "}
                    <label htmlFor="Snacks">
                      {" "}
                      <span className="cursor-pointer">Snacks(25)</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    {" "}
                    <input
                      type="radio"
                      id="Beverages"
                      name="category"
                      value="Beverages"
                      className="radio border-2 border-[#00B207]  focus:!outline-none"
                    />{" "}
                    <label htmlFor="Beverages">
                      {" "}
                      <span className="cursor-pointer">Beverages(25)</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    {" "}
                    <input
                      type="radio"
                      id="Beauty&Healt"
                      name="category"
                      value="Beauty&Healt"
                      className="radio border-2 border-[#00B207]  focus:!outline-none"
                    />{" "}
                    <label htmlFor="Beauty&Healt">
                      <span className="cursor-pointer">
                        Beauty & Health(25)
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    {" "}
                    <input
                      type="radio"
                      id="Bread&Bakery"
                      name="category"
                      value="Bread&Bakery"
                      className="radio border-2 border-[#00B207]  focus:!outline-none"
                    />{" "}
                    <label htmlFor="Bread&Bakery">
                      <span className="cursor-pointer">Bread & Bakery(25)</span>
                    </label>
                  </div>
                </form>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>

      {/* Price */}

      <div className=" w-full mt-6  ">
        <div className="divide-y divide-white/5 rounded-xl ">
          <Disclosure as="div" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between focus:!outline-none">
              <h3 className="text-xl font-semibold mb-4">Price</h3>
              <FaChevronDown className="size-5  group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel>
              <div className="w-full">
                <Range
                  step={1}
                  min={min}
                  max={max}
                  values={values}
                  onChange={(values) => setValues(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "100%",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#00B207", "#ccc"],
                          min,
                          max,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props, isDragged }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%",
                        backgroundColor: "#FFF",
                        border: "3px solid #00B207",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "0px 2px 6px #AAA",
                        outlineColor: "#00B207",
                      }}
                    >
                      <div
                        style={{
                          height: "10px",
                          width: "10px",
                          backgroundColor: isDragged ? "#FFF" : "#FFF",
                        }}
                      />
                    </div>
                  )}
                />
                <div className="mt-3 ">
                  <p>
                    Price:
                    <span className="font-bold">
                      {" "}
                      {values[0]} - {values[1]}
                    </span>
                  </p>
                </div>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>

      {/* Rating */}

      <div className=" w-full mt-6  ">
        <div className="divide-y divide-white/5 rounded-xl ">
          <Disclosure as="div" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between focus:!outline-none">
              <h3 className="text-xl font-semibold  mb-4">Rating</h3>
              <FaChevronDown className="size-5  group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel>
              <form>
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    id="fiveStar"
                    className="checked:bg-[#00B207] mr-3 h-5 w-5 checkbox-rating text-[#00B207] "
                  />
                  <label htmlFor="fiveStar" className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-orange-500 text-xl">
                      {" "}
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </span>
                    <span className="font-bold texl-sm text-black">5.0</span>
                  </label>
                </div>
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="4Star"
                    className="checked:bg-[#00B207] mr-3 h-5 w-5 checkbox-rating text-[#00B207] "
                  />
                  <label htmlFor="4Star" className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-orange-500 text-xl">
                      {" "}
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                    </span>
                    <span className="font-bold texl-sm text-black">
                      4.0 & Up
                    </span>
                  </label>
                </div>
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="3Star"
                    className="checked:bg-[#00B207] mr-3 h-5 w-5 checkbox-rating text-[#00B207] "
                  />
                  <label htmlFor="3Star" className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-orange-500 text-xl">
                      {" "}
                      <FaStar /> <FaStar /> <FaStar /> <FaRegStar />{" "}
                      <FaRegStar />
                    </span>
                    <span className="font-bold texl-sm text-black">
                      3.0 & Up
                    </span>
                  </label>
                </div>
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="2Star"
                    className="checked:bg-[#00B207] mr-3 h-5 w-5 checkbox-rating text-[#00B207] "
                  />
                  <label htmlFor="2Star" className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-orange-500 text-xl">
                      {" "}
                      <FaStar /> <FaStar /> <FaRegStar /> <FaRegStar />{" "}
                      <FaRegStar />
                    </span>
                    <span className="font-bold texl-sm text-black">
                      2.0 & Up
                    </span>
                  </label>
                </div>
                <div className="flex items-center mb-3">
                  <input
                    type="checkbox"
                    id="1Star"
                    className="checked:bg-[#00B207] mr-3 h-5 w-5 checkbox-rating text-[#00B207] "
                  />
                  <label htmlFor="1Star" className="flex items-center gap-2">
                    <span className="flex items-center gap-2 text-orange-500 text-xl">
                      {" "}
                      <FaStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />{" "}
                      <FaRegStar />
                    </span>
                    <span className="font-bold texl-sm text-black">
                      1.0 & Up
                    </span>
                  </label>
                </div>
              </form>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>
      {/* Popular Tags */}

      <div className=" w-full mt-6  ">
        <div className="divide-y divide-white/5 rounded-xl ">
          <Disclosure as="div" defaultOpen={true}>
            <DisclosureButton className="group flex w-full items-center justify-between focus:!outline-none">
              <h3 className="text-xl font-semibold mb-4">Popular Tag</h3>
              <FaChevronDown className="size-5  group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel>
              <div className="grid grid-cols-3 gap-2">
                <button className="btn rounded-[43px]">Healthy</button>
                <button className="btn rounded-[43px] bg-[#00b207] hover:bg-[#1e7121] focus:outline-none text-white">
                  Low fat
                </button>
                <button className="btn rounded-[43px]">Vegetarian</button>
                <button className="btn rounded-[43px]">Kid foods</button>
                <button className="btn rounded-[43px]">Vitamins</button>
                <button className="btn rounded-[43px]">Bread</button>
                <button className="btn rounded-[43px]">Meat</button>
                <button className="btn rounded-[43px]">Snacks</button>
                <button className="btn rounded-[43px]">Tiffin</button>
                <button className="btn rounded-[43px]">Launch</button>
                <button className="btn rounded-[43px]">Dinner</button>
                <button className="btn rounded-[43px]">Breackfast</button>
                <button className="btn rounded-[43px]">Fruit</button>
              </div>
            </DisclosurePanel>
          </Disclosure>
        </div>
      </div>

      {/* Discount Banner */}
      <div>
        <div className="w-full h-[300px] mt-7 relative">
          <img
            className="w-full h-full"
            src={discountBanner}
            alt="discount Banner"
          />
          <div className="inset-0 space-y-3 flex flex-col items-center absolute">
            <h3 className="text-2xl font-semibold mt-6">
              <span className=" text-[#FF8A00]">79%</span>Discount
            </h3>
            <p className="text-center">on your first order</p>
            <button className="text-[#00B207] font-bold flex items-center gap-2">
              Shop Now <GrLinkNext />
            </button>
          </div>
        </div>
      </div>

      {/* Sale Products */}
      <div>
        <h3 className="text-xl font-semibold mt-6 mb-4">Sale Products</h3>

        <div className="group mb-4">
          <div className="h-28 flex gap-2 items-center border rounded-md shadow bottom-2  group-hover:border-[#2C742F]">
            <img
              className="w-[40%] h-full"
              src={discountProduct}
              alt="discounted Product"
            />
            <div className="w-full ">
              {" "}
              <h4 className="font-semibold group-hover:text-[#2C742F]">
                Red Capsicum
              </h4>
              <h3 className="text-lg font-bold">
                $20.99 <span className="text-gray line-through">$32.00</span>
              </h3>
              <span className="flex items-center gap-2 text-orange-500 text-sm">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
              </span>
            </div>
          </div>
        </div>
        <div className="group mb-4">
          <div className="h-28 flex gap-2 items-center border rounded-md shadow bottom-2  group-hover:border-[#2C742F]">
            <img
              className="w-[40%] h-full"
              src={discountProduct}
              alt="discounted Product"
            />
            <div className="w-full ">
              {" "}
              <h4 className="font-semibold group-hover:text-[#2C742F]">
                Red Capsicum
              </h4>
              <h3 className="text-lg font-bold">
                $20.99 <span className="text-gray line-through">$32.00</span>
              </h3>
              <span className="flex items-center gap-2 text-orange-500 text-sm">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
              </span>
            </div>
          </div>
        </div>
        <div className="group mb-4">
          <div className="h-28 flex gap-2 items-center border rounded-md shadow bottom-2  group-hover:border-[#2C742F]">
            <img
              className="w-[40%] h-full"
              src={discountProduct}
              alt="discounted Product"
            />
            <div className="w-full ">
              {" "}
              <h4 className="font-semibold group-hover:text-[#2C742F]">
                Red Capsicum
              </h4>
              <h3 className="text-lg font-bold">
                $20.99 <span className="text-gray line-through">$32.00</span>
              </h3>
              <span className="flex items-center gap-2 text-orange-500 text-sm">
                {" "}
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopLeft;
