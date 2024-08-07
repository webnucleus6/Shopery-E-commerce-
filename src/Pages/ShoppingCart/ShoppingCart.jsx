import Breadcrumbs from '../../assets/wishlist/Breadcrumbs.png';
import greenCapsicum from '../../assets/wishlist/green capsicum.png';
import redCapsicum from '../../assets/wishlist/red capsicum.png';


const ShoppingCart = () => {
    return (
        <div className="mx-auto all-container">
            <img src={Breadcrumbs} alt="" />
            <h1 className="mt-5 text-3xl text-center">My Shopping Cart</h1>
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
                                    <button className="flex gap-3 border rounded-full "> <p className='w-5 h-5 bg-gray-100 rounded-full'>-</p> 5 <p className='w-5 h-5 bg-gray-100 rounded-full'>+</p></button>

                                </td>
                                <td>

                                    $70.00

                                </td>
                                <td className='flex items-center justify-center'>
                                    <p className='w-5 h-5 text-center border border-gray-300 rounded-full'>-</p>

                                </td>
                            </tr>
                            <tr className='border border-gray-300'>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-10 h-10 mask mask-squircle">
                                                <img
                                                    src={redCapsicum}
                                                    alt="redCapsicum" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Green Capsicums</div>
                                        </div>
                                    </div>
                                </td>

                                <td></td>
                                <td>                   $14.00                                </td>

                                <td>
                                    <button className="flex gap-3 border rounded-full "> <p className='w-5 h-5 bg-gray-100 rounded-full'>-</p> 5 <p className='w-5 h-5 bg-gray-100 rounded-full'>+</p></button>

                                </td>
                                <td>

                                    $14.00

                                </td>
                                <td className='flex items-center justify-center'>
                                    <p className='w-5 h-5 text-center border border-gray-300 rounded-full'>-</p>

                                </td>
                            </tr>
                            {/*  */}
                            <tr>
                                <td> <button className='rounded-full btn-sm bg-slate-100 hover:text-white hover:bg-green-500 '>Return to shope</button></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button className='rounded-full btn-sm bg-slate-100 hover:text-white hover:bg-green-500'> Update cart</button></td>
                            </tr>

                        </tbody>

                    </table>
                    <div className='my-10 border'>

                        <div>
                            <div className='flex items-center justify-between p-5'>

                                <p className='text-xl font-bold text-black'>Coupon code </p>
                                <div className='flex justify-between'>
                                    <label className="flex items-center gap-2 input input-bordered">
                                        <input type="text" className=" grow" placeholder="Entry coupon" />
                                        <span className="p-5 font-bold text-white bg-black border-0 badge badge-info hover:bg-gray-100 hover:text-green-500 ">Apply Coupon</span>
                                    </label>
                                </div>

                            </div>
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
                            <span className='w-full px-20 py-2 text-white bg-green-500 rounded-full hover:bg-gray-100 hover:text-green-500'>Proceed to checkout</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;