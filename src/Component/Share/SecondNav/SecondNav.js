import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../context/UserContext';
import MainSearchBar from '../MainSearchBar/MainSearchBar';
import OnlyCategory from '../OnlyCategory/OnlyCategory';
import "./secondNav.css";

import ProductData from "../../../Data/ProductData.json";

function SecondNav() {
    const { globalFunction } = useContext(userContext);
    const { totalItems, handleChange2 } = globalFunction;

    const [filterBrand, setFilterBrand] = useState("");
    let filterCategory = ProductData.filter((product) => {
        if (filterBrand === "") {
            return "";
        } else if (product.name.toLowerCase().includes(filterBrand.toLowerCase())) {
            return product;
        }
    })
    const fieldClear = () => {
        setFilterBrand("");
    }


    const [show, setShow] = useState(false)
    let menuRef = useRef()

    useEffect(() => {
        const closeThis = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.body.addEventListener("mousedown", closeThis)
    }, [show]);

    return (
        <>
            <section className='second_navbar_main' >
                <div className='second_navbar'>
                    <div className='d-flex justify-content-between   second_navbar_1 '>
                        <div className='d-flex gap-3 align-items-center'>
                            <Link to="/" className='text-decor-none'>
                                <h4 className='second_navbar_logo m-0 '>LOGO</h4>
                            </Link>
                            <div className='d-flex flex-column'>
                                <span ><h4 className='fs-5 font-weight-bold m-0'>Shop by</h4></span>
                                <span className='fs-6 m-0'>Categories</span>
                            </div>
                        </div>
                        <div className='d-flex gap-3 mt-2'>
                        <Link to="/login" className='text-decor-none'>
                            <i className="bi bi-heart fs-4"></i>
                        </Link>
                         <Link to="/cartPage">   <span  >
                                <i className="bi bi-bag fs-4"></i>
                                <h6 className='second_navbar_quantity' >{totalItems}</h6>
                            </span></Link>
                        </div>
                    </div>


                    <div className='d-flex justify-content-center second_nav_search'>
                        <div className='d-flex justify-content-between mx-3 p-1 bg-white rounded second_navbar_2'>
                            <div className='second_navbar_2_2 position-relative'>

                                <div
                                    className='d-flex gap-3' id='onlyCategory'
                                    ref={menuRef}
                                >
                                    <div onClick={() => setShow(!show)} role='button'>All Categories</div>
                                    <div  ><i className="bi bi-download second_navbar_down_arrow_icon "></i></div>
                                </div>
                                <div className='position-absolute mt-5'>
                                    <OnlyCategory onShow={show} />
                                </div>
                            </div>
                            <div className='d-flex gap-3 second_navbar_2_3'>
                                <div>
                                    <input
                                        onChange={(event) => {
                                            setFilterBrand(event.target.value)
                                        }}
                                        className='second_navbar_2_input'
                                        type="text"
                                    />
                                    <div>
                                        <MainSearchBar onProduct={filterCategory} onFieldClear={fieldClear} />
                                    </div>
                                </div>
                                <div><i className="bi bi-search fs-5 bg-light rounded p-1"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>


        </>
    )
}

export default SecondNav
