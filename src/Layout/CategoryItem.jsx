import React, { useEffect, useState } from 'react';
// React Router DOM
import { Link } from 'react-router-dom';

// Icons
import { BsCartPlusFill, BsCheckCircleFill } from "react-icons/bs";

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/Slices/cartSlice';

export default function CategoryItem(props) {
    const [cartIcon, setCartIcon] = useState(true);


    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(props.product));
        setCartIcon(false);
    }


    // Check For Product Already In Cart ===================================
    const cart = useSelector((state) => state.cartSlice.cartArray);
    const isProductInCart = cart.some((item) => item.id === props.id);
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
            <div className={`bg-white  border-[3px] ${cartIcon ? 'shadow-sm' : 'border-pink-700'} border-[3px]  ${cartIcon ? "hover:border-slate-700" : ""}  rounded-xl `}>
                <Link to={`/product/${props.id}`} className="flex items-center justify-center p-10">
                    <img src={props.image} alt="Image" className="max-w-full h-[180px]" />
                </Link>
                <div className="p-4 text-start flex flex-nowrap items-center ">
                    <Link to={`/product/${props.id}`} className="">
                        <h2 className="text-md capitalize font-bold text-gray-800 mb-2 tracking-[0.6px]">{props.title.slice(0, 15)}</h2>
                        <p className="text-gray-700 mb-2 font-bold text-[14px]"><strike className="text-slate-500">${props.price + 200}</strike><span className='ms-3' >${props.price}</span></p>
                    </Link>
                    <div className="ms-auto">
                        {
                            cartIcon ?
                                (<button className='bg-slate-700 text-white p-3 rounded-full' onClick={() => handleAddToCart()}><BsCartPlusFill size={16} /></button>)
                                :
                                (<button className='bg-pink-700 text-white p-3 rounded-full'><BsCheckCircleFill size={16} /></button>)

                        }
                    </div>
                </div>
            </div>
        </>
    )
}
