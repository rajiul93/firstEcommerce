import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay } from "swiper";

import "./WeekOfferSlide.css";
function WeekOfferSlide() {
    return (
        <div className="weekOfferContainer mb-5">

            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={10}
               
                breakpoints={{
                    660: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1224: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay]}
                className="weekOfferSlider1"
            >
                <SwiperSlide className="weekOfferSlider11">
                    <div className="weekOfferSlider112"> <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-495-432x432.png" alt="" /></div>
                    <div>
                        <p>Home Decor</p>
                        <h6>Relax-A-Lounger Reynolds Faux Suede Recliner, Espresso</h6>
                        <p>$46.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="weekOfferSlider11">
                    <div className="weekOfferSlider112"> <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2021/10/product-thumnail-82-700x875.png" alt="" /></div>
                    <div>
                        <p>Home Decor</p>
                        <h6>Relax-A-Lounger Reynolds Faux Suede Recliner, Espresso</h6>
                        <p>$46.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="weekOfferSlider11">
                    <div className="weekOfferSlider112"> <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-493.png" alt="" /></div>
                    <div>
                        <p>Home Decor</p>
                        <h6>Relax-A-Lounger Reynolds Faux Suede Recliner, Espresso</h6>
                        <p>$46.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="weekOfferSlider11">
                    <div className="weekOfferSlider112"> <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2021/10/product-thumnail-82-700x875.png" alt="" /></div>
                    <div>
                        <p>Home Decor</p>
                        <h6>Relax-A-Lounger Reynolds Faux Suede Recliner, Espresso</h6>
                        <p>$46.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="weekOfferSlider11">
                    <div className="weekOfferSlider112"> <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-493.png" alt="" /></div>
                    <div>
                        <p>Home Decor</p>
                        <h6>Relax-A-Lounger Reynolds Faux Suede Recliner, Espresso</h6>
                        <p>$46.99</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="weekOfferSlider11">
                    <div className="weekOfferSlider112"> <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-495-432x432.png" alt="" /></div>
                    <div>
                        <p>Home Decor</p>
                        <h6>Relax-A-Lounger Reynolds Faux Suede Recliner, Espresso</h6>
                        <p>$46.99</p>
                    </div>
                </SwiperSlide>
       
            </Swiper>
        </div>
    )
}

export default WeekOfferSlide