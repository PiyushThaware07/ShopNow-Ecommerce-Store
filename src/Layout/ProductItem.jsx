
import React, { useEffect, useState } from 'react';
// Icons
import { BsCartPlusFill,  BsCheckCircleFill } from "react-icons/bs";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/Slices/cartSlice';

// React Router DOM
import { Link } from 'react-router-dom';


export default function CardsProduct(props) {
    const [cartIcon, setCartIcon] = useState(true);

    const dispatch = useDispatch();

    // Check added to card
    const cart = useSelector((state) => state.cartSlice.cartArray);

    // Check if the product is in the cart based on its id
    const isProductInCart = cart.some((item) => item.id === props.id);

    function handleAddToCart() {
        if (!isProductInCart) {
            dispatch(addToCart(props)); // Add the product to the cart if it's not already there
            setCartIcon(false);
        }
    }


    function checkProductInCart() {
        if (isProductInCart) {
            setCartIcon(false);
        }
    }
    useEffect(() => {
        checkProductInCart();
    }, [])

    return (
        <>
            <div className="col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 decoration-none">
                <div className={`max-w-sm mx-auto bg-white ${cartIcon ? 'shadow-sm' : 'border-pink-700'} border-[3px]  ${cartIcon ? "hover:border-slate-700" : ""}  rounded-lg overflow-hidden`}>
                    <div className="relative">
                        <div className="w-full h-64 object-cover" />
                        <Link to={`product/${props.id}`} className="absolute inset-0 flex items-center justify-center">
                            {/* <!-- Centered Product Image --> */}
                            <img src={props.image} alt="Product Image" className="max-h-40" />
                        </Link>
                    </div>
                    <div className="p-4 text-start flex flex-nowrap items-center">
                        <Link to={`product/${props.id}`} className="">
                            <h2 className="text-md capitalize font-bold text-gray-800 mb-2 tracking-[0.6px]">{props.title.slice(0, 14)}...</h2>
                            <p className="text-gray-700 mb-2 font-bold text-[14px]"><strike className="text-slate-400 me-2">${parseInt(props.price) + 200}</strike> ${parseInt(props.price)}</p>
                        </Link>
                        <div className="ms-auto">
                            {
                                cartIcon ?
                                    <button className='bg-slate-700 text-white p-3 rounded-full' onClick={() => handleAddToCart()}><BsCartPlusFill size={16} /></button>
                                    :
                                    <button className='bg-pink-700 text-white p-3 rounded-full'><BsCheckCircleFill size={16} /></button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
