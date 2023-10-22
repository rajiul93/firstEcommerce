import React from 'react';
import Slider3 from './Slider_3/Slider_3';
import "./WeekOffer.css";
import WeekOfferCategory from './WeekOfferCategory/WeekOfferCategory';
import WeekOfferSlide from './WeekOfferSlide/WeekOfferSlide';


function WeekOffer() {
    return (
        <section className='mb-5' >
            <div className='weekOffer' >
                <h6>This Week’s Offer.</h6>
                <p>Buy as early as possible before offer expire</p>
            </div>
            <div>
                <WeekOfferSlide />
            </div>
            <hr className='mb-5' />

            <div className='weekOffer2'>
                <div className='weekOffer21'>
                    <Slider3 />
                </div>
                <div className='weekOffer22'>
                    <div className='weekOffer221'>
                        <div>
                            <h6>Smart phones</h6>
                            <p>View all</p>
                        </div>
                    </div>

                    <div className='weekOffer222'>
                        <div className='weekOffer2221'>
                            <div>
                                <h6>Clothings & Fashion</h6>
                                <p>View all</p>
                            </div>
                        </div>
                        <div className='weekOffer2222'>
                            <div>
                                <h6>Furnitures</h6>
                                <p>View all</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <br />
            <br />
            <WeekOfferCategory />
        </section>
    )
}

export default WeekOffer