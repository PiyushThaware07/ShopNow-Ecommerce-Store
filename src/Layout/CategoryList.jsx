import React, { useEffect, useState } from 'react';

// Components
import Navbar from './Components/Navbar';
import CategoryItem from './CategoryItem';
import Footer from './Components/Footer';

// React Router DOM
import { Link, useParams } from 'react-router-dom';

// Loading GIF
import loadingGIF from '../assets/loading.gif';


export default function CategoryList() {
    const [loading, setLoading] = useState(true);
    // Fetch Category List ======================================================
    const [allCategory, setAllCategory] = useState([]);

    async function fetch_ALL_Category() {
        try {
            const url = "https://fakestoreapi.com/products/categories";
            const response = await fetch(url);
            const data = await response.json();
            setAllCategory(data);
        }
        catch (error) {
            console.log("Failed to get the list of category", error);
        }

    }
    useEffect(() => {
        fetch_ALL_Category();
    }, [])





    // Fetch Individual Products ==========================================================
    const [categoryArray, setCategooryArray] = useState([])
    const { id } = useParams();

    async function fetch_Category_Array() {
        try {
            const url = `https://fakestoreapi.com/products/category/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setCategooryArray(data);
        }
        catch (error) {
            console.log("Failed to get specific category products", error);
        }
    }
    useEffect(() => {
        setLoading(true)
        fetch_Category_Array();
    }, [id])



    // Toggle Category  ===========================================================
    const [togglecategory, setToggleCategory] = useState(false);
    const handleToggleCategory = () => setToggleCategory((value) => !value);



    return (
        <>
            <Navbar />
            <div className=" min-h-screen flex">
                <div className="w-1/4 p-5 hidden md:inline">
                    <div className="mb-4">
                        <div className="bg-white px-3 lg:px-11  py-4  rounded">
                            <p style={{ fontFamily: "'Pacifico', cursive" }} className='ms-5 lg:ms-0'>Category</p>
                            <hr className='my-3' />
                            <ul className='ps-5 list-unstyled' style={{ fontFamily: "'Poppins', sans-serif" }}>
                                {
                                    allCategory.map((category, index) => {
                                        return (

                                            <li className='my-5 text-[13px] capitalize' key={index}><Link to={`/category/${category}`}>{category}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4 p-10 md:p-7 ">
                    <div className="flex flex-nowrap items-center justify-between mb-3">
                        <h1 className="capitalize" style={{ fontFamily: "'Pacifico', cursive" }}>{id}</h1>
                        <button type='button' className='inline md:hidden uppearcase px-5 py-2 text-[10px] font-bold bg-slate-900 text-white' onClick={() => handleToggleCategory()}>Show Category</button>
                    </div>
                    {/* ==================================================================================== */}
                    <div className={` ${togglecategory ? 'inline' : 'hidden'} md:hidden ease-in-out duration-300 `}>
                        <ul className='list-unstyled bg-slate-900 rounded-xl text-center text-sm text-white font-semibold p-6 ' >
                            {
                                allCategory.map((category, index) => {
                                    return (
                                        <li className='my-5 pe-2 capitalize' key={index}><Link to={`/category/${category}`} onClick={() => handleToggleCategory()}>{category}</Link></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    {/* ==================================================================================== */}
                    <hr className='my-5' />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
                        {/* Columns */}
                        {
                            loading ? (
                                <div className="flex items-center justify-center h-[300px] w-full">
                                    <img src={loadingGIF} alt="Loading Products..." className='h-[80px] w-[80px]' />
                                </div>
                            )
                                :
                                (categoryArray.map((product, index) => {
                                    return (
                                        <CategoryItem key={index} id={product.id} title={product.title} image={product.image} price={product.price} product={product} />
                                    )
                                }))
                        }
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
