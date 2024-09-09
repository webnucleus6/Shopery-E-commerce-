import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ViewAllButton = () => {
    return (
        <button className='flex items-center gap-3 text-[#00b207] text-sm md:text-base hover:underline'>View all <FaArrowRight /></button>
    );
};

export default ViewAllButton;