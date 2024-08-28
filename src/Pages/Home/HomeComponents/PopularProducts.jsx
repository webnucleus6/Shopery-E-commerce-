import React, { Suspense, useEffect, useState } from 'react';
import ProductLoader from '../../../Shared/Loaders/ProductLoader/ProductLoader';
import { FaArrowRight, FaRegHeart } from 'react-icons/fa';
import Rating from 'react-rating';
import { SlHandbag } from "react-icons/sl";

// Rating icons
import starGray from '../../../assets/icons/star-grey.png';
import starRed from '../../../assets/icons/star-red.png';
import starYellow from '../../../assets/icons/star-yellow.png';
import { Link } from 'react-router-dom';
import { LuEye } from 'react-icons/lu';



const PopularProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isHoverId, setIsHoverId] = useState(null);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

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
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {allProducts?.map(({ productPic, productId, name, offerPrice, regularPrice, ratings, discount, brandName }) =>
                    <div
                        onMouseOver={() => setIsHoverId(productId)}
                        onMouseOut={() => setIsHoverId(null)}
                        key={productId}
                        className='border relative py-2 cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F]'
                    >
                        {!isImageLoaded && <div className="skeleton h-40 w-48 mx-auto"></div>}
                        <img
                            src={productPic}
                            alt={name}
                            className={isImageLoaded ? '' : 'hidden'}
                            onLoad={() => setIsImageLoaded(true)}
                        />
                        <div className='flex justify-between items-center px-4'>
                            <div>
                                <Link to={`/details/${productId}`} className='font-semibold text-[#00B207] hover:text-[#4d4d4d] hover:underline'>{name}</Link>
                                <p className='text-xs text-[#4d4d4d]'>{brandName}</p>
                                <div className='flex gap-2'>
                                    {offerPrice && <h2 className='font-semibold text-xl'>$ {offerPrice}</h2>}
                                    <h2 className={offerPrice ? "line-through text-[#999999] text-base" : "font-semibold text-xl"}>$ {regularPrice}</h2>
                                </div>
                                <Rating
                                    placeholderRating={ratings}
                                    emptySymbol={<img src={starGray} className="icon" alt="gray star" />}
                                    placeholderSymbol={<img src={starRed} className="icon" alt="red star" />}
                                    fullSymbol={<img src={starYellow} className="icon" alt="yellow star" />}
                                />
                            </div>
                            <div className='bg-[#f2f2f2] p-3 rounded-full hover:bg-[#00b207] hover:text-white transition'>
                                <SlHandbag />
                            </div>
                        </div>
                        {discount && <p className='px-2 py-1 bg-[#ea4b48] w-fit rounded-md text-white absolute top-4 left-4'>Sale {discount}%</p>}
                        <div className={`absolute top-3 right-3 space-y-2 ${isHoverId === productId ? 'block' : 'hidden'}`}>
                            <div className='p-3 rounded-full border border-[#f2f2f2] bg-white hover:bg-[#00b207] hover:text-white transition'><FaRegHeart /></div>
                            <div className='p-3 rounded-full border border-[#f2f2f2] bg-white hover:bg-[#00b207] hover:text-white transition'><LuEye /></div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PopularProducts;