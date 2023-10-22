import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';

import "./SubscribeNewsletter.css";

function SubscribeNewsletter() {
    return (
        <section className='SubscribeNewsletter'>
            <div className='SubscribeNewsletter_1'>
                <div>
                    <h6>
                        Subscribe to Newsletter
                    </h6>
               
                    <input type="text" placeholder='Your email address' />
                </div>

            </div>
            <div className='SubscribeNewsletter_2'>
                <AiOutlineInstagram className='icon' />
                <BsFacebook className='icon' />
                <GrTwitter className='icon' />
            </div>
        </section>
    )
}

export default SubscribeNewsletter