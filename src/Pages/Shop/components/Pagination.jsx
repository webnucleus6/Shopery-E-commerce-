import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
const Pagination = () => {
  const pageArray = [1, 2, 3, 4, 5, 6];
  const count = 5;
  const currentPage = 1;

  return (
    <div>
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
                  <button className="rounded-full w-16 h-16 text-xl text-black mb-3  p-4 border   hover:bg-[#E6E6E6]  flex justify-center items-center outline-none">
                    <GrPrevious />
                  </button>
                </div>
              </a>

              {pageArray?.map((page) => (
                <button
                  // onClick={() => {
                  //   setCurrentPage(page);
                  //   setTimeout(refetch, 500);
                  //   setLoader(true);
                  //   setTimeout(setLoader, 1000, false);
                  // }}
                  key={page}
                  className={
                    currentPage == page
                      ? "rounded-full text-xl w-16 h-16 mb-3 mr-2  text-white  p-4 border bg-[#00B207] hover:bg-[#134e15]  flex justify-center items-center outline-none"
                      : "rounded-full text-xl w-16 h-16 mb-3 mr-2  text-black  p-4 border  flex justify-center items-center outline-none hover:bg-[#00B207]  hover:text-white  "
                  }
                >
                  {page}
                </button>
              ))}

              <a
                className={currentPage == pageArray.length ? " ml-3" : "ml-3"}
                //   onClick={() => {
                //     setCurrentPage(currentPage + 1);
                //     setTimeout(refetch, 500);
                //     setLoader(true);
                //     setTimeout(setLoader, 1000, false);
                //   }}
              >
                <div className="flex items-center cursor-pointer ">
                  <div className="flex items-center ">
                    <button className="rounded-full w-16 h-16 text-xl text-black mb-3 border  p-4   btn hover:bg-[#E6E6E6]  flex justify-center items-center outline-none">
                      <GrNext />
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

export default Pagination;
