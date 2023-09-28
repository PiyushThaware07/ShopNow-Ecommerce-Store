import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from './Slider';
import { Link } from 'react-router-dom';

export default function BodyPage() {
    return (
        <>
            <div className="body-container md:px-8">
                <div className="row flex flex-wrap items-center">
                    <div className="col w-full md:w-[70%] h-[175px] md:h-[400px] md:py-5 md:pe-6">
                        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                            <Slider image={"https://demo.codezeel.com/opencart/OPC06/OPC060143/image/cache/catalog/main-banner-1-1131x498.jpg"} />
                            <Slider image={"https://static.digit.in/default/tr:w-1200/amazon-mega-electronics-days-sale-5-8f38901931.jpeg"} />
                            <Slider image={"https://i.pinimg.com/originals/bd/4b/d1/bd4bd1c3a5373e3044077f7c29dd2974.jpg"} />
                        </Carousel>
                    </div>
                    <div className="col w-full md:w-[30%] h-auto md:h-[400px] px-4 md:px-0">
                        <div className="md:p-5 flex items-center md:inline">
                            <div className="row h-[30px] sm:h-[50px] md:h-[117px] w-1/3 md:w-full md:rounded-xl relative" style={{ background: `url("https://images.unsplash.com/photo-1526887520775-4b14b8aed897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80") no-repeat center`, backgroundSize: "cover" }}>
                                <Link to={`/category/men's clothing`}>
                                <span className='uppercase absolute top-0 left-0 bg-[#00000085] md:rounded-xl text-white text-[7px] md:text-[14px] font-bold flex flex-nowrap items-center justify-center h-full w-full'>Men's Clothing</span>
                                </Link>
                            </div>
                            <div className="row h-[30px] sm:h-[50px] md:h-[117px] md:mt-3 w-1/3 md:w-full ms-2 md:ms-0  md:rounded-xl relative" style={{ background: `url("https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80") no-repeat center`, backgroundSize: "cover" }}>
                                <Link to={`/category/women's clothing`}>
                                <span className='uppercase absolute top-0 left-0 bg-[#00000085] md:rounded-xl text-white text-[7px] md:text-[14px] font-bold flex flex-nowrap items-center justify-center h-full w-full'>Women's Clothing</span>
                                </Link>
                            </div>
                            <div className="row h-[30px] sm:h-[50px] md:h-[117px] md:mt-3 w-1/3 md:w-full ms-2 md:ms-0  md:rounded-xl relative" style={{ background: `url("https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") no-repeat center`, backgroundSize: "cover" }}>
                                <Link to={`/category/jewelery`}>
                                <span className='uppercase absolute top-0 left-0 bg-[#00000085] md:rounded-xl text-white text-[7px] md:text-[14px] font-bold flex flex-nowrap items-center justify-center h-full w-full'>Jewellery</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
