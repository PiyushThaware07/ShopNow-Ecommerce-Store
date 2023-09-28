import React from 'react';
// Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
// Icons
import { RiArrowLeftFill } from "react-icons/ri";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";
import { CiCircleRemove } from "react-icons/ci";
import { PiShoppingCartDuotone } from "react-icons/pi";
// React Router Dom
import { Link, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementCartQuantity, decrementCartQuantity, clearCart } from '../Redux/Slices/cartSlice';
// Auth0
import { useAuth0 } from "@auth0/auth0-react";

export default function CartPage() {
  const { cartArray, totalPrice, totalQuantity } = useSelector((state) => state.cartSlice);
  console.log("=======", cartArray);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();
  function handleCheckOut() {
    if (isAuthenticated) {
      navigate('/checkout');
    }
    else {
      alert("Please Login To You Account...")
      navigate('/failed')
    }
  }
  return (
    <>
      <Navbar />

      <div className="cart-main" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="row flex flex-wrap justify-center">
          <div className="col w-full md:w-3/5 h-auto  p-8 md:p-16">
            <div className="card rounded-full">
              <div className="flex flex-nowrap items-center">
                <Link to="/" className='flex flex-nowrap items-center gap-2 text-xl text-slate-800 font-semibold capitalize' style={{ fontFamily: "'Pacifico', cursive" }}><RiArrowLeftFill /> Continue Shopping</Link>
                <button className='ms-auto btn bg-gray-600 text-[9px] px-3 py-2 font-semibold text-white uppercase' onClick={() => dispatch(clearCart())}>Clear Cart</button>
              </div>
              <hr className='my-2' />
              <div className="">
                {
                  cartArray.length > 0 ? (
                    <>
                      <h1 className='tracking-[0px] text-sm font-semibold capitalize'>Shopping Cart</h1>
                      <h1 className='tracking-[0px] text-sm font-semibold capitalize'>You have {cartArray.length > 0 ? cartArray.length : 0} items in your cart</h1>
                    </>
                  ) : ''
                }
              </div>


              {
                cartArray.length !== 0 ? (
                  cartArray.map((product) => {
                    return (
                      <div className="w-full h-auto mt-3 sm:p-0" key={product.id}>
                        <div className=" border rounded-lg p-2 sm:p-5">
                          <div className="grid grid-cols-5 gap-4 items-center">
                            <div className="col-span-1 ms-2 sm:ms-0">
                              <img src={product.image} alt="Product Image" className="w-full h-auto" />
                            </div>
                            <div className="col-span-2">
                              <h3 className="text-[11px] sm:text-lg font-semibold" style={{ wordWrap: "none" }}>{product.title}</h3>
                              <p className="text-[10px] text-gray-600">{product.category}</p>
                            </div>
                            <div className="col-span-2 flex flex-row sm:flex-col items-center">
                              <div className="flex items-center space-x-2">
                                <button className={`text-slate-700 rounded-full`} onClick={() => dispatch(decrementCartQuantity(product))} disabled={product.quantity === 1} >
                                  <FaCircleMinus size={25} />
                                </button>
                                <h1 className="font-semibold text-xl">{product.quantity}</h1>
                                <button className="text-slate-700 rounded-full" onClick={() => dispatch(incrementCartQuantity(product))}>
                                  <FaCirclePlus size={25} />
                                </button>
                              </div>
                              <button className="mt-0 sm:mt-6 text-red-500 hover:text-red-700 hidden sm:inline" onClick={() => dispatch(removeFromCart(product))}>Remove</button>
                              <button className="mt-0 sm:mt-6 text-red-500 hover:text-red-700 ms-auto inline sm:hidden"><CiCircleRemove size={30} /></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div className='h-[300px] w-full bg-slate-100 flex flex-nowrap items-center justify-center'>
                    <div className="">
                      <PiShoppingCartDuotone size={80} className='mx-auto' />
                      <small className='tracking-[0px] text-sm font-semibold capitalize'>Your Cart is currently empty</small>
                    </div>
                  </div>
                )
              }



            </div>

          </div>
          <div className="col w-full md:w-2/5 h-auto p-8">
            <div className="rounded-xl bg-slate-700 h-auto w-full p-8 text-white">
              <h1 className='flex flex-nowrap items-center gap-2 text-xl capitalize' style={{ fontFamily: "'Pacifico', cursive" }}>Summary</h1>
              <small className='text-[12px]'>Digital products are non-refundable once downloaded or accessed
              </small>
              <hr className='my-2' />

              <div className="flex flex-nowrap items-center justify-between px-5 mt-8 mb-6 font-semibold">
                <h1 className=''>Total Quantity</h1>
                <h1 className=''>{totalQuantity}</h1>
              </div>
              <div className="flex flex-nowrap items-center justify-between px-5 font-semibold mb-6">
                <h1 className=''>Total Price</h1>
                <h1 className=''>${totalPrice}</h1>
              </div>

              <button className='bg-gray-900 px-5 py-3 w-full mb-3 uppercase text-[12px] font-semibold flex flex-nowrap items-center justify-center gap-1' onClick={() => handleCheckOut()}>
                Check Out <RiSecurePaymentFill size={20} />
              </button>
              <hr />
              <small className='text-[12px]'>
                Note :  The price and availability of items at ShopNow.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
              </small>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
