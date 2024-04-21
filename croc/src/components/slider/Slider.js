import React from 'react';
import "./Slider.css";
import Slider from "react-slick";
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };


  return (
    <div>
 <div className='container sld'>
     <h1 className='mb-4 wlc'>--Importance of vaccination-- </h1>
        <Slider {...settings}>
          <div>
          <img className='ggg' src="/images/ab.jpg" />
        
         
          </div>
       
          <div>
          <img className='ggg' src="/images/bb.jpg" />
          
          </div>
          <div>
          <img className='ggg' src="/images/get.jpg" />
          
          </div>
          <div>
          <img className='ggg' src="/images/vacc.jpg" />
         
          </div>
         
        </Slider>
      </div>
    </div>
  )
}

export default Sliders