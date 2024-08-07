import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import "@smastrom/react-rating/style.css";
import Pagination from "./Pagination";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import Details from "./Details";
import Card from "./Card";

const ShopRight = () => {
  const product = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  let [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = () => {
    setQuantity(quantity + 1);
  };
  const handleRemoveProduct = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div>
      <div className="w-full flex justify-between items-center px-4 md:px-0">
        <div>
          <span className="mr-2 text-gray">Sort By:</span>
          <select className=" select select-bordered focus:outline-none shadow-sm w-32 md:w-48">
            <option value="active">Latest</option>
            <option value="paused">Paused</option>
            <option value="delayed">Delayed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <div>
          <span className="font-bold">52 </span>
          Result Found
        </div>
      </div>

      {/* PRODUCTS  */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {product?.map((product, index) => (
          <Card open={open} />
        ))}
      </div>

      <div>
        <Pagination />
      </div>
      <div>
        <Dialog
          open={isOpen}
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10  w-full mx-auto overflow-y-auto backdrop-blur-sm backdrop-contrast-50 ">
            <div className="flex min-h-full items-center justify-center p-4 relative">
              <DialogPanel
                transition
                className="max-w-7xl mx-auto w-full border  rounded-xl bg-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 h-auto relative"
              >
                {/* Close Button */}
                <button
                  onClick={close}
                  className="btn btn-circle btn-md absolute top-[-50px] bg-gray-200 outline-none right-0"
                >
                  X
                </button>
                <div>
                  <Details />
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default ShopRight;
