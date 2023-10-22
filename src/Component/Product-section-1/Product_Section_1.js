import React, { useState } from 'react';
import { BsHandbag } from 'react-icons/bs';
import { GiDuffelBag, GiSandal, GiSchoolBag } from 'react-icons/gi';
import { RiWalletLine } from 'react-icons/ri';
import Slider2 from '../SliderSection/Slider2/Slider_2';



import ProductData from "../../Data/ProductData.json";
import "./Product_Section_1.css";
import TodaysOffer from './TodaysOffer/TodaysOffer';

function ProductSection1() {
  const [products, setProducts] = useState("Jewels")
  const homePageProducts = ProductData.filter((pd) => pd.departments === products)


  return (
    <div className="main">
      <div className='Product_Section_1'>
        <div className='Product_Section_1_1'>
          <TodaysOffer />
        </div>


        <div className='Product_Section_1_1_0'>
          <div className='Product_Section_1_2' >
            <div className='Product_Section_1_2_1'>
              <span onClick={() => setProducts("Jewels")}> <GiSchoolBag className='icon' /> <p>Jewels</p></span>
              <span onClick={() => setProducts("Handbags_Wallets")}><RiWalletLine className='icon' /> <p>Wallets</p></span>
              <span onClick={() => setProducts("Handbags_Wallets")}><BsHandbag className='icon' /><p>Handbags</p></span>
              <span onClick={() => setProducts("shoes_sandals")}><GiSandal className='icon' /><p>Sandals</p></span>
              <span onClick={() => setProducts("Handbags_Wallets")}><GiDuffelBag className='icon' /><p>Totte Bags</p></span>
            </div>
            <hr className='hr_1' style={{ zIndex: "1000", backgroundColor: "red" }} />
            <Slider2 homePageProducts={homePageProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection1