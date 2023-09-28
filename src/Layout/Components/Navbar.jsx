import React, { useState } from 'react';

// Icons
import { CiShoppingBasket } from "react-icons/ci";
import { GoSearch } from "react-icons/go";
import { PiUserCircleLight } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";
import { FaLinode } from "react-icons/fa";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";


// React Router DOM
import { Link, useNavigate } from 'react-router-dom';


// Auth0
import { useAuth0 } from "@auth0/auth0-react";


export default function Navbar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();



  // ========================================
  const [toggleSearch, setToggleSearch] = useState(false);

  function handleToggleSearch() {
    setToggleSearch((value) => !value);
  }


  // Handle Input
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue) {
      navigate(`/search/${inputValue}`);
    }
    else {
      navigate('/search/Not Found');
    }
  }

  return (
    <>
      <div className="navbar-main h-[80px] flex items-center px-6 sm:px-16 border-b-[1px] border-slate-300">
        <Link to='/'>
          <div className="navbar-logo flex items-center flex-nowrap text-[20px]" style={{ fontFamily: "'Pacifico', cursive" }}>
            <FaLinode size={30} /> Shopnow
          </div>
        </Link>
        <div className="ms-auto">
          <ul className='flex flex-nowrap items-center gap-8'>
            {/* Desktop Search Box */}
            <li className='hidden md:flex flex-nowrap'>
              <form onSubmit={handleSubmit} className='flex'>
                <input
                  type="text"
                  placeholder='Search Product'
                  value={inputValue}
                  className='ps-7 py-[9px] border-2 border-slate-300 rounded-l-full focus:outline-none'
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type='submit' className='py-3 rounded-r-full px-4 bg-slate-300'>
                  <GoSearch size={22} />
                </button>
              </form>
            </li>

            {/* Responsive Search Box */}
            <li className='flex md:hidden'>
              <button type='button' onClick={() => handleToggleSearch()}>
                <GoSearch size={22} />
              </button>
              <div className={`absolute top-0 left-0 w-full px-6 h-[80px] ${toggleSearch ? '' : 'hidden'}`}>
                <div className="bg-white h-full w-full flex items-center justify-between">
                  <button type="button" className="p-3 rounded-full bg-slate-200" onClick={() => handleToggleSearch()}>
                    <MdKeyboardDoubleArrowLeft size={22} />
                  </button>
                  <form onSubmit={handleSubmit} className='flex items-center w-full ms-2'>
                    <input
                      type="text"
                      placeholder="Search Product"
                      className="flex-1 ps-6 py-[9px] border-2 border-slate-200 focus:outline-none rounded-l-full capitalize"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit" className="py-3 px-4 rounded-r-full bg-slate-200">
                      <GoSearch size={22} />
                    </button>
                  </form>
                </div>
              </div>
            </li>
            <li><Link to="/cart"><CiShoppingBasket size={30} /></Link></li>
            {
              isAuthenticated ?
                (<li><button className='mt-[6px]' type="button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><IoIosLogOut size={25} /></button></li>)
                :
                (<li><button className='mt-[6px]' type="button" onClick={() => loginWithRedirect()}><PiUserCircleLight size={30} /></button></li>)
            }
          </ul>
        </div>
      </div>
    </>
  );
}
