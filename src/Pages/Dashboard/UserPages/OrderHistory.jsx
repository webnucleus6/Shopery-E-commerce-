import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
const OrderHistory = () => {
  const pageArray = [1, 2, 3, 4, 5, 6];
  const count = 5;
  const currentPage = 1;
  return (
    <div className="border shadow rounded-2xl w-full  mt-6">
      <div className="flex justify-between items-center px-4">
        <h4 className=" text-xl font-semibold  ">Order History</h4>
      </div>
      <div className="my-4 w-full">
        <div className="overflow-x-scroll w-full">
          <table className="table">
            {/* head */}
            <thead className="bg-[#F2F2F2]">
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="px-4">
              <tr>
                <th>#738</th>
                <td>8 Sep, 2020</td>
                <td>$135.00 (Products)</td>

                <td>Processing</td>
                <td>
                  <Link to={"/dashboard/order-details"}>
                    <button className="text-[#00B207] font-bold mt-4">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>#738</th>
                <td>8 Sep, 2020</td>
                <td>$135.00 (Products)</td>

                <td>on the way</td>
                <td>
                  <Link to={"/dashboard/order-details"}>
                    <button className="text-[#00B207] font-bold mt-4">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <th>#738</th>
                <td>8 Sep, 2020</td>
                <td>$135.00 (Products)</td>

                <td>Completed</td>
                <td>
                  <Link to={"/dashboard/order-details"}>
                    <button className="text-[#00B207] font-bold mt-4">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        {count > 3 ? (
          <div className="flex justify-center items-center text-white my-5  rounded-xl p-3">
            <div className="flex">
              <a
                onClick={() => {
                  // setCurrentPage(currentPage - 1);
                  // setTimeout(refetch, 500);
                  // setLoader(true);
                  // setTimeout(setLoader, 1000, false);
                }}
                className={currentPage == 0 ? " hidden" : "  mr-3 "}
              >
                <div className="flex items-center -mx-1">
                  <button className="rounded-full w-10 h-10  text-black mb-3   border   hover:bg-[#E6E6E6]  flex justify-center items-center outline-none">
                    <GrPrevious className="text-2xl" />
                  </button>
                </div>
              </a>

              <div className="hidden md:flex">
                {pageArray?.map((page) => (
                  <button
                    key={page}
                    className={
                      currentPage == page
                        ? "rounded-full text-xl w-10 h-10 mb-3 mr-2  text-white  p-4 border bg-[#00B207] hover:bg-[#134e15]  flex justify-center items-center outline-none"
                        : "rounded-full text-xl w-10 h-10 mb-3 mr-2  text-black  p-4 border  flex justify-center items-center outline-none hover:bg-[#00B207]  hover:text-white  "
                    }
                  >
                    {page}
                  </button>
                ))}
              </div>

              <a
                className={currentPage == pageArray.length ? "ml-3 " : "ml-3"}
                //   onClick={() => {
                //     setCurrentPage(currentPage + 1);
                //     setTimeout(refetch, 500);
                //     setLoader(true);
                //     setTimeout(setLoader, 1000, false);
                //   }}
              >
                <div className="flex items-center cursor-pointer ">
                  <div className="flex items-center ">
                    <button
                      disabled={`${
                        currentPage === pageArray.length ? true : false
                      }`}
                      className="rounded-full w-10 h-10  text-black mb-3   border   hover:bg-[#E6E6E6]  flex justify-center items-center outline-none"
                    >
                      <GrNext className="text-2xl" />
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div>
            {/* <div className="w-full flex flex-col justify-center mt-5">
                    {verifiedProperties && verifiedProperties.length === 0 ? (
                      <h3 className="text-center text-3xl font-bold my-10">
                        {' '}
                        No Job Found
                      </h3>
                    ) : (
                      <></>
                    )}
                    <div className="w-full flex  justify-center">
                      <button
                        // onClick={() => {
                        //   setSearch('');
                        //   setMinPrice(0);
                        //   setMaxPrice(0);
                        //   setTimeout(refetch, 500);
                        //   setTimeout(reload, 500);
                        //   setLoader(true);
                        //   setTimeout(setLoader, 1000, false);
                        // }}
                        className="btn w-[40] bg-blue-500 text-white text-right mb-5"
                      >
                        See All Property
                      </button>
                    </div>
                  </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
