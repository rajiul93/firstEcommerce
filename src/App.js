import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./CartPage/CartPage";
import Cart from "./Component/Header/CartPage/Cart";
import Home from "./Component/Home/Home";
import Login from "./Component/Login_Register/Login";
import Register from "./Component/Login_Register/Register";
import PersonalInformation from "./Component/Personal_Information/PersonalInformation";
import ProductDetails from "./Component/ProductDEtails/ProductDetails";
import SecondNav from "./Component/Share/SecondNav/SecondNav";
import Shop from "./Component/Shop/Shop";
import Payment from "./Payment/Payment";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/productDetails/:id" element={<ProductDetails />}></Route>
        <Route path="/login" element={<Login />} />



        <Route path="/personalInformation" element={<PersonalInformation />} />

        <Route path="/payment" element={<Payment />} />



        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/secondNav" element={<SecondNav />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
