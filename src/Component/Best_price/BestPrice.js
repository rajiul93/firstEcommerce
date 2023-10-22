import React from 'react'
import "./Best-Price.css"

function BestPrice() {
  return (
    <section className='bestPrice'>

      <div className='bestPrice-1'>
        <h5>
          Items from top categories with best price.</h5>
        <button>View all categories</button>
      </div>
      <div className="bestPrice-2">
        <div className="bestPrice-2-1">
          <div className='bestPrice_child'>
            <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-categories-7.png" alt="" />
            <p>Mobile & Tablets</p>
          </div>
          <div className='bestPrice_child'>
            <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-categories-9.png" alt="" />
            <p>Laptop & PCs</p>
          </div>
        </div>

        <div className="bestPrice-2-1">
          <div className='bestPrice_child'>
            <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-categories-6.png" alt="" />
            <p>Watches</p>
          </div>
          <div className='bestPrice_child'>
            <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-categories-10.png" alt="" />
            <p>Handsets & Buds</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestPrice