import React from "react";

const UserSetting = () => {
  return (
    <div>
      <div className="border shadow rounded-2xl w-full ">
        <h4 className=" text-xl font-semibold  p-3 border-b">
          Account Settings
        </h4>
        <div>
          <div className="p-5">
            <form>
              <div className="flex flex-col md:flex-row justify-between gap-5">
                <div className="w-full md:w-[65%]">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="Fname" className="font-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="Fname"
                      defaultValue="Dianne"
                      className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <label htmlFor="Lname" className="font-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      defaultValue="Russell"
                      className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue="dianne.russell@gmail.com"
                      className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <label htmlFor="phone" className="font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      defaultValue="(603) 555-0123"
                      className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="w-full md:w-[35%] flex items-center justify-center flex-col">
                  <img
                    src=""
                    alt="profile picture"
                    className="bg-gray-500  w-[200px] h-[200px] rounded-full"
                  />
                  <input
                    type="file"
                    name="photo"
                    className="bg-none px-8 py-3 mt-4 rounded-[43px] border-2 font-bold text-[#00B207] border-[#00B207] w-48"
                    placeholder=" Choose Image"
                  />
                </div>
              </div>
              <button className="bg-[#00B207] w-full md:w-auto mt-4 px-8 py-3 rounded-[43px] text-white border-none focus:outline-none">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border shadow rounded-2xl w-full mt-5">
        <h4 className=" text-xl font-semibold  p-3 border-b">
          Billing Address
        </h4>
        <div>
          <div className="p-5">
            <form>
              <div>
                <div className="w-full ">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="Fname" className="font-semibold">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="Fname"
                        defaultValue="Dianne"
                        className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="Lname" className="font-semibold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="Lname"
                        defaultValue="Russell"
                        className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="Lname" className="font-semibold">
                        Company Name (optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        defaultValue="Zakirsoft"
                        className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 mt-4">
                    <label htmlFor="address" className="font-semibold">
                      Street Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      defaultValue="4140 Par|"
                      className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-4">
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="select" className="font-semibold">
                        {" "}
                        Country/Region
                      </label>
                      <select className="select select-bordered w-full">
                        <option disabled selected>
                          Bangladesh
                        </option>
                        <option>United States</option>
                        <option></option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="select" className="font-semibold">
                        {" "}
                        States
                      </label>
                      <select className="select select-bordered w-full">
                        <option disabled selected>
                          Dhaka
                        </option>
                        <option>Rangpur</option>
                        <option></option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="select" className="font-semibold">
                        Zip Code
                      </label>
                      <input
                        type="number"
                        name="zip-code"
                        className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-4">
                    <div className="flex flex-col gap-1  w-full">
                      <label htmlFor="email" className="font-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        defaultValue="dianne.russell@gmail.com"
                        className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="phone" className="font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="phone"
                        defaultValue="(603) 555-0123"
                        className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-[#00B207] w-full md:w-auto mt-4 px-8 py-3 rounded-[43px] text-white border-none focus:outline-none">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border shadow rounded-2xl w-full mt-5">
        <h4 className=" text-xl font-semibold  p-3 border-b">
          Change Password
        </h4>
        <div>
          <div className="p-5">
            <form>
              <div>
                <div className="w-full ">
                  {" "}
                  <div>
                    <div className="flex flex-col gap-1  w-full">
                      <label
                        htmlFor="current-password"
                        className="font-semibold"
                      >
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="current-password"
                        placeholder="Current Password"
                        className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                      />
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-5 mt-4">
                      <div className="flex flex-col gap-1  w-full">
                        <label htmlFor="new-password" className="font-semibold">
                          New Password
                        </label>
                        <input
                          type="password"
                          name="new-password"
                          placeholder="New Password"
                          className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                        />
                      </div>
                      <div className="flex flex-col gap-1  w-full">
                        <label
                          htmlFor="confirm-password"
                          className="font-semibold"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          name="confirm-password"
                          placeholder="Confirm Password"
                          className="input w-full text-gray border-[#E6E6E6] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-[#00B207] w-full md:w-auto mt-4 px-8 py-3 rounded-[43px] text-white border-none focus:outline-none">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
