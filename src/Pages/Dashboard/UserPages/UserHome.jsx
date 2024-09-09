const UserHome = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="border shadow rounded-2xl w-full  flex flex-col justify-center items-center p-5">
          <img
            src=""
            alt=""
            className="h-[120px] w-[120px] rounded-full bg-gray-500"
          />
          <h4 className="text-xl font-semibold text-center">Dianne Russell</h4>
          <p className="text-center">Customer</p>
          <button className="text-[#00B207] font-bold mt-2">
            Edit Profile
          </button>
        </div>
        <div className="border shadow rounded-2xl w-full p-5">
          <h4 className="text-gray text-lg font-semibold">Billing Address</h4>
          <h4 className="text-xl font-semibold mt-4">Dianne Russell</h4>
          <p className="text-gray mt-2">
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p className="text-gray mt-2">dainne.ressell@gmail.com</p>
          <p className="text-gray mt-2">(+88) 555-0110</p>
          <button className="text-[#00B207] font-bold mt-4">
            Edit Address
          </button>
        </div>
      </div>
      <div className="border shadow rounded-2xl w-full  mt-6">
        <div className="flex justify-between items-center px-6">
          <h4 className=" text-xl font-semibold  "> Recet Order History</h4>
          <button className="text-[#00B207] font-bold mt-4">View All</button>
        </div>
        <div className="my-4 ">
          <div className="overflow-x-scroll">
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
                    <button className="text-[#00B207] font-bold mt-4">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>#738</th>
                  <td>8 Sep, 2020</td>
                  <td>$135.00 (Products)</td>

                  <td>on the way</td>
                  <td>
                    <button className="text-[#00B207] font-bold mt-4">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <th>#738</th>
                  <td>8 Sep, 2020</td>
                  <td>$135.00 (Products)</td>

                  <td>Completed</td>
                  <td>
                    <button className="text-[#00B207] font-bold mt-4">
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
