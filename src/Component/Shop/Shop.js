import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Footer from "../../Component/Footer/Footer";
import SecondNav from '../Share/SecondNav/SecondNav';
import "./Shop.css";
import Sidebar from './Sidebar/Sidebar';
import SpecificCategory from './SpacificCategory/SpecificCategory';



function Shop() {

  const { category } = useParams();


  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000)

  let brandControl = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  }




  return (

    <>
      <SecondNav />
      <section className='shope_container '>

        <div className="category_container_1 ">
          <Sidebar onBrandControl={brandControl} />
        </div>

        <div className="category_container_2">
          <SpecificCategory onCategory={category} onBrandControl={brandControl} onMin={minPrice} onMax={maxPrice} />
        </div>




      </section >
      <Footer />

    </>
  )
}

export default Shop