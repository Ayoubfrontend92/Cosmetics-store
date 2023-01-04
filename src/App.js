import React from "react"
// import Header from "./components/header/Header"
import "./App.css"
import Hero from "./components/hero/Hero"
import Slider from "./components/slider/Slider"
import Virtual from "./components/virtual/Virtual"
import Products from "./components/products/Products"
import Testimonials from "./components/testimonials/Testimonials"
import Carousel from "./components/testimonials/Carousel"
import Footer from "./components/footer/Footer"
import Burger from "./components/header/Burger"





const App = () => {

  return (
    <>
     {/* <Header/> */}
     <Burger/>
     <Hero/>
     <Slider/>
     <Virtual/>
     <Products/>
     <Testimonials/>
     <Carousel/>
     <Footer/>

    </>

    
  )
}

export default App
