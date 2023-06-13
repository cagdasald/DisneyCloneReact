import React from 'react'
import "./Home.scss"
import ImageSlider from './Slider/ImageSlider'

const Home = () => {
  return (
    <div className='page' id='home-page'>
      <ImageSlider/>
    </div>
  )
}

export default Home