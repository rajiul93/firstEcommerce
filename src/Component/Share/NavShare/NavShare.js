import React from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { FiShoppingBag } from 'react-icons/fi'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { RiLuggageCartLine } from 'react-icons/ri'
import "./NavShare.css"

function NavShare() {
    return (
      <section className='NavShareContainer'>
          <div className='NavShare' >
            <div>
                <RiLuggageCartLine className='icon' />
                <p>SHOP</p>
            </div>
            <div>
                <BiCategoryAlt className='icon' />
                <p>CATEGORIES</p>
            </div>
            <div>
                <FiShoppingBag className='icon' />
                <p>CART</p>
            </div>
            <div>
                <MdOutlineManageAccounts className='icon' />
                <p>MY ACCOUNT</p>
            </div>
        </div>
      </section>
    )
}

export default NavShare