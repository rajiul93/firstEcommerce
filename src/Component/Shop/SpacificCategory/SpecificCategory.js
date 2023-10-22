import React, { useContext } from 'react';
import { userContext } from '../../../context/UserContext';

// Import Swiper React components
import { Link } from 'react-router-dom';
import ProductData from "../../../Data/ProductData.json";
import "./SpecificCategory.css";


function SpecificCategory({ onCategory, onMin, onMax }) {

  const { globalFunction } = useContext(userContext);
  const { addToCart } = globalFunction;

  let specificPdCategory = ProductData.filter((pd) => {
    if (pd.categorys === onCategory) {
      return pd
    }
  })
  const priceFilter = specificPdCategory.filter(pd => parseInt(pd.price) >= onMin && parseInt(pd.price) <= onMax);

  let title = specificPdCategory[0].categorys;
  return (
    <div className='SpecificCategory-pd-main'>
      <h1 className='m-0 mt-5 fs-5'>{title.toUpperCase()}</h1>
      <p className='m-0 mb-3'>Showing all {specificPdCategory.length} result</p>
      <div className="SpecificCategory">
        {
          priceFilter.map((data, ind) => {
            const { brand, categorys, img, name, price, id } = data
            return <div key={ind} className='border border-dark text-center  SpecificCategory-pd    p-3 mb-2'>
              <img src={img} className="card-img-top" alt="" />

              <div className='d-flex justify-content-center gap-2'>
                <p className='m-0 text-start'>{categorys}</p>
                <p className='m-0 text-start'>{brand}</p>
              </div>

              <Link className='text-decor-none' to={`/productDetails/${id}`}><h6 className='m-0 text-start'>{name}</h6> </Link>
              <p className='m-0 text-start'>Price: ${price}</p>
              <div className="button d-flex gap-2 mt-3">
                <button className='btn btn-dark button-font' onClick={() => addToCart(data)}>Add to cart</button>
                <button className='btn btn-dark button-font'> Buy Now</button>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default SpecificCategory