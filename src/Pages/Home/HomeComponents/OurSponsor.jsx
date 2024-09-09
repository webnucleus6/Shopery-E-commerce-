import React from 'react';

//  Importing all sponsors
import steps from '../../../assets/sponsor/steps.png';
import book from '../../../assets/sponsor/book-off.png'
import mango from '../../../assets/sponsor/mango.png'
import food from '../../../assets/sponsor/food.png'
import food2 from '../../../assets/sponsor/food2.png'
import gseries from '../../../assets/sponsor/g-series.png'


const OurSponsor = () => {
    return (
        <div className='all-container mx-auto py-12'>
            <div className='flex justify-between items-center flex-wrap'>

                <div>
                    <img src={steps} alt="" />
                </div>
                <div className='border-r h-14'></div>
                <div className=''>
                    <img src={mango} alt="" />
                </div>
                <div className='border-r h-14'></div>

                <div className=''>
                    <img src={food2} alt="" />
                </div>
                <div className='border-r h-14'></div>

                <div className=''>
                    <img src={food} alt="" />
                </div>
                <div className='border-r h-14'></div>

                <div className=''>
                    <img src={book} alt="" />
                </div>
                <div className='border-r h-14'></div>

                <div className=''>
                    <img src={gseries} alt="" />
                </div>
            </div>
        </div>
    );
};

export default OurSponsor;