import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import PopularCategories from './components/PopularCategories'
import SplDishes from './components/SplDishes'

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <PopularCategories/>
      <SplDishes/>
    </div>
  )
}

export default App