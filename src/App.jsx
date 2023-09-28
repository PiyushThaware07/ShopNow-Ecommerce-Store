import React from 'react';
// Import CSS
import './App.css';

// React Router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Cart from './Layout/Cart';
import ProductDetail from './Layout/ProductDetail';
import CategoryList from './Layout/CategoryList';
import PageNotFound from './Layout/Components/PageNotFound';
import Search from './Layout/Search';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:id" element={<CategoryList />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/checkout" element={<h1>CheckOut Successful</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
