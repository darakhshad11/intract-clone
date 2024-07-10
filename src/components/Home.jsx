import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import SliderComponent from './SliderComponent'
import CardSlider from './CardSlider'


const Home = () => {
  return (
   <>
   <Navbar/>
    <SliderComponent/>
    
    <CardSlider/>
   <Footer/>
   </>
  )
}

export default Home