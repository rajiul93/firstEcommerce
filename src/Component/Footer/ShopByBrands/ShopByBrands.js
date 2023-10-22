import React from 'react';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { GrAppsRounded } from 'react-icons/gr';
import { RiPlantFill } from 'react-icons/ri';

import { FcWorkflow } from 'react-icons/fc';
import { ImGoogle3 } from 'react-icons/im';
import { RiGooglePlayLine } from 'react-icons/ri';

import "./ShopByBrands.css";

function ShopByBrands() {
  return (
    <section className='ShopByBrandsContainer mt-3'>
      <div className='span'></div>

      <div className='ShopByBrands' >
        <div><h6>Shop by Brands</h6></div>
        <div className='ShopByBrands_child'>
          <div>
            <RiPlantFill className='icon' />
            <GrAppsRounded className='icon' />
            <GiPlantsAndAnimals className='icon' />
          </div>
          <div>
            <ImGoogle3 className='icon' />
            <RiGooglePlayLine className='icon' />
            <FcWorkflow className='icon' />
          </div>
        </div>
       
      </div>
      <div className='span'></div>

    </section>
  )
}

export default ShopByBrands