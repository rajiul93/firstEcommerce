import React, { useContext } from "react";

import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


import { userContext } from "../../../context/UserContext";
import ProductData from "../../../Data/ProductData.json";
import "./TodaysOffer.css";




function TodaysOffer() {
    const { globalFunction } = useContext(userContext);

    const { addToCart } = globalFunction;

    const computer = ProductData.filter(pd => pd.categorys === "laptop")
    return (
        <section className="Todays_Offer_tile mt-5">
            <h1>Today's Offer</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    660: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper_111"
            >
                {
                    computer.map((pd, index) => {
                        const { price, img, name } = pd
                        return <SwiperSlide className="mySwiper_112" key={index}>
                            <div className="TodaysOffer-tv_1">
                                <img src={img} alt="" />
                                <div className="product_button">
                                    <button className="button" onClick={() => addToCart(pd)}>Add to cart</button>
                                </div>
                                <h6>{name}</h6>
                                <p>${price}</p>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>

        </section>
    )
}

export default TodaysOffer