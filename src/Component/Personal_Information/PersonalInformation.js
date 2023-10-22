import { getDatabase, ref, set } from 'firebase/database';
import React, { useContext, useState } from 'react';
import { BiWallet } from 'react-icons/bi';
import { BsBoxArrowLeft, BsExclamationCircle, BsPersonPlus } from 'react-icons/bs';
import { CiTrophy } from "react-icons/ci";
import { FiSettings } from 'react-icons/fi';
import { GoLocation } from "react-icons/go";
import { IoIosHelpBuoy } from "react-icons/io";
import { MdOutlineBookmarkBorder, MdOutlinePayments } from 'react-icons/md';
import { userContext } from '../../context/UserContext';
import Header from "../Header/Header";
import Login from '../Login_Register/Login';
import "./Personal_Information.css";

function PersonalInformation() {
  const [address, setAddress] = useState({ phone: "", currentLocation: "", locationDetails: "", nid: "" })
  const { phone, currentLocation, locationDetails, nid } = address;
  const { useFirebase } = useContext(userContext)
  const { user, logOut } = useFirebase;
  const [show, setShow] = useState(false);

  let name, value;
  const addressOnchange = (event) => {
    name = event.target.name;
    value = event.target.value
    setAddress({ ...address, [name]: value })

  }

  const updateAddress = (e) => {
    localStorage.setItem("address", JSON.stringify(address));
    e.preventDefault();
    const db = getDatabase();
    const userRef = ref(db, `users/${user.uid}`);
    set(userRef, {
      phone: phone,
      address: currentLocation,
      locationDetails: locationDetails,
      nid: nid,
    });
    setShow(false)
  }


  return (
    <>

      {user?.email ? <Header /> : ""}

      {
        !user?.email ? <Login /> :
          <div className='personal_information'>
            <div className='personal_information_1'>
              <div className='personal_information_1_picture mt-5' >
                <div className='mx-auto '>
                  <img src="https://demo.agnidesigns.com/cartify/wp-content/uploads/2022/04/product-thumbnail-496.png" alt="" />
                </div>
                <h2>???</h2>
                <h6>38.00$</h6>
              </div>
              <div className='personal_information_setting'>
                <ul>
                  <li><BiWallet /><span>My wallet </span></li>
                  <li><BsPersonPlus /><span>My Reward</span></li>
                  <li><MdOutlineBookmarkBorder /><span>My order</span></li>
                  <li><BsExclamationCircle /><span>Personal Information</span></li>
                  <li><CiTrophy /><span>Reward</span></li>
                  <li><GoLocation /><span>Address</span></li>
                  <li><MdOutlinePayments /><span>Payment Methods</span></li>
                  <li><FiSettings /> <span>Contact Preferences</span></li>
                  <li><IoIosHelpBuoy /><span>Need Help</span></li>
                  <li onClick={logOut} ><BsBoxArrowLeft /><span>Sign Out</span></li>
                </ul>
              </div>

            </div>
            <div className='personal_information_2 mt-5'>
              <h1 className='fs-2 mb-4'>Personal Information</h1>
              <span className='personal_information_edit ' onClick={() => setShow(!show)} >Add your </span>
              <div className='mx-2 '>
                <h6>Firs Name: {user.displayName} </h6>
                <h6>ID:  {user.uid}</h6>
                <h6>Email: {user.email}</h6>
              </div>
              <div>
                <div className='mx-2 '>
                  <h6>Phone : {user.phone} </h6>
                  <h6>Current Location:  {user.address}</h6>
                  <h6>Location details: {user.locationDetails}</h6>
                  <h6>NID: {user.nid} </h6>
                  <h6>Update date: 26.02.2023 </h6>
                </div>

                {show && <div >
                  <input required={true} onChange={addressOnchange} type="text" name='phone' value={phone} placeholder='phone' /> <br /> <br />
                  <input required onChange={addressOnchange} type="text" name='currentLocation' value={currentLocation} placeholder='current LOcation' /> <br /> <br />
                  <input required onChange={addressOnchange} type="text" name='locationDetails' value={locationDetails} placeholder='location details' /> <br /> <br />
                  <input required onChange={addressOnchange} type="text" name='nid' value={nid} placeholder='NID' /> <br /> <br />
                  <div className='d-flex gap-5'>
                    <span onClick={updateAddress} type='button' >Submit !</span>
                    <span onClick={() => setShow(false)} type='button' >close</span>
                  </div>
                </div>}

              </div>
              {/* <div>

                <div className='personal_information_2_from mt-5'>
                  <li className='personal_information_span'><label htmlFor="">First Name</label> <br /><input type="text" name="name1" id="" /></li>
                  <li className='personal_information_span'><label htmlFor="">Last Name</label><br /> <input type="text" name="name2" id="" /></li>
                  <li className='personal_information_span'><label htmlFor="">Email</label><br /> <input type="email" name="email" id="" /></li>
                  <li className='personal_information_span'><label htmlFor="">Phone </label><br /> <input type="number" name="phone" id="" /></li>
                  <li className='personal_information_span'><label htmlFor="">Date</label><br />  <input type="date" name="date" id="" /></li>
                </div>

                <div className='mt-3'>
                  <input type="checkbox" name="Male" id="" /><span className='fs-6 mx-2'>Male</span><br />
                  <input type="checkbox" name="Female" id="" /><span className='fs-6 mx-2'>Female</span>
                </div>

                <button>Submit</button>
              </div> */}
            </div>


          </div>
      }

      {/* {user?.email ? <Footer />:''} */}
    </>

  )
}

export default PersonalInformation