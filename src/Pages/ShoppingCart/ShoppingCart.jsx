import { Link } from 'react-router-dom';
import Breadcrumbs from '../../assets/wishlist/Breadcrumbs.png';
import greenCapsicum from '../../assets/wishlist/green capsicum.png';
import redCapsicum from '../../assets/wishlist/red capsicum.png';
import Nav_Banner from '../../Shared/Nav-Banner/Nav_Banner';
import { RxCross2 } from "react-icons/rx";


const ShoppingCart = () => {
    return (
        <>
            <Nav_Banner name={"Shopping Cart "} />
            <div className="mx-auto all-container">
                <h1 className="mt-5 text-3xl font-bold text-center">My Shopping Cart</h1>
                <div className='flex flex-col lg:gap-5 lg:p-10 lg:flex-row'>

                    {/* left side */}
                    <div className="flex-1 overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='border border-gray-300'>
                                    <th>PRODUCT</th>
                                    <th></th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>
                                    <th>SUBTOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className='border border-gray-300'>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="w-12 h-12 mask mask-squircle">
                                                    <img
                                                        src={greenCapsicum}
                                                        alt="greenCapsicumt" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Green Capsicums</div>
                                            </div>
                                        </div>
                                    </td>


                                    <td></td>
                                    <td>
                                        $70.00
                                    </td>

                                    <td>
                                        <div className='flex items-center gap-3 border-2 w-fit p-2 rounded-full'>
                                            <button className='btn btn-circle btn-xs'>-</button>
                                            <h3 className='font-semibold'>5</h3>
                                            <button className='btn btn-circle btn-xs'>+</button>


                                        </div>

                                    </td>
                                    <td>

                                        $70.00

                                    </td>
                                    <td>
                                        <button className='btn btn-circle btn-sm btn-error'>
                                            <RxCross2 />
                                        </button>

                                    </td>
                                </tr>


                            </tbody>

                        </table>
                        <div className='my-10 border rounded-lg'>
                            <div className='flex items-center justify-between p-5'>

                                <p className='text-xl font-bold text-black'>Coupon code </p>

                                <label className="flex w-3/4 items-center input input-bordered rounded-full pr-0">
                                    <input type="text" className=" grow" placeholder="Entry coupon" />
                                    <button className='bg-[#333333] btn text-white rounded-full '>Apply Coupon</button>
                                </label>


                            </div>
                        </div>


                    </div>

                    {/* right side */}

                    <div className="overflow-x-auto">
                        <table className="table border border-gray-300">
                            {/* head */}
                            <thead>
                                <tr className='border border-gray-300'>
                                    <th>Cart Total</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className='border border-gray-300'>

                                    <td>Sub Total</td>
                                    <td>$84.00</td>

                                </tr>
                                {/* row 2 */}
                                <tr className='border border-gray-300'>
                                    <td>Shopping</td>
                                    <td>free</td>
                                </tr>
                                {/* row 3 */}
                                <tr className='border border-gray-300'>
                                    <td>Total</td>
                                    <td>$84.00</td>
                                </tr>

                            </tbody>
                        </table>
                        <div className='flex items-center justify-center border border-gray-300'>

                            <div className='flex items-center justify-center m-5'>
                                <Link to="/billing-info"> <span className='w-full px-20 py-2 text-white bg-green-500 rounded-full hover:bg-gray-100 hover:text-green-500 '>Proceed to checkout</span></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;