import Breadcrumbs from '../../assets/wishlist/Breadcrumbs.png';
import greenCapsicum from '../../assets/wishlist/green capsicum.png';
import redCapsicum from '../../assets/wishlist/red capsicum.png';
import Nav_Banner from '../../Shared/Nav-Banner/Nav_Banner';


const WishList = () => {
    return (
        <>
            <Nav_Banner name={"WishList"} />

            <div className="mx-auto all-container">
                <h1 className="mt-10 text-3xl font-bold text-center">My WishList</h1>
                <div className="p-5 overflow-x-auto lg:p-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='border border-gray-300'>
                                <th>PRODUCT</th>
                                <th></th>
                                <th>PRICE</th>
                                <th>STOCK STATUS</th>
                                <th></th>
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
                                    $14.99<span className="ml-2 text-gray-500 line-through">$20.99</span>
                                </td>

                                <td>
                                    <button className="text-green-500 bg-green-100 btn-sm">In Stock</button>
                                    <button className="hidden text-red-500 bg-red-100 btn-sm">Out of Stock</button>
                                </td>
                                <td>
                                    <button className="text-white bg-green-500 rounded-full btn-sm hover:text-gray-600 hover:bg-gray-200">
                                        Add to Cart
                                    </button>
                                </td>
                                <td>X</td>
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
                                            <div className="font-bold">Red Capsicums</div>
                                        </div>
                                    </div>
                                </td>


                                <td></td>
                                <td>
                                    $14.99<span className="ml-2 text-gray-500 line-through">$20.99</span>
                                </td>

                                <td>
                                    <button className="hidden text-green-500 bg-green-100 btn-sm">In Stock</button>
                                    <button className="text-red-500 bg-red-100 btn-sm">Out of Stock</button>
                                </td>
                                <td>
                                    <button className="text-white bg-green-500 rounded-full btn-sm hover:text-gray-600 hover:bg-gray-200">
                                        Add to Cart
                                    </button>
                                </td>
                                <td>X</td>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
        </>
    );
};

export default WishList;