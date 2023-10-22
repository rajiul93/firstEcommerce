import React from 'react'
import Copyright from '../Footer/Copyright/Copyright'
import "./Footer.css"
import ShopByBrands from './ShopByBrands/ShopByBrands'
import FooterLink from './SubscribeNewsletter/FooterLink/FooterLink'
import SubscribeNewsletter from './SubscribeNewsletter/SubscribeNewsletter'
function Footer() {
  // console.log(ProductData)

  return (
    <div className='footer' >
              <SubscribeNewsletter />
              <FooterLink />
              <ShopByBrands />
              <Copyright />
              <br />
    </div>
  )
}

export default Footer