import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import SecondNav from '../Component/Share/SecondNav/SecondNav'
import { userContext } from '../context/UserContext'
import "./CartPage.css"

function CartPage() {
    const { globalFunction,useFirebase  } = useContext(userContext);
    const { cardStore, subtotal, increaseQuantity,decreaseQuantity,handleDelete } = globalFunction;
    const { user } =useFirebase;


    return (
        <section>
           <SecondNav />
            <div className='CartPage'>
                <div className='CartPageContainer mt-5 mb-5'>
                    <div className='CartPageChild_1 mb-5'>
                        <div className='d-flex justify-content-between CartPageChild_13'>
                            <div className='m-3'>
                                <div >
                                    <div><h4>Product details</h4></div>
                                </div>
                            </div>
                            <div className='m-3'>
                                <h6>Total Product Quantity: <span className='text-secondary-emphasis fs-4'>{cardStore?.length} </span></h6>
                            </div>
                        </div>
                        {
                            cardStore?.map((pd, index) => {
                                const { name, price, quantity, img, id } = pd;
                                return (
                                    <div key={index} className='d-flex justify-content-between CartPageChild_12 my-4'>
                                        <div className='d-flex gap-3  '>
                                            <div>
                                                <img src={img} width={80} alt="" />
                                            </div>
                                            <div className='d-flex flex-column gap-4'>
                                                <div><h6>{name}</h6></div>
                                                <div className='border border-black d-flex align-items-end width_control'>

                                                    <div className='count_area d-flex align-items-center justify-content-center' 
                                                    onClick={()=>decreaseQuantity(index, id, price, quantity )}
                                                    >
                                                        <i className="bi bi-dash-lg"></i>
                                                    </div>
                                                    <div className='border-start border-end count_area d-flex align-items-center justify-content-center'>{quantity}</div>
                                                    <div onClick={()=>increaseQuantity(index, id, price, quantity )} className='count_area d-flex align-items-center justify-content-center '>
                                                        <i className="bi bi-plus-lg"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mx-3 money-section'>
                                            <h6>{price * quantity} TK</h6>
                                            <p className='text-danger text-decoration-underline' role="button" onClick={()=>handleDelete(index)}>remove</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='border p-3 rounded-1 CartPageChild_1'>
                        <div className='text-center bg-dark-subtle p-3 rounded-1'>
                            <p>Please add your address before order</p>
                            {user.address ? <button className='btn btn-dark'>Address Connected</button>:<Link to="/personalInformation"> <button className='btn btn-dark'>Add your address</button> </Link>}
                        </div>
                        <div className='d-flex justify-content-between mt-3'>
                            <div>Subtotal</div>
                            <div>{subtotal} Taka</div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>Total</div>
                            <div>{subtotal} Taka</div>
                        </div>
                        <div className="d-grid gap-2">
                           {user?.address ?  <button className="btn btn-secondary" type="button"><Link style={{color:"#fff", textDecoration:"none",}} to="/payment">CheckOut</Link></button>:<button className="btn btn-secondary" type="button">Address missing</button>}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default CartPage