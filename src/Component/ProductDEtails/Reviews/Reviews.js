import React from 'react'
import "./Reviews.css"

function Reviews() {
    return (
        <div className='Reviews'>
            <div className='Reviews_title'>
                
                <p className='fw-normal'>Your email address will not be published.</p>
                <p className='fw-normal'>Required fields are marked *</p>
                <p>Your rating</p>
            </div>
            <div className='from_container'>
                <div className='from'>
                    <div className='from_div_1'>
                        <label className='from_div__1_lable' htmlFor="">Your review *</label><br />
                        <textarea  className='from_div_1_input' type="text" />
                    </div>
                    <div className='from_div_2 mt-4'>
                        <div className='from_div_2_1'>
                            <label htmlFor="">Name*</label><br />
                            <input type="text" />
                        </div>
                        <div className='from_div_2_1'>
                            <label htmlFor="">Email* </label><br />
                            <input type="text" />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <input type="checkbox" /><label className='mx-3 fw-normal'  htmlFor="">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <button className='button mt-4'>Submit</button>
                </div>
                <hr />
                <h2>Reviews</h2>
                <p className='mt-4'>There are no reviews yet.</p>
            </div>
         
        </div>
    )
}

export default Reviews