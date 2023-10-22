import React, { useContext } from "react";
import "swiper/css";
import "swiper/css/pagination";

import { AiOutlineEye } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { userContext } from "../../../context/UserContext";
import "./Slider_2.css";

export default function Slider2({ homePageProducts }) {

const {globalFunction} = useContext(userContext);
const {addToCart} = globalFunction;


  return (
    <div className="slide_2 ">
      {
        homePageProducts.map((pd, index) => {
          const { categorys, departments, img, name, price, id } = pd;
          return <div key={index}>
            <div className="product">
              <img src={img} className="" alt="..." />
              <p>{departments} & {categorys}</p>
              <Link className="text-decor-none" to={`/productDetails/${id}`}><h2 >{name}</h2></Link>
              <p>Price: ${price}</p>
              <div className="quickview">
                <AiOutlineEye />
              </div>
              <div className="button">
                <button onClick={()=>addToCart(pd)}   >Add to cart</button>
              </div>
            </div>
          </div>
        })
      }
    </div>
  );
}
