import React from 'react';
import Banner from './HomeComponents/Banner';
import HomepageServices from './HomeComponents/HomepageServices';
import HomePopularCategories from './HomeComponents/HomePopularCategories';
import PopularProducts from './HomeComponents/PopularProducts';
import OfferSlider from './HomeComponents/OfferSlider';
import CommonButton from '../../Shared/CommonButton/CommonButton';
import HotDealProducts from './HomeComponents/HotDealProducts';
import FeaturedProducts from './HomeComponents/FeaturedProducts';
import LatestNews from './HomeComponents/LatestNews';
import Testimonials from './HomeComponents/Testimonials';
import OurSponsor from './HomeComponents/OurSponsor';

// import css file

import './home.css'

const Home = () => {
    return (
        <div className='px-2'>
            <div className='all-container mx-auto mt-6'>

                {/* Banner component */}
                <Banner />

                {/* Services banner */}
                <HomepageServices />

                {/* Popular categories */}
                <HomePopularCategories />


                {/* Popular Products */}
                <PopularProducts />


                {/* Offer slides */}
                <OfferSlider />

            </div>
            {/* Hot Deal Products */}
            <div className='bg-[#f2f2f2]'>
                <HotDealProducts />
            </div>

            <div className='all-container mx-auto'>
                {/* Offer Card Banner */}
                <div className=' min-h-[360px]  mt-16 flex justify-center text-center lg:text-left lg:justify-end items-center lg:pr-16 offer-card'>
                    <div className='space-y-2'>
                        <p className='uppercase font-semibold text-white'>Summer Sale</p>
                        <h2 className='text-4xl lg:text-[56px] text-white'><span className='font-bold text-[#ff8a00]'>37%</span> OFF</h2>
                        <p className='text-[#ffffffb3] lg:footer-text'>Free on all your order, Free Shipping and  30 <br /> days money-back guarantee</p>

 
                        <CommonButton btnText={"Shop Now"} customStyle={"bg-[#0bb419] text-white "} />
                    </div>
 
 
                </div>


                {/* Featured Products */}
                <FeaturedProducts />

                {/* Latest News */}
                <LatestNews />
            </div>




            {/* Clients Testimonials */}
            <Testimonials />


            {/* Sponsors */}
            <OurSponsor />
        </div>
    );
};

export default Home;