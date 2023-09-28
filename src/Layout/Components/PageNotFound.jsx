import React from 'react';
// React Router DOM
import { Link } from 'react-router-dom';


export default function PageNotFound() {
    return (
        <>
            <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center">
                <div className="">
                    <h1 className='text-8xl md:text-9xl font-bold text-white text-center' style={{ fontFamily: "'Poppins', sans-serif" }}>404</h1>
                    <h1 className='text-white uppercase tracking-[0.7px] text-center text-[13px] px-7 md:px-0'>We Are Sorry,But the page you requested was not found</h1>
                    <div className="flex flex-nowrap items-center justify-center my-3 gap-4">
                        <Link to='/' className='bg-white text-slate-900 px-6 py-2 rounded-full font-semibold tracking-[0.7px] uppercase' >Go Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
