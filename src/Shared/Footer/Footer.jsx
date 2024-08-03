import React from 'react';
import { Link } from 'react-router-dom';
import applePay from '../../assets/icons/apple-pay.png'
import visaPay from '../../assets/icons/visa-cart.png'
import discoverPay from '../../assets/icons/discover.png'
import masterCart from '../../assets/icons/master-cart.png'
import securePay from '../../assets/icons/secure.png'




const Footer = () => {
    return (

        <footer className="bg-[#191919] mt-10">
            <div className="all-container p-6 mx-auto">
                <div className="lg:flex gap-9">
                    <div className="w-full -mx-6 lg:w-2/5">
                        <div className="px-6 space-y-4">
                            <h2 className="text-3xl font-semibold flex items-center gap-2 text-white"><img src="/fav.png" alt="" /> Echo Shop</h2>
                            <p className='footer-text'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>

                            <p className='footer-text'><span className='text-white'>(+880) 01XXXX</span> or <span className='text-white'>test@gamil.com</span></p>

                        </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <div className='footer-text flex flex-col gap-3'>
                                <h2 className='text-white'>My Account</h2>
                                <Link to={"/my-account"} className='text-sm hover:underline'>My Account</Link>
                                <Link to={"/order-history"} className='text-sm hover:underline'>Order History</Link>
                                <Link to={"/shoping-cart"} className='text-sm hover:underline'>Shoping Cart</Link>
                                <Link to={"/wishlist"} className='text-sm hover:underline'>Wishlist</Link>

                            </div>
                            <div className='footer-text flex flex-col gap-3'>
                                <h2 className='text-white'>Helps</h2>
                                <Link to={"/contact-us"} className='text-sm hover:underline'>Contact</Link>
                                <Link to={"/faqs"} className='text-sm hover:underline'>Faqs</Link>
                                <Link to={"/trams"} className='text-sm hover:underline'>Trams & Condition</Link>
                                <Link to={"/privacy"} className='text-sm hover:underline'>Privacy Policy</Link>

                            </div>
                            <div className='footer-text flex flex-col gap-3'>
                                <h2 className='text-white'>Proxy</h2>
                                <Link to={"/about"} className='text-sm hover:underline'>About</Link>
                                <Link to={"/shop"} className='text-sm hover:underline'>Shop</Link>
                                <Link to={"/product"} className='text-sm hover:underline'>Product</Link>
                                <Link to={"/track-order"} className='text-sm hover:underline'>Track Order</Link>

                            </div>
                            <div className='footer-text flex flex-col gap-3'>
                                <h2 className='text-white'>Categories</h2>
                                <Link to={"/fruit-vegetables"} className='text-sm hover:underline'>Fruit & Vegetables</Link>
                                <Link to={"/meat-fish"} className='text-sm hover:underline'>Meat & Fish</Link>
                                <Link to={"/bread-bakery"} className='text-sm hover:underline'>Bread & Bakery</Link>
                                <Link to={"/beauty-health"} className='text-sm hover:underline'>Beauty & Health</Link>

                            </div>




                        </div>
                    </div>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center'>
                    <p className=" footer-text">Echo-Shop © 2021. All Rights Reserved</p>

                    {/* footer icons */}
                    <div className='flex items-center gap-2'>
                        <img src={applePay} alt="" />
                        <img src={visaPay} alt="" />
                        <img src={discoverPay} alt="" />
                        <img src={masterCart} alt="" />
                        <img src={securePay} alt="" />
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;