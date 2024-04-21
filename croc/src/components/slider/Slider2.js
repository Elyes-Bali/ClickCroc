import React from 'react';
import "./Slider2.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Slider2 = () => {
    var settings = {
        dots: true,
        infinite: false,
       
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
 <h2 className='mb-4 ml-4 status'> MORE FROM DREAM STORIES </h2>
        <Slider {...settings}>
          <div>
            <Link to="/" className='link'>
            <img src='/images/dr1.png'/></Link>
          </div>
          <div>
          <img src='/images/dr2.png'/>
          </div>
          <div>
          <img src='/images/dr3.png'/>
          </div>
          <div>
          <img src='/images/dr1.png'/>
          </div>
          <div>
          <img src='/images/dr2.png'/>
          </div>
          <div>
          <img src='/images/dr3.png'/>
          </div>
          <div>
          <img src='/images/dr1.png'/>
          </div>
          <div>
          <img src='/images/dr2.png'/>
          </div>
        </Slider>
    </div>
  )
}

export default Slider2