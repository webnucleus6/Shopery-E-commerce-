import React, { useEffect, useState } from 'react';
import ProductLoader from '../../../Shared/Loaders/ProductLoader/ProductLoader';
import { FaArrowRight } from 'react-icons/fa';
import Rating from 'react-rating';
import { SlHandbag } from "react-icons/sl";

// Rating icons
import starGray from '../../../assets/icons/star-grey.png';
import starRed from '../../../assets/icons/star-red.png';
import starYellow from '../../../assets/icons/star-yellow.png';



const PopularProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/popularProduct.json")
            .then(res => res.json())
            .then(result => {
                setAllProducts(result);
                setLoading(false);
            })
    }, [])


    if (loading) return <ProductLoader />


    return (
        <div className='mt-16'>
            <div className='flex justify-between items-center font-[600] mb-8'>
                <h2 className='text-3xl'>Popular Products
                </h2>
                <button className='flex items-center gap-3 text-[#00b207] hover:underline'>View all <FaArrowRight /></button>

            </div>
            <div className='grid grid-cols-5'>
                {
                    allProducts?.map(({ productPic, productId, name, offerPrice, regularPrice, ratings,discount }) =>

                        <div
                            key={productId}
                            className='border relative  py-2  cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F]'
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

                            <p  className={`${discount?"px-2 py-1 bg-[#ea4b48] w-fit rounded-md text-white absolute top-4 left-4":"hidden"}`}>Sale {discount}%</p>

                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default PopularProducts;