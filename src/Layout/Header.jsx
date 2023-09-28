import React from 'react'

// COmponents
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import BodyPage from './Components/BodyPage'
import Banner from './Components/Banner'
import ProductList from './ProductList'
import Footer from './Components/Footer'
import Ads from './Components/Ads'
import ContactForm from './Components/ContactForm'

export default function HomePage() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        {/* <BodyPage /> */}
        {/* <Services /> */}


        <Banner />


        <ProductList />
        <Ads />
        <ContactForm />
        
        <Footer />
      </div>
    </>
  )
}
