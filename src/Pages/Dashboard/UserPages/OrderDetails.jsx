import React from "react";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  return (
    <div className="border shadow rounded-2xl w-full ">
      <div className=" px-4 w-full border-b py-3">
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h4 className=" text-xl font-semibold  ">Order History</h4>
            <ul className="hidden md:flex  items-center gap-2">
              <li className="text-sm flex items-center gap-1">
                <GoDotFill /> April 24, 2021
              </li>
              <li className="text-sm flex items-center gap-1">
                <GoDotFill /> 3 Products
              </li>
            </ul>
          </div>
          <Link to={"/dashboard/order-history"}>
            <button className="text-[#00B207] font-bold ">Back to List</button>
          </Link>
        </div>
        <div>
          <ul className="flex md:hidden   items-center gap-2">
            <li className="text-sm flex items-center gap-1">
              <GoDotFill /> April 24, 2021
            </li>
            <li className="text-sm flex items-center gap-1">
              <GoDotFill /> 3 Products
            </li>
          </ul>
        </div>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 p-6 gap-6">
        <div className="border flex flex-col md:flex-row gap-3 md:gap-0 justify-between rounded-2xl  col-span-1 md:col-span-2 ">
          <div className="w-full border-r-0 md:border-r ">
            <h4 className="font-medium text-sm text-gray  border-b p-4">
              Billing Address
            </h4>
            <div className="p-4">
              <h4 className="mb-1">Dainne Russell</h4>
              <p className="text-gray">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
              <h6 className="text-[12px] text-gray mt-5">Email:</h6>
              <p className="text-sm">dainne.ressell@gmail.com</p>
              <h6 className="text-[12px] text-gray mt-3">Phone:</h6>
              <p className="text-sm">(671) 555-0110</p>
            </div>
          </div>
          <div className="w-full">
            <h4 className="font-medium text-sm text-gray p-4 border-b">
              Shipping Address
            </h4>
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h4 className="mb-1">Dainne Russell</h4>
                <p className="text-gray">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </p>
              </div>
              <div>
                <h6 className="text-[12px] text-gray mt-5">Email:</h6>
                <p className="text-sm">dainne.ressell@gmail.com</p>
              </div>
              <div>
                <h6 className="text-[12px] text-gray mt-3">Phone:</h6>
                <p className="text-sm">(671) 555-0110</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border  rounded-2xl col-span-1 md:col-span-1">
          <div className="flex justify-between p-5 border-b">
            <div className="w-[40%]">
              <h5 className="text-[12px] text-gray">Order ID:</h5>
              <h5 className="text-sm">#4152</h5>
            </div>
            <div className="divider divider-horizontal px-4"></div>
            <div className="w-[60%]">
              <h5 className="text-[12px] text-gray">Payment Method:</h5>
              <h5 className="text-sm">Paypal</h5>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center justify-between ">
              <h5 className="text-sm text-gray">Subtotal:</h5>
              <h5 className="text-sm font-medium">
                $<span>365.00</span>
              </h5>
            </div>
            <div className="divider py-1"></div>
            <div className="flex items-center justify-between ">
              <h5 className="text-sm text-gray">Discount:</h5>
              <h5 className="text-sm font-medium">
                <span>20</span>%
              </h5>
            </div>
            <div className="divider py-1"></div>
            <div className="flex items-center justify-between ">
              <h5 className="text-sm text-gray">Shipping</h5>
              <h5 className="text-sm font-medium">Free</h5>
            </div>
            <div className="divider py-1"></div>
            <div className="flex items-center justify-between ">
              <h5 className="text-lg">Total</h5>
              <h5 className="text-lg font-semibold text-[#2C742F]">
                $<span>84.00</span>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="my-5 w-full">
        <ul className="steps w-full text-[#00b207]">
          <li className="step step-primary pending">Order received</li>
          <li className="step step-primary">Processing</li>
          <li className="step pending">On the way</li>
          <li className="step pending">Delivered</li>
        </ul>
      </div>
      <div className="my-4 w-full">
        <div className="overflow-x-scroll w-full">
          <table className="table">
            {/* head */}
            <thead className="bg-[#F2F2F2]">
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className="px-4">
              <tr>
                <th>
                  <div className="flex items-center gap-3">
                    <img
                      src="/image/Image.png"
                      alt="product"
                      className="w-20 h-20 rounded-xl"
                    />
                    <h5>Red Capsicum</h5>
                  </div>
                </th>
                <td>$14.00</td>
                <td>x5</td>

                <td>$70.00</td>
              </tr>
              <tr>
                <th>
                  <div className="flex items-center gap-3">
                    <img
                      src="/image/Image.png"
                      alt="product"
                      className="w-20 h-20 rounded-xl"
                    />
                    <h5>Red Capsicum</h5>
                  </div>
                </th>
                <td>$14.00</td>
                <td>x5</td>

                <td>$70.00</td>
              </tr>
              <tr>
                <th>
                  <div className="flex items-center gap-3">
                    <img
                      src="/image/Image.png"
                      alt="product"
                      className="w-20 h-20 rounded-xl"
                    />
                    <h5>Red Capsicum</h5>
                  </div>
                </th>
                <td>$14.00</td>
                <td>x5</td>

                <td>$70.00</td>
              </tr>
              <tr>
                <th>
                  <div className="flex items-center gap-3">
                    <img
                      src="/image/Image.png"
                      alt="product"
                      className="w-20 h-20 rounded-xl"
                    />
                    <h5>Red Capsicum</h5>
                  </div>
                </th>
                <td>$14.00</td>
                <td>x5</td>

                <td>$70.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
