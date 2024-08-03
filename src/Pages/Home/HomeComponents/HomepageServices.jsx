import React from 'react';


// importing all the icons
import car from '../../../assets/icons/car.png';
import help from '../../../assets/icons/help.png';
import bag from '../../../assets/icons/bag.png';
import pack from '../../../assets/icons/package.png';



const HomepageServices = () => {
    return (
        <div className='flex items-center justify-between p-10 bg-white shadow-lg rounded-xl mt-6'>

            <div className='flex items-center gap-2'>
                <div>
                    <img src={car} alt="" />
                </div>
                <div className='space-y-1'>
                    <h3 className='text-[#191919] font-semibold '>Free Shipping</h3>
                    <p className='text-[#999999] text-sm'>Free shipping on all your order</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={help} alt="" />
                </div>
                <div className='space-y-1'>
                    <h3 className='text-[#191919] font-semibold '>Customer Support 24/7</h3>
                    <p className='text-[#999999] text-sm'>Instant access to Support</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={bag} alt="" />
                </div>
                <div className='space-y-1'>
                    <h3 className='text-[#191919] font-semibold '>100% Secure Payment</h3>
                    <p className='text-[#999999] text-sm'>We ensure your money is save</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <img src={pack} alt="" />
                </div>
                <div className='space-y-1'>
                    <h3 className='text-[#191919] font-semibold '>Money-Back Guarantee</h3>
                    <p className='text-[#999999] text-sm'>30 Days Money-Back Guarantee</p>
                </div>
            </div>
            
        </div>
    );
};

export default HomepageServices;