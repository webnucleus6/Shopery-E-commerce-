import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// React icons
import { GoTag } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoComment } from "react-icons/go";
import { SlLike } from "react-icons/sl";
import { MdArrowOutward } from "react-icons/md";


// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import ProductLoader from '../../../Shared/Loaders/ProductLoader/ProductLoader';

const LatestNews = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allNews, setAllNews] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch("./latestNews.json")
            .then(res => res.json())
            .then(result => {
                setAllNews(result);
                setIsLoading(false);
            })
    }, [])


    if (isLoading) return <ProductLoader />
    return (
        <>
            <h2 className='text-3xl font-semibold mt-16 mb-8'>Latest News</h2>
            <Swiper
                slidesPerView={3}

                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}

            >

                {
                    allNews?.map(({ id, newsTitle, foodCategory, addedBy, like, comment, newsImage }) =>

                        <SwiperSlide key={id}>
                            <div className="flex flex-col  p-6 overflow-hidden rounded-lg shadow-md  space-y-2 border">


                                <img src={newsImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 bg-gray-500 " />

                                {/* Like comment and watch icons */}
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <GoTag className='text-[#b3b3b3]' />
                                        <p className='text-[#4d4d4d]'>{foodCategory}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <GoPerson className='text-[#b3b3b3]' />
                                        <p className='text-[#4d4d4d]'><span className='text-[#808080]'>By</span> {addedBy}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <SlLike className='text-[#b3b3b3]' />
                                        <p className='text-[#4d4d4d]'>{like}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <GoComment className='text-[#b3b3b3]' />
                                        <p className='text-[#4d4d4d]'>{comment}</p>
                                    </div>

                                </div>
                                <h2 className="mb-1 text-xl font-semibold hover:text-[#2c742f] hover:cursor-pointer ">{newsTitle}</h2>

                                <Link className='flex items-center text-[#00b207] hover:underline'>Read More <MdArrowOutward /></Link>
                            </div>
                        </SwiperSlide>
                    )
                }



            </Swiper>
        </>
    );
};

export default LatestNews;