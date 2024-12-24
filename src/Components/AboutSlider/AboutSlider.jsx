import React from 'react'
import './AboutSlider.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AboutSlider = () => {
   const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
  return (
    <>
    <div className="fot_top mt-10 lg:mt-[100px">
      
    <div className="container">

        <div className="slider-container">
      <Slider {...settings} className='Slid_card'>
        <div>
          <img src="Img/carb1.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/carb2.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/carb3.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/carb4.png" alt="Slid" />
        </div>
        <div>
          <img src="Img/carb5.png" alt="Slid" />
        </div>
        <div>
          <img src="Img/carb1.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/carb2.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/carb3.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/carb4.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/carb5.png" alt="Slid" />
        </div>
      </Slider>
    </div>
    </div>
    
 
    
    </div>
    </>
  )
}

export default AboutSlider