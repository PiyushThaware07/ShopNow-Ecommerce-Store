import React from 'react';
// ICONS
import { FaShippingFast } from 'react-icons/fa';
import { FaArrowsRotate } from 'react-icons/fa6';
import { BsCreditCardFill } from 'react-icons/bs';
import { BiSolidMessageDetail } from 'react-icons/bi';

export default function Services() {
    return (
        <>
            <div className="services-main w-full px-4 md:px-8 my-5" style={{ fontFamily: "'Pacifico', cursive" }}>
                <div className="bg-slate-200 text-gray-700 tracking-[1px] rounded-xl w-full flex flex-wrap items-center justify-center sm:px-6">
                    <div className="col py-8 w-1/2 lg:w-1/4 flex flex-nowrap justify-center">
                        <h1 className='flex flex-nowrap items-center text-[10px] md:text-[14px] capitalize font-medium gap-2' style={{ wordWrap: "none" }}><FaShippingFast size={20} /> Free Shipping</h1>
                    </div>
                    <div className="col py-8 w-1/2 lg:w-1/4 flex flex-nowrap justify-center">
                        <h1 className='flex flex-nowrap items-center text-[10px] md:text-[14px] capitalize font-medium gap-2' style={{ wordWrap: "none" }}><BiSolidMessageDetail size={20} /> 24/7 Helpline</h1>
                    </div>
                    <div className="col py-8 w-1/2 lg:w-1/4 flex flex-nowrap justify-center">
                        <h1 className='flex flex-nowrap items-center text-[10px] md:text-[14px] capitalize font-medium gap-2' style={{ wordWrap: "none" }}><BsCreditCardFill size={20} /> Cash on delivery</h1>
                    </div>
                    <div className="col py-8 w-1/2 lg:w-1/4 flex flex-nowrap justify-center">
                        <h1 className='flex flex-nowrap items-center text-[10px] md:text-[14px] capitalize font-medium gap-2' style={{ wordWrap: "none" }}><FaArrowsRotate size={20} /> Return & Refund</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
