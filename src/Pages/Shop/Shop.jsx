import React from "react";

import ShopLeft from "./components/ShopLeft";
import ShopRight from "./components/ShopRight";
import ShopBanner from "./components/ShopBanner";

const Shop = () => {
  return (
    <div className="">
      <div>
        <div>
          <ShopBanner />
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
