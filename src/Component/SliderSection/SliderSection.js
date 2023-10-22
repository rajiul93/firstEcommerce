import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import categories from "../../Data/categories.json";
import Slider from './Slider/Slider';
import "./SliderSection.css";



function SliderSection() {
    return (
        <section className='front-dex'>
            <div>
                <div className='slider-section-front '>
                    <div className='slider-section-1'>
                        <ul>
                            <li>BEST DEALS</li>
                            <li>Top Selling brand</li>
                            <li>We Recommend</li>
                            <hr style={{ margin: "1rem 0px", color: "rgb(186, 186, 186)" }} />
                            <div className='departments'>
                                <h4>Departments</h4>
                                <p>View all</p>
                            </div>
                            {
                                categories.map((department, index) => {
                                    const { icon, categoryName  } = department;
                                    return <div key={index}>
                                        <Link className='text-decor-none' to={`/shop/${categoryName}`}>
                                            <li> <img src={icon} alt="" /> {categoryName}  <MdOutlineKeyboardArrowRight className='departments-icon' />   </li>
                                        </Link>
                                    </div>
                                })
                            }
                        </ul>
                    </div>
                    <div className='slider-section-2'>
                        <Slider />
                    </div>
                    <div className='slider-section-3'>
                        <div className="slider-section-3-1">
                            <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/home-4-card-2.png" alt="" />
                            <p>Flat 20% off. on all shoes</p>
                            <div>
                                <h6> starting at $89 </h6>
                            </div>
                        </div>
                        <div className="slider-section-3-1">
                            <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/home-4-card-1.png" alt="" />
                            <p>Flat 20% off. on all shoes</p>
                            <div>
                                <h6> starting at $89 </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderSection