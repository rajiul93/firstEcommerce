import React from 'react'
import { Link } from 'react-router-dom'
import "./OnlyCategory.css"



function OnlyCategory({onShow}) {

  const category = [
    { id: 1, category: "Food", title: 'Food' },
    { id: 2, category: 'chairs', title: 'Chairs' },
    { id: 3, category: 'shirt', title: 'Shirt' },
    { id: 4, category: 'Earrings', title: 'Earrings' },
    { id: 5, category: 'camera', title: 'Camera' },
    { id: 6, category: 'laptop', title: 'Laptop' },
    { id: 7, category: 'shoes', title: 'Shoes' },
    { id: 8, category: 'sofa', title: 'Sofa' },
    { id: 9, category: 'handbag', title: 'Handbag' },

  ]
  return (
    <div className={onShow? "OnlyCategory":"OnlyCategory_opacity"} >
      {
        category.map(pd => {
          return <div className='list-group-flush' key={pd.id}>
            <li role='button' className='list-group-item border-bottom mb-1'>
              <Link className='text-decor-none' to={`/shop/${pd.category}`}>
              
              {pd.category}
              </Link>
            </li>
          </div>
        })
      }
    </div>
  )
}

export default OnlyCategory