import React from 'react';
import Banner from './HomeComponents/Banner';
import HomepageServices from './HomeComponents/HomepageServices';

const Home = () => {
    return (
        <div className='all-container mx-auto mt-6'>

            {/* Banner component */}
            <Banner/>

            {/* Services banner */}
            <HomepageServices/>
            
        </div>
    );
};

export default Home;