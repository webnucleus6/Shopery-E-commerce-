import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import ProductLoader from '../../../Shared/Loaders/ProductLoader/ProductLoader';
import Rating from 'react-rating';
// Rating icons
import starGray from '../../../assets/icons/star-grey.png';
import starRed from '../../../assets/icons/star-red.png';
import starYellow from '../../../assets/icons/star-yellow.png';
import { FaQuoteRight } from "react-icons/fa";


const Testimonials = () => {

    const [loading, setLoading] = useState(true);
    const [allReviews, setAllReviews] = useState([]);

    // Load all reviews
    useEffect(() => {
        setLoading(true);

        fetch("./testimonials.json")
            .then(res => res.json())
            .then(result => {
                setAllReviews(result);
                setLoading(false);
            })
    }, [])

    if (loading) return <ProductLoader />

    return (

        <div className='bg-[#f2f2f2] py-12 mt-16'>
            <div className='all-container mx-auto'>
                <div class="">
                    <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                        Client Testimonials
                    </h1>
                </div>


                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className=""
                >
                    {
                        allReviews?.map(({ clientName, ratings, review, clientImage }) => <SwiperSlide>

                            <div class="p-8 mt-8 border rounded-lg bg-white">
                                <p class=" text-gray-500 dark:text-gray-400">
                                    <FaQuoteRight className='text-3xl text-[#b3e8b5]' />
                                    {review}
                                </p>

                                <div className='flex items-center justify-between mt-8 -mx-2'>
                                    <div class="flex items-center   gap-2 ">
                                        <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src={clientImage} alt={clientName} />
                                        <div>

                                            <h1 class="font-semibold text-gray-800 dark:text-white">{clientName}</h1>
                                            <span class="text-sm text-gray-500 dark:text-gray-400">Customer</span>
                                        </div>
                                    </div>



                                    <Rating
                                        placeholderRating={ratings}
                                        emptySymbol={<img src={starGray} className="icon" />}
                                        placeholderSymbol={<img src={starRed} className="icon" />}
                                        fullSymbol={<img src={starYellow} className="icon" />}
                                    />



                                </div>
                            </div>

                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>

    );
};

export default Testimonials;