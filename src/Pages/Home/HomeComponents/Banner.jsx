import React from 'react';
import '../home.css';

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CommonButton from '../../../Shared/CommonButton/CommonButton';

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-6'>
            {/* First div */}
            <div className='first-banner text-white space-y-7 md:col-span-2 row-span-2' >
                <h2 className='text-5xl font-bold'>Fresh & Healthy
                    <br />
                    Organic Food
                </h2>


                <div className='space-y-7'>
                    <div>
                        <div className='flex items-center gap-3 mb-2'>
                            <p className='text-2xl font-[500]'>Sale up to</p>
                            <p className='offer-btn'>30% OFF</p>
                        </div>
                        <p className='text-[#ccded2] text-sm'>Free shipping on all your order.</p>
                    </div>


                    <Link >
                        <CommonButton btnText={"Shop Now"} customStyle={"mt-7 bg-white"} />
                    </Link>

                </div>

            </div>




            {/* second div */}
            <div className='offer-banner text-black '>
                <h2 className='uppercase font-semibold'>Summer Sale</h2>
                <h1 className='font-bold text-3xl'>75% OFF</h1>
                <p className='text-[#666666]'>Only Fruit & Vegetable</p>
                <button className='flex items-center gap-3 text-xl font-bold text-[#00b207] hover:underline'>Shop Now <FaArrowRight /></button>


            </div>

            <div className='best-deal text-white'>
                <div className='space-y-2'>
                    <p className='uppercase font-semibold'>
                        Best Deal
                    </p>
                    <h2 className='text-3xl font-bold'>Special Products <br /> Deal of the Month</h2>
                </div>

                <button className='flex items-center gap-3 text-xl font-bold text-[#00b207] hover:underline'>Shop Now <FaArrowRight /></button>


            </div>
        </div>
    );
};

export default Banner;