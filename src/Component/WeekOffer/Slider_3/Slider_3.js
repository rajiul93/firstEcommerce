import React, { useContext, useRef } from 'react';
import ProductData from "../../../Data/ProductData.json";
import "./Slider_3.css";


import { Link } from 'react-router-dom';
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { userContext } from '../../../context/UserContext';


function Slider3() {
    const { globalFunction} = useContext(userContext);
    const { addToCart} = globalFunction;


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 3000)}s`;
    };
    const laptop = ProductData.filter(pd => pd.categorys === "laptop")
    return (
        <section className='slider3'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}

                navigation={true}
                modules={[Navigation, Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className=" slider31"
            >
                {
                    laptop.map(pd => {
                        return <SwiperSlide key={pd.id} className='slider313'>
                            <div className="slider3131">
                                <img src={pd.img} alt="" />
                                <div className="slider31313">
                                    <button onClick={()=>addToCart(pd)} className="button">Add to cart</button>
                                </div>
                                <Link className='text-decor-none' to={`/productDetails/${pd.id}`}> <h6 className="py-2" >{pd.name}</h6></Link>
                                <p>${pd.price}</p>
                            </div>
                        </SwiperSlide>
                    })
                }

            </Swiper>
        </section>
    )
}

export default Slider3