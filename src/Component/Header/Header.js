import React, { useContext, useEffect, useRef, useState } from 'react';

import { BsPerson, BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import ProductData from "../../Data/ProductData.json";
import { userContext } from '../../context/UserContext';
import MainSearchBar from '../Share/MainSearchBar/MainSearchBar';
import OnlyCategory from '../Share/OnlyCategory/OnlyCategory';
import Cart from './CartPage/Cart';
import "./Header.css";

function Header() {
    
    const {globalFunction } = useContext(userContext);
    const { totalItems, handleChange2 } =globalFunction;

    const [filterBrand, setFilterBrand] = useState("");
    let filterCategory = ProductData.filter(product => {
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
    }, []);

    return (
        <section className="site-header-main-container">
            <div className="site-header-main">
                <div className='site-header-main-1'>
                    <div className='logo-section'>
                        <div className='toggle-bar'>
                            <div className='bar'></div>
                            <div className='bar'></div>
                            <div className='bar'></div>
                        </div>
                        <Link to="/" className='text-decor-none' > <div className='logo' >Logo</div></Link>
                    </div>
                    <div className='site-header-main-1-1 position-relative' >
                        <div onClick={() => setShow(!show)} ref={menuRef} className='navbar-categories'>
                            <label className='all-categories' >All Categories</label>
                            <span className='down-arrow'><MdOutlineKeyboardArrowDown className='site-header-icon' /></span>


                        </div>
                        <div className='position-absolute mt-5'>
                            <OnlyCategory onShow={show} />
                        </div>
                        <div>
                            <div className='d-flex'>
                                <input
                                    onChange={(event) => {
                                        setFilterBrand(event.target.value)
                                    }}
                                    className='navbar-search'
                                    type="text"
                                    placeholder='Search Product' />

                                <span><BsSearch className='search-icon' /></span>
                            </div>
                            <MainSearchBar onProduct={filterCategory} onFieldClear={fieldClear} />
                        </div>
                    </div>
                </div>

                <div className='site-header-main-2'>
                    <ul>
                       <Link className='text-decor-none' to="/personalInformation"><li><BsPerson className='site-header-icon' /></li> </Link>
                        <li ><IoIosGitCompare className='site-header-icon' /></li>
                        <Link to="/cartPage"><li   ><HiOutlineShoppingBag className='site-header-icon cart' /> <span className='count'><p>{totalItems}</p></span></li></Link>

                    </ul>
                </div>
            </div>
            <div className='cart_tab'>
                <Cart />
            </div>
        </section>

    )
}

export default Header