import React from 'react'
import { Link } from 'react-router-dom'
import "./MainSearchBar.css"
function MainSearchBar({ onProduct,onFieldClear }) {
    const handleClick =(name)=>{
        onFieldClear(name)
    }
    return (
        <section className='MainSearchBar_section'>
            <div className='MainSearchBar'>
                {
                    onProduct.map(pd => {
                        return <div key={pd.id} className='d-flex gap-1 border-bottom'>
                            <img src={pd.img} width={40} alt="" />
                            <Link className='text-decor-none' onClick={()=>handleClick(pd.name)} to={`/productDetails/${pd.id}`}>
                            <span>{pd.name}</span>
                            </Link>
                        </div>
                    })
                }
            </div>
        </section>
    )
}

export default MainSearchBar