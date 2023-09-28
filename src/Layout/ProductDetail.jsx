import React, { useEffect, useState } from 'react';

// Compoennets
import Navbar from './Components/Navbar'; // Make sure the path to your Navbar component is correct
import Footer from './Components/Footer';


// React Router DOM
import { useParams } from 'react-router-dom';


// Icons
import { AiFillStar } from "react-icons/ai";

// Redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/cartSlice';

// Images
import loadingGif from '../assets/loading.gif';

export default function ProductDetail() {
    const { id } = useParams();
    const [details, setDetails] = useState(null); // Initialize details as null
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        async function getProductDetails() {
            try {
                const url = `https://fakestoreapi.com/products/${id}`;
                const response = await fetch(url);
                const data = await response.json();
                setDetails(data);
                setLoading(false); // Set loading to false when data is fetched
            } catch (error) {
                console.error("Failed to fetch product details", error);
            }
        }

        getProductDetails();
    }, [id]);

    //   Add to cart
    const dispatch = useDispatch();


    return (
        <>
            <Navbar />
            <div className="h-full w-full px-8 md:p-16 py-12 md:py-0">
                <div className="product-content bg-white md:p-12 h-auto md:h-full">
                    <div className="flex flex-nowrap items-center justify-between">
                        <h1 className='text-[15px] md:text-[20px]' style={{ fontFamily: "'Pacifico', cursive" }}>Product Detail</h1>
                        {/* <button><ImShare2 className="text-xl md:text-2xl" /></button> */}
                    </div>
                    <hr className='my-6' />
                    <div className="h-full w-full flex flex-wrap">
                        <div className="col w-full md:w-1/2 flex flex-nowrap items-center justify-center ">
                            <div className="image h-[260px] md:h-[300px] lg:h-[350px] w-[400px]" style={{ backgroundImage: `url(${details?.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "contain" }}></div>
                        </div>
                        <div className="col w-full md:w-1/2 flex flex-nowrap items-center justify-start md:ps-10">
                            <div className="h-auto md:h-[auto] md:w-[400px]">
                                {loading ? (
                                    <img src={loadingGif} alt="Loading..." className='h-[50px] w-[50px]' />
                                ) : (
                                    <div className="p-5 tracking-[1px]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                                        <h1 className='text-[22px] sm:text-3xl md:text-2xl lg:text-4xl mt-5 font-semibold'>{details?.title}</h1>
                                        <h1 className='text-[12px] sm:text-[14px] my-2'>Product Description</h1>
                                        <ul className='flex flex-nowrap items-center text-yellow-500'>
                                            <li><AiFillStar /></li>
                                            <li><AiFillStar /></li>
                                            <li><AiFillStar /></li>
                                            <li><AiFillStar /></li>
                                            <li><AiFillStar /></li>
                                            <li className='ms-2'>4.5</li>
                                        </ul>
                                        <h1 className='font-bold text-[16px] my-3'><strike className="me-3 text-slate-500">$500</strike>${details?.price}</h1>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <button className='btn w-[140px] bg-slate-900 text-white px-5 py-2 capitalize border-2 border-slate-900' onClick={() => dispatch(addToCart(details))}>Add to cart</button>
                                            <button className='btn w-[140px] border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold hover:font-normal px-5 py-2 capitalize'>Buy Now</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
