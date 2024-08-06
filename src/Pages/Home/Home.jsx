import React from 'react';
import Banner from './HomeComponents/Banner';
import HomepageServices from './HomeComponents/HomepageServices';
import HomePopularCategories from './HomeComponents/HomePopularCategories';
import PopularProducts from './HomeComponents/PopularProducts';
import OfferSlider from './HomeComponents/OfferSlider';

const Home = () => {
    return (
        <div className='all-container mx-auto mt-6'>

            {/* Banner component */}
            <Banner/>

            {/* Services banner */}
            <HomepageServices/>

            {/* Popular categories */}
            <HomePopularCategories/>


            {/* Popular Products */}
            <PopularProducts/>


            {/* Offer slides */}
            <OfferSlider/>
            
        </div>
    );
};

export default Home;