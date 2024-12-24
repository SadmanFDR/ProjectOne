import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './SilkSlider.css'


const SilkSlider = () => {
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

    <div className="slider_main">
      <div className="container">
         <div className="slider_text">
            <h2>How to help</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, tellus nec in felis, sapien. Porttitor consequat gravida ut aliquet commodo sed faucibus mattis non.</p>
         </div>
      </div>
    </div>
    
{/* <div className="container"> */}

    <Slider {...settings} className='Slid_card'>
        <div>
          <img src="Img/Slider1.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/Slider2.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/Slider3.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/Slider4.png" alt="Slid" />
        </div>
        <div>
          <img src="Img/Slider1.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/Slider2.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/Slider3.png" alt="Slid" />
        </div>
        <div>
        <img src="Img/Slider4.png" alt="Slid" />
        </div>
      </Slider>

{/* </div> */}


    
    </>
  )
}

export default SilkSlider