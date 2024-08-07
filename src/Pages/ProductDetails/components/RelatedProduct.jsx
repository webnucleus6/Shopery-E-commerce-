import React from "react";
import Card from "../../Shop/components/Card";

import "react-tooltip/dist/react-tooltip.css";

import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import Details from "../../Shop/components/Details";
const RelatedProduct = () => {
  const product = [1, 1, 1, 1];

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
      <div>
        <h3 className="text-3xl font-bold text-center mb-10">
          Related Products
        </h3>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {product?.map((product, index) => (
          <Card open={open} />
        ))}
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

export default RelatedProduct;
