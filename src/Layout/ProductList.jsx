import React, { useEffect } from 'react';

// Components
import ProductItem from './ProductItem';

// Images
import loadingGif from '../assets/loading.gif';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../Redux/Slices/productSlice';


export default function MultipleProducts() {


    const allProducts = useSelector((state) => state.productSlice.productArray)
    const dispatch = useDispatch();


    // console.log("==========>>>", allProducts);


    // Fetch Products ===========================================================
    async function fetchProducts() {
        try {
            const url = "https://fakestoreapi.com/products"
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data);
            dispatch(setProducts(data))
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    };
    useEffect(() => {
        fetchProducts()
    }, [dispatch]);
    // ==========================================================================



    return (
        <>
            <div className="body-content px-4 md:px-8 my-16">
                <h1 className='ms-5 font-bold text-[14px] bg-yellow-400 inline px-5 py-3 uppercase tracking-[2px]'>Best Deals</h1>
                <div className="row flex flex-wrap items-center">
                    {
                        allProducts.length === 0 ? (
                            <div className='h-[100px] w-full flex flex-nowrap items-center justify-center'>
                                <img src={loadingGif} alt="Loading..." className='h-[50px] w-[50px]' />
                            </div>
                        ) :
                            allProducts
                                .filter((product) => (product.category === "men's clothing" || product.category === "women's clothing") && (product.id > 1 && product.id !== 3))
                                .map((product) => (
                                    <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.image} product={product} />
                                ))
                    }
                </div>
            </div>
        </>
    )
}
