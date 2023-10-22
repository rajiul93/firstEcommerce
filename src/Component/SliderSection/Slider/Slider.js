import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Navigation } from "swiper";
function Slider() {



    
  
  return (
    <div>
 <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="slider1"
      >
        <SwiperSlide className="slider1-child slider1-child-1 ">
          <h6>Starts at $249</h6>
          <h3>All Kind of Living Room Sofas & Chairs.</h3>
          <p>Durable furnitures with fine quality and perfect finishing.</p>
          <button>Buy Now</button>
        </SwiperSlide>
        <SwiperSlide className="slider1-child slider1-child-2">
        <h6>Starts at $249</h6>
          <h3>All Kind of Living Room Sofas & Chairs.</h3>
          <p>Durable furnitures with fine quality and perfect finishing.</p>
          <button>Buy Now</button>
        </SwiperSlide>
      </Swiper>

    </div>
  )
    
}

export default Slider

