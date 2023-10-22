import React, { useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { userContext } from '../../../context/UserContext';

import "./Cart.css";

function Cart() {
    const { globalFunction} = useContext(userContext);
    const { cardStore, subtotal, increaseQuantity, decreaseQuantity, handleDelete, cartCheck, handleChange } = globalFunction;

    return (
        <div className='cart_main'>
            <div className={cartCheck ? "cart-body" : "cart-body_right"}>
                <div className='cart_header'>
                    <span onClick={handleChange} className='cart_header_RxCross2'><RxCross2 /></span>
                    <h2>Your Cart</h2>
                    <hr />
                </div>

                <div className='cart_pd_item'>
                    {
                        cardStore?.map((pd, idx) => {
                            const { img, name, price, id, quantity } = pd;
                            return <div className='cart_product_item mt-2' key={idx}>
                                <div className='cart_img' ><img src={img} width={50} alt="" /></div>
                                <div className='cart_product_details'>
                                    <h6>{name.slice(0, 25)}...</h6>
                                    <p onClick={() => handleDelete(idx)}>Remove</p>
                                </div>
                                <div className='cart_incress' >
                                    <span role="button" onClick={() => decreaseQuantity(idx, id)} ><AiOutlineMinus /></span>
                                    <span>{quantity}</span>
                                    <span role="button" onClick={() => increaseQuantity(idx, id)}><AiOutlinePlus /></span>
                                </div>
                            </div>
                        })
                    }

                </div>
                <hr />
                <div className='subtotal_area'>
                    <div className='control_subtotal'>
                        <div className='subtotal_left'>
                            <p>Subtotal :</p>
                            <p>Shipping :</p>

                        </div>
                        <div className='subtotal_right'>
                            <p>$ {subtotal}</p>
                            <p>$ 00</p>

                        </div>
                    </div>
                    <hr />
                    <div className='total_area'>
                        <p>Total :</p>
                        <p>$ {subtotal}</p>
                    </div>
                </div>
                <button className='button'>CheckOut</button>
                <Link to="/cartPage"><p className='mt-3'> go to cart page</p></Link>

            </div>
        </div>
    )
}

export default Cart