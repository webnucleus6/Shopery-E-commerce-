import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Swiper js package
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductLoader from '../../../Shared/Loaders/ProductLoader/ProductLoader';
import CommonButton from '../../../Shared/CommonButton/CommonButton';

const OfferSlider = () => {
    const [allContent, setAllContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [slidePerPage, setSlidePerPage] = useState(null);

    // Getting current width for responsive offer cards
    const getBrowserWidth = () => {
        setScreenWidth(window.innerWidth);
    }


    useEffect(() => {
        setScreenWidth(window.innerWidth);

        // get resizing value
        window.addEventListener('resize', getBrowserWidth);

        return () => window.removeEventListener('resize', getBrowserWidth);
    }, [])

    useEffect(() => {
        if (screenWidth <= 640) {
            return setSlidePerPage(1);
        }
        else if (screenWidth <= 768 && screenWidth > 640) {
            return setSlidePerPage(2);
        }
        else {
            return setSlidePerPage(3);
        }
    }, [screenWidth])

    useEffect(() => {
        setLoading(true);
        fetch('./sliderContent.json')
            .then(res => res.json())
            .then(result => {
                setAllContent(result);
                setLoading(false);
            })
            .catch(() => setLoading(false)); // Handle fetch errors
    }, []);

    if (loading) return <ProductLoader />;

    return (
        <div>
            <Swiper
                slidesPerView={slidePerPage}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mt-16"
            >
                {allContent.map(({ id, cardImage, heading, title, description, headingStyle, titleStyle, descriptionStyle }) => (
                    <SwiperSlide
                        key={id}
                        className="swiper-slide bg-cover bg-center min-h-[530px] rounded-md cursor-pointer"
                        style={{ backgroundImage: `url(${cardImage})` }}
                    >

                        <div className='flex flex-col justify-center items-center mt-8 gap-4'>
                            <p className={`uppercase text-sm ${headingStyle}`}>{heading}</p>
                            <h2 className={`text-4xl font-semibold ${titleStyle}`}>{title}</h2>
                            <p className={`font-semibold ${descriptionStyle}`}>{description}</p>
                            <Link>
                                <CommonButton btnText={"Shop Now"} customStyle={"bg-white"} />
                            </Link>
                        </div>






                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OfferSlider;
