import React, { useEffect, useState } from 'react';
import ProductLoader from '../../../Shared/Loaders/ProductLoader/ProductLoader';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import ViewAllButton from '../../../Shared/ViewAllButton/ViewAllButton';

const HomePopularCategories = () => {

    const [allCategories, setAllCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

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


    if (loading) return <ProductLoader />
    return (
        <div className='mt-16'>
            <div className='flex justify-between items-center font-[600] mb-8'>
                <SectionTitle title={"Popular Category"} />
                <ViewAllButton />
            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
                {
                    allCategories?.map(category =>

                        <div
                            key={category?.id}
                            className='border flex flex-col justify-center items-center py-2 rounded-md cursor-pointer hover:border-[#2C742F] hover:shadow-lg hover:text-[#2C742F]'
                        >
                            {!imageLoaded && <div className="skeleton h-36 w-36"></div>}
                            <img
                                src={category.image}
                                alt=""
                                className={imageLoaded ? '' : 'hidden'}
                                onLoad={() => setImageLoaded(true)}

                            />

                            <p className='text-xs md:text-sm font-semibold'>{category.name}</p>
 
                        </div>
                    )
                }

            </div>
        </div>

    );
};

export default HomePopularCategories;