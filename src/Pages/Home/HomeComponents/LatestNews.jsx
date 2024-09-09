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
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';

const LatestNews = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allNews, setAllNews] = useState([]);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const [slidePerPage, setSlidePerPage] = useState(null);

    // get current width function
    const getCurrentWidth = () => setCurrentWidth(window.innerWidth);

    useEffect(() => {
        setCurrentWidth(window.innerWidth);

        window.addEventListener('resize', getCurrentWidth);
        return () => window.removeEventListener('resize', getCurrentWidth);
    }, [])


    useEffect(() => {
        if (currentWidth <= 640) {
            return setSlidePerPage(1);
        }
        else if (currentWidth <= 768 && currentWidth > 640) {
            return setSlidePerPage(2);
        }
        else {
            return setSlidePerPage(3);
        }
    }, [currentWidth])


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
        <div className='mt-16'>
            <SectionTitle title={"Latest News"} />
            <Swiper
                slidesPerView={slidePerPage}

                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className='mt-8'

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
        </div>
    );
};

export default LatestNews;