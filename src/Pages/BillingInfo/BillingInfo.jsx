import Breadcrumbs from "../../assets/wishlist/Breadcrumbs.png";
import greenCapsicum from "../../assets/wishlist/green capsicum.png";
import redCapsicum from "../../assets/wishlist/red capsicum.png";

const BillingInfo = () => {
    return (
        <section className="mx-auto all-container">
            <img src={Breadcrumbs} alt="" />

            <div className="flex flex-col p-10 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-8">
                <div className="flex-1">


                    <form action="" className="space-y-8">

                        <fieldset className="p-6 space-y-4 border border-gray-300 rounded-md shadow-sm dark:bg-gray-50">
                            <h2 className='text-xl font-bold '>Billing Information</h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="firstname" className="text-sm">First name</label>
                                    <input id="firstname" type="text" placeholder="First name" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="lastname" className="text-sm">Last name</label>
                                    <input id="lastname" type="text" placeholder="Last name" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="company" className="text-sm">Company Name (Optional)</label>
                                    <input id="company" type="text" placeholder="Company name" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="address" className="text-sm">Street Address</label>
                                    <input id="address" type="text" placeholder="Street Address" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="country" className="text-sm">Country / Region</label>
                                    <select id="country" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600">
                                        <option value="">Select</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                        <option value="Pakistan">Pakistan</option>
                                    </select>
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="state" className="text-sm">State / Province</label>
                                    <select id="state" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600">
                                        <option value="">Select</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                        <option value="Pakistan">Pakistan</option>
                                    </select>
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                                    <input id="zip" type="text" placeholder="ZIP / Postal" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="email" className="text-sm">Email</label>
                                    <input id="email" type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                                <div className="col-span-full md:col-span-1">
                                    <label htmlFor="phone" className="text-sm">Phone Number</label>
                                    <input id="phone" type="text" placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                                </div>
                            </div>
                        </fieldset>
                        <div className="flex items-center">
                            <input type="checkbox" id="ship-different" className="w-5 h-5 border border-gray-300 checkbox" />
                            <label htmlFor="ship-different" className="ml-2 text-sm">Ship to different address</label>
                        </div>
                        <fieldset className="space-y-4 rounded-md shadow-sm dark:bg-gray-50">
                            <span className="text-xl font-bold">Additional Info</span>
                            <br />
                            <label htmlFor="order-notes" className="text-sm">Order Notes (Optional)</label>
                            <textarea id="order-notes" placeholder="Notes about your order, e.g. special notes for delivery." className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600" />
                        </fieldset>
                    </form>
                </div>
                <div className="w-full p-6 border border-gray-300 rounded-md shadow-sm lg:w-1/3 dark:bg-gray-50">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold">Order Summary</h2>
                        <table className="table w-full ">
                            <thead>
                                <tr className='border border-gray-300'>
                                    <th className="text-left">Item</th>
                                    <th className="text-right">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border border-gray-300'>
                                    <td className="flex items-center">
                                        <img src={greenCapsicum} alt="Green Capsicum" className="w-10 h-10 mr-2" />
                                        <span>Green Capsicum</span>
                                    </td>
                                    <td className="text-right">$70.00</td>
                                </tr>
                                <tr className='border border-gray-300'>
                                    <td className="flex items-center">
                                        <img src={redCapsicum} alt="Red Capsicum" className="w-10 h-10 mr-2" />
                                        <span>Red Capsicum</span>
                                    </td>
                                    <td className="text-right">$14.00</td>
                                </tr>
                                <tr className='border border-gray-300'>
                                    <td className="font-bold">Subtotal</td>
                                    <td className="text-right">$84.00</td>
                                </tr>
                                <tr className='border border-gray-300'>
                                    <td className="font-bold">Shipping</td>
                                    <td className="text-right">Free</td>
                                </tr>
                                <tr className='border border-gray-300'>
                                    <td className="font-bold">Total</td>
                                    <td className="text-right">$84.00</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold">Payment Method</h3>
                            <label className="flex items-center">
                                <input type="radio" name="payment" className="w-4 h-4 border border-gray-300 rounded-full" />
                                <span className="ml-2">Cash on Delivery</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="payment" className="w-4 h-4 border border-gray-300 rounded-full" />
                                <span className="ml-2">Paypal</span>
                                
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="payment" className="w-4 h-4 border border-gray-300 rounded-full" />
                                <span className="ml-2">Amazon Pay</span>
                            </label>
                        </div>
                        <button className="w-full p-2 font-bold text-white bg-green-500 rounded-full hover:bg-gray-200 hover:text-green-500">Place Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BillingInfo;
