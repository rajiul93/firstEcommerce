import React, { useContext } from 'react';
import Footer from '../Component/Footer/Footer';
import Login from '../Component/Login_Register/Login';
import SecondNav from '../Component/Share/SecondNav/SecondNav';
import { userContext } from '../context/UserContext';

function Payment() {

    const { useFirebase, globalFunction } = useContext(userContext);
    const { user } = useFirebase;
    const { stored } = globalFunction;
    const totalPrice = stored.reduce((p, c) => p + (+c.price * +c.quantity), 1)


    const address = JSON.parse(localStorage.getItem("address"))
    return (
        <div className='bg-light'>
            {user?.address ? <>
                <SecondNav />
                <div style={{ width: "720px", margin: "0 auto", marginTop: "20px" }} className='d-flex gap-3 align-items-start ' >
                    <div >
                        <div className='bg-white p-2 border border-light rounded mb-3'>
                            <div>
                                <h6>Address:{address.currentLocation},,</h6>
                                <h6>Current Location: {address.locationDetails}</h6>
                                <h6>Phone:{address.phone}</h6>
                            </div>
                        </div>
                        <div className='bg-white p-2 border border-light rounded'>
                            {
                                stored?.map((pd, ind) => {
                                    return <div className='d-flex gap-2 mb-2 ' key={ind}>
                                        {/* <div >image</div> */}
                                        <img src={pd.img} alt="" style={{ width: "40px" }} />
                                        <div style={{ width: "260px" }}>{pd.name}</div>
                                        <div style={{ width: "40px" }}>${pd.price * pd.quantity}</div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div style={{ width: "300px" }} className='bg-white border border-light rounded p-2 d-flex justify-content-between '>
                        <div>
                            <p className=''>Total Price: </p>
                            <p>Delivery Fee : </p>
                            <p>Total Payment: </p>

                        </div>
                        <div className='text-end'>
                            <p>${totalPrice} </p>
                            <p>$100 </p>
                            <p>${totalPrice + 100} T</p>
                            <button className='btn bg-warning mt-3 text-white'>Place Order</button>
                        </div>
                    </div>
                </div>
            </> : <Login />}

<Footer />
        </div>
    )
}

export default Payment;

