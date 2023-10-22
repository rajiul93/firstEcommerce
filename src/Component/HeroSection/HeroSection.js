import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import "./HeroSection.css";


function HeroSection() {
    return (
        <section className='hero-section-container'>
            <div className='hero-section'>
                <div className='hero-section-1'>
                    <div className='shop-by-categories'><p>SHOP BY CATEGORIES <MdOutlineKeyboardArrowDown style={{ fontSize: "20px", marginLeft: ".7rem", color: "gray" }} /></p></div>
                    <div className='hero-section-1-2'>
                        <ul className='hero-section-1-2-ul'>
                            <Link className='text-decor-none' to="/secondNav"><li>Demos <MdOutlineKeyboardArrowDown className='hero-section-icon' /></li></Link>
                            <li>Features <MdOutlineKeyboardArrowDown className='hero-section-icon' /></li>
                            <li>Shop <MdOutlineKeyboardArrowDown className='hero-section-icon' /></li>
                            <li>Pages <MdOutlineKeyboardArrowDown className='hero-section-icon' /></li>
                            <li>Blocks <MdOutlineKeyboardArrowDown className='hero-section-icon' /></li>
                        </ul>
                    </div>
                </div>
                <div className='hero-section-2'>
                    <p>More Links <MdOutlineKeyboardArrowDown className='hero-section-icon' /></p>
                    <Link className='text-decor-none' to="/login">  <p>Login & Sign up</p></Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection