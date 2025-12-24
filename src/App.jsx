import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import PopularCategories from './components/PopularCategories'
import SplDishes from './components/SplDishes'
import Testimonials from './components/Testimonials'
import OurServices from './components/OurServices'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <PopularCategories/>
      <SplDishes/>
      <Testimonials/>
      <OurServices/>
      <Footer/>
    </div>
  )
}

export default App