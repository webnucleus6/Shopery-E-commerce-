import React, { useEffect, useState } from 'react';
import ProductLoader from '../../../Shared/Loaders/ProductLoader/ProductLoader';
import { FaArrowRight } from 'react-icons/fa';
import Rating from 'react-rating';

// React icons
import { SlHandbag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { LuEye } from "react-icons/lu";

// Rating icons
import starGray from '../../../assets/icons/star-grey.png';
import starRed from '../../../assets/icons/star-red.png';
import starYellow from '../../../assets/icons/star-yellow.png';
import DateCounter from './DateCounter';




const HotDealProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isHoverId, setIsHoverId] = useState(null);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 604800);


    useEffect(() => {
        setLoading(true);
        fetch("/hotDealProducts.json")
            .then(res => res.json())
            .then(result => {
                setAllProducts(result);
                setLoading(false);
            })
    }, [])


    if (loading) return <ProductLoader />


    return (
        <div className='mt-16 all-container mx-auto py-12'>
            <div className='flex justify-between items-center font-[600] mb-8'>
                <h2 className='text-3xl'>Hot Deals
                </h2>
                <button className='flex items-center gap-3 text-[#00b207] hover:underline'>View all <FaArrowRight /></button>

            </div>



            <div className='bg-white'>
                <div className='grid grid-cols-5'>

                    {/* Static First Products */}
                    {
                        allProducts?.slice(0, 1)?.map(({ productPic, productId, name, offerPrice, regularPrice, ratings, discount, feedBack }) =>
                            <div
                                key={productId}
                                className={`border relative  py-2  cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F]  col-span-2 row-span-2`}
                            >
                                <img src={productPic} alt="" />



                                <div className='flex items-center justify-between w-full px-6'>
                                    <div className='p-3 rounded-full bg-[#F2F2F2]  hover:bg-[#00b207] hover:text-white transition'>
                                        <FaRegHeart className='text-xl' />
                                    </div>
                                    <button className='btn w-2/3 rounded-full bg-[#00B207] text-white'>Add to Cart

                                        <SlHandbag className='text-xl' />
                                    </button>
                                    <div className='p-3 rounded-full bg-[#F2F2F2]  hover:bg-[#00b207] hover:text-white transition'>
                                        <LuEye className='text-xl' />
                                    </div>
                                </div>



                                <div className='flex justify-center items-center px-4 mt-6 text-center'>
                                    <div className='space-y-1'>


                                        <h2 className=' font-semibold text-[#2C742F] text-xl'>{name}</h2>
                                        <div className='flex justify-center gap-2 text-center'>
                                            <h2 className={`${offerPrice ? "text-2xl font-semibold" : "hidden"}`}>$ {offerPrice} </h2>
                                            <h2 className={`${offerPrice ? "line-through text-[#999999] text-2xl" : "font-bold text-xl"} `}>$ {regularPrice} </h2>

                                        </div>
                                        <Rating
                                            placeholderRating={ratings}
                                            emptySymbol={<img src={starGray} className="icon" />}
                                            placeholderSymbol={<img src={starRed} className="icon" />}
                                            fullSymbol={<img src={starYellow} className="icon" />}
                                        /><span className='text-[#999999] text-xs ml-1'>({feedBack} FeedBack)</span>


                                        <DateCounter expiryTimestamp={time} />


                                    </div>

                                </div>

                                <p className={`${discount ? "px-2 py-1 bg-[#ea4b48] w-fit rounded-md text-white absolute top-4 left-4" : "hidden"}`}>Sale {discount}%</p>
                                <p className="px-2 py-1 bg-[#2388ff] w-fit rounded-md text-white absolute top-4 left-28">Best Sale</p>

                            </div>

                        )
                    }



                    {/* Dynamic products */}
                    {
                        allProducts?.slice(1,)?.map(({ productPic, productId, name, offerPrice, regularPrice, ratings, discount }) =>

                            <div
                                onMouseOver={() => setIsHoverId(productId)}
                                onMouseOut={() => setIsHoverId(null)}
                                key={productId}
                                className={`border relative  py-2  cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F] `}
                            >
                                <img src={productPic} alt="" />

                                <div className='flex justify-between items-center px-4'>
                                    <div>

                                        <h2 className=' font-semibold text-[#4d4d4d]'>{name}</h2>
                                        <div className='flex gap-2'>
                                            <h2 className={`${offerPrice ? "font-bold text-xl" : "hidden"}`}>$ {offerPrice} </h2>
                                            <h2 className={`${offerPrice ? "line-through text-[#999999] text-base" : "font-bold text-xl"} `}>$ {regularPrice} </h2>

                                        </div>
                                        <Rating
                                            placeholderRating={ratings}
                                            emptySymbol={<img src={starGray} className="icon" />}
                                            placeholderSymbol={<img src={starRed} className="icon" />}
                                            fullSymbol={<img src={starYellow} className="icon" />}
                                        />

                                    </div>
                                    <div className='bg-[#f2f2f2] p-3 rounded-full hover:bg-[#00b207] hover:text-white transition'>
                                        <SlHandbag />
                                    </div>

                                </div>

                                <p className={`${discount ? "px-2 py-1 bg-[#ea4b48] w-fit rounded-md text-white absolute top-4 left-4" : "hidden"}`}>Sale {discount}%</p>
                                <div
                                    hidden={isHoverId !== productId}
                                    className='absolute top-3 right-3 space-y-2'>
                                    <div className='p-3 rounded-full border border-[#f2f2f2] bg-white hover:bg-[#00b207] hover:text-white transition'><FaRegHeart /></div>
                                    <div className='p-3 rounded-full border border-[#f2f2f2] bg-white hover:bg-[#00b207] hover:text-white transition'><LuEye /></div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default HotDealProducts;