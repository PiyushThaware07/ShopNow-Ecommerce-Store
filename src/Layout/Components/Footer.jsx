import React from 'react';
// React Router DOM
import { Link } from 'react-router-dom';
// Icons
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { MdOutlineLocationOn, MdEmail } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCall } from "react-icons/pi";


export default function Footer() {
    return (
        <>
            <div className="bg-slate-50`">
                <div className="p-8 border-t-[1px] border-slate-300 flex flex-wrap md:flex-nowrap items-center justify-between" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <h1 className='text-sm' style={{ fontFamily: "'Pacifico', cursive" }}>Get Connect With Us On Social Media</h1>
                    <ul className='flex flex-nowrap items-center gap-3 text-xl mt-5 md:mt-0'>
                        <li className='p-3 text-blue-600 text-xl bg-slate-100 hover:bg-slate-200 rounded-full'><Link to='https://www.facebook.com/piyush.thaware.351/' target='_blank'><FaFacebook /></Link></li>
                        <li className='p-3 text-pink-600 text-xl bg-slate-100 hover:bg-slate-200 rounded-full'><Link to='https://www.instagram.com/piyushthaware07/' target='_blank'><TiSocialInstagram /></Link></li>
                        <li className='p-3 text-yellow-500 bg-slate-100 hover:bg-slate-200 rounded-full'><Link to='https://www.linkedin.com/in/piyush-thaware/' target='_blank'><FaLinkedinIn /></Link></li>
                        <li className='p-3 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full'><Link to='https://github.com/PiyushThaware07' target='_blank'><BsGithub /></Link></li>
                        <li className='p-3 text-red-600 bg-slate-100 hover:bg-slate-200 rounded-full'><Link to='mailto:https://piyushbthaware2@gmail.com?subject=Your%20Subject&body=Your%20Message' target='_blank'><MdEmail /></Link></li>
                    </ul>
                </div>

                <div className="border-t-[0.5px] border-slate-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6">
                        <div className="col p-4 sm:p-8">
                            <h1 className='text-2xl' style={{ fontFamily: "'Pacifico', cursive" }}>Shownow</h1>
                            <hr className='my-3' />
                            <small className='text-[13px] font-semibold capitalize' >Shopnow is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. </small>
                        </div>
                        <div className="col p-5 md:p-10 ">
                            <h1 className='text-1xl' style={{ fontFamily: "'Pacifico', cursive" }}>Online Shopping</h1>
                            <hr className='my-3' />
                            <ul className='list-unstyled text-[13px] font-semibold capitalize'>
                                <li className='m-3'><Link to="/category/men's clothing">Men's Clothing</Link></li>
                                <li className='m-3'><Link to="/category/women's clothing">Women's Clothing</Link></li>
                                <li className='m-3'><Link to="/category/jewelery">Jewelery</Link></li>
                                <li className='m-3'><Link to="/category/electronics">Electronics</Link></li>
                            </ul>
                        </div>
                        <div className="col p-5 md:p-10">
                            <h1 className='text-1xl' style={{ fontFamily: "'Pacifico', cursive" }}>Contact Us</h1>
                            <hr className='my-3' />
                            <ul className='list-unstyled text-[13px] font-semibold capitalize'>
                                <li className='flex flex-nowrap items-center gap-2 m-3'><MdOutlineLocationOn /> Nagpur,Maharashtra</li>
                                <li className='flex flex-nowrap items-center gap-2 m-3'><AiOutlineMail /> Piyushbthaware2@gmail.com</li>
                                <li className='flex flex-nowrap items-center gap-2 m-3'><PiPhoneCall /> +91 9865432109</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
