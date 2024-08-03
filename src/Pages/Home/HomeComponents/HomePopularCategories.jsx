import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const HomePopularCategories = () => {

    const [allCategories, setAllCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    // loaded all categories
    useEffect(() => {
        setLoading(true)
        fetch("./popularCategory.json")
            .then(res => res.json())
            .then(data => {
                setAllCategories(data);
                setLoading(false);
            })

    }, [])


    if (loading) return <div className="loader"></div>
    return (
        <div className='mt-16'>
            <div className='flex justify-between items-center font-[600] mb-8'>
                <h2 className='text-3xl'>Popular Categories
                </h2>
                <button className='flex items-center gap-3 text-[#00b207] hover:underline'>View all <FaArrowRight /></button>

            </div>
            <div className='grid grid-cols-6 gap-6'>
                {
                    allCategories?.map(category =>

                        <div
                            key={category?.id}
                            className='border flex flex-col justify-center items-center py-2 rounded-md cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F]'
                        >
                            <img src={category.image} alt="" />
                            <p className='text-sm font-semibold'>{category.name}</p>
                        </div>
                    )
                }

            </div>
        </div>

    );
};

export default HomePopularCategories;