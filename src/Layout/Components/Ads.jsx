import React from 'react';

// GIF
import ad1 from '../../assets/img/ad1.gif';

export default function Ads() {
    return (
        <>
            <div className="col-span-1 sm:h-[200px] md:h-[80%] bg-slate-300 relative">
                <img src={ad1} alt="Banner1" className='h-full w-full' />
            </div>
        </>
    )
}
