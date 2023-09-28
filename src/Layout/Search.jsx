import React, { useEffect, useState } from 'react';

// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// React Router DOM
import { Link, useParams } from 'react-router-dom';

// Images
import loadingGIF from '../assets/loading.gif';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { GiClothes } from "react-icons/gi";



export default function Search() {
    const dispatch = useDispatch();
    const { query } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchProduct() {
        try {
            const url = `https://fakestoreapi.com/products/`;
            const response = await fetch(url);
            const data = await response.json();
            const filterProducts = data.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setProducts(filterProducts);
            setLoading(false); // Set loading to false when products are fetched
        } catch (error) {
            console.log("Failed to fetch the search product", error);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [query]);

    return (
        <>
            <Navbar />
            <div className="px-10 md:px-20 py-8">
                <h1 className='text-xl capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>
                    Search : {query}
                </h1>
                <hr className='my-5' />

                {loading ? (
                    <div className="text-center">
                        <img src={loadingGIF} alt="Loading" className='h-[50px] w-[50px]' />
                    </div>
                ) : (
                    <>
                        {products.length === 0 ? (
                            <div className="flex justify-center items-center h-[400px] bg-gray-100 p-5 sm:p-0">
                                <div className="text-center">
                                    <h1 className='inline-block text-slate-700'><GiClothes className='text-9xl' /></h1>
                                    <h1 className="text-xl md:text-4xl font-semibold text-slate-800 mb-4">Product Not Found</h1>
                                    <p className="text-sm md:text-lg text-slate-600">Sorry, the product you are looking for could not be found.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="grid lg:grid-cols-4 gap-[50px]">
                                {products.map((product) => (
                                    <div className={`bg-white  border-[3px] shadow-sm hover:border-slate-700 rounded-xl `} key={product.id}>
                                        <Link to={`/product/${product.id}`} className="flex items-center justify-center p-10">
                                            <img src={product.image} alt="Image" className="max-w-full h-[180px]" />
                                        </Link>
                                        <div className="p-4 text-start flex flex-nowrap items-center ">
                                            <Link to={`/product/${product.id}`} className="">
                                                <h2 className="text-md capitalize font-bold text-gray-800 mb-2 tracking-[0.6px]">{product.title}</h2>
                                                <p className="text-gray-700 mb-2 font-bold text-[14px]">
                                                    <strike className="text-slate-500">${product.price + 200}</strike>
                                                    <span className='ms-3' >${product.price}</span>
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            <Footer />
        </>
    );
}
