import React from 'react'
import Slider from 'react-slick'
import Badging from "../../../assets/images/slider-badging.jpg"
import Scale from "../../../assets/images/slider-scale.jpg"
import Badag from "../../../assets/images/slider-badag.jpg"
import Scales from "../../../assets/images/slider-scales.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.scss"

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings}>
      <div className='wrap'>
        <div className="cover">
          <img src={Badging} alt="" />
        </div>
      </div>

      <div className='wrap'>
        <div className="cover">
          <img src={Scale} alt="" />
        </div>
      </div>

      <div className='wrap'>
        <div className="cover">
          <img src={Badag} alt="" />
        </div>
      </div>

      <div className='wrap'>
        <div className="cover">
          <img src={Scales} alt="" />
        </div>
      </div>
    </Slider>
  )
}

export default ImageSlider