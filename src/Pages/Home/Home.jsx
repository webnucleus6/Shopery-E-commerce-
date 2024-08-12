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

const Home = () => {
    return (
        <div>
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
                <div className='bg-[url("https://i.postimg.cc/76c4FyGL/offercard.png")] min-h-[360px] bg-no-repeat bg-contain mt-16 flex justify-end items-center pr-16'>
                    <div className='space-y-2'>
                        <p className='uppercase font-semibold text-white'>Summer Sale</p>
                        <h2 className='text-[56px] text-white'><span className='font-bold text-[#ff8a00]'>37%</span> OFF</h2>
                        <p className='footer-text'>Free on all your order, Free Shipping and  30 <br /> days money-back guarantee</p>

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