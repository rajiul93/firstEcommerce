import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Sidebar.css";

function Sidebar({ onBrandControl }) {

    const [filterBrand, setFilterBrand] = useState("");

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000)


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

    let filterCategory = category.filter((categ) => {
        if (filterBrand === "") {
            return categ;
        } else if (categ.category.toLowerCase().includes(filterBrand.toLowerCase())) {
            return categ
        }
    })
    
    const priceFiltering = () => {
        onBrandControl(minPrice, maxPrice);

    }

    return (
        <section className='sidebar '>
            <h2 className='fs-5 mt-5'>Category</h2>

            <div className='sidebar    p-2 ' >
                {
                    category.map((cate, ind) => {
                        const { id, category, title } = cate;
                        return <div key={ind} className="">
                            <NavLink
                                style={({ isActive }) => {
                                    return { color: isActive ? "red" : "" }
                                }}
                                className='text-decor-none' to={`/shop/${category}`}>
                                <p className='m-0 '>{title}</p></NavLink>
                        </div>
                    })
                }

            </div>
            <hr />

            <div>
                <div>
                    <h2 className="fs-5"> Filter By Brand</h2>
                    <div className='d-flex'>
                        <input
                            className='me-2 border border-0 bg-dark-subtle rounded-1 input_focus'
                            type="text"
                            onChange={(event) => {
                                setFilterBrand(event.target.value)
                            }}
                            placeholder='Find a Brand'
                        />


                    </div>
                    <div>

                        {

                            filterCategory.map(pd => {
                                return <Link key={pd.id} className='text-decor-none' to={`/shop/${pd.category}`}> <p className='m-0'>{pd.title.toUpperCase()}</p></Link>
                            })
                        }
                    </div>

                </div>

            </div>
            <hr />
            <div className='p-2'>
                <h2 className='fs-5'>Price Filter</h2>
                <div className='d-flex justify-content-between mb-3'>
                    <div className='d-flex flex-column  '>
                        <label htmlFor="" className='mb-1'>Min-Price</label>
                        <input className='priceFilterInput' onChange={(e) => setMinPrice(e.target.value)} type="number" placeholder='0' />
                    </div>
                    <div className='d-flex flex-column '>
                        <label htmlFor="" className='mb-1'>Max-Price</label>
                        <input className='priceFilterInput' onChange={(e) => setMaxPrice(e.target.value)} type="number" placeholder='10000' />
                    </div>
                </div>
                <div className="d-grid">
                    <button className='btn btn-dark mb-5 ' type="button" onClick={priceFiltering}>Filter</button>
                </div>
            </div>

        </section>
    )
}

export default Sidebar;

