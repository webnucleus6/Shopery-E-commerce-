import React from 'react';
// React timer
import { useTimer } from 'react-timer-hook';

const DateCounter = ({ expiryTimestamp }) => {

    // for timer
    const {
        seconds,
        minutes,
        hours,
        days,
        

    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <div >
            <h2 className='text-[#999999]'>Hurry up! Offer ends In:</h2>
            <div className='flex items-center gap-5'>

                <div>
                    <h2 className='text-[18px] font-[500]'>{days}</h2>
                    <h3 className='uppercase text-[#999999] text-xs'>days</h3>
                </div>
                <div>
                    <h2 className='text-[18px] font-[500]'>{hours}</h2>
                    <h3 className='uppercase text-[#999999] text-xs'>hours</h3>
                </div>:
                <div>
                    <h2 className='text-[18px] font-[500]'>{minutes}</h2>
                    <h3 className='uppercase text-[#999999] text-xs'>mins</h3>
                </div>:
                <div>
                    <h2 className='text-[18px] font-[500]'>{seconds}</h2>
                    <h3 className='uppercase text-[#999999] text-xs'>secs</h3>
                </div>
            </div>

        </div>
    );
};

export default DateCounter;