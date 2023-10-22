import React, { useContext } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import ProductData from "../../Data/ProductData.json";
import Reviews from './Reviews/Reviews';

import { useParams } from 'react-router-dom';
import { userContext } from '../../context/UserContext';
import Footer from "../Footer/Footer";
import SecondNav from '../Share/SecondNav/SecondNav';
import "./ProductDetails.css";


function ProductDetails() {

    const { id }= useParams();
    const { globalFunction} = useContext(userContext);
    const { addingCart,count,countMinus,countPlus} = globalFunction;
 
    

 
    const product = ProductData.find(product=>product.id ===id);
    const {discrioption,brand,categorys,departments,img ,name,price} =product;
    const shortDescription = discrioption.slice(0,200);

    localStorage.setItem("singleProduct", JSON.stringify(product))
    return (
        <>
            <SecondNav />
            <div className='ProductDetails'>

                <div className='ProductDetails_1 mt-5'>

                    <div className='ProductDetails_1_img_gallary'>
                        {/* <div >
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div> */}
                    </div>

                    <div className='ProductDetails_1_img'>
                        <img className='img-fluid '  width={400} src={img} alt="" />
                    </div>

                </div>

                <div className='ProductDetails_2 mt-5'>
                    <h1>{name}</h1>
                    <p>star reating</p>
                    <hr />
                    <h2>${price}</h2>
                    <p>{shortDescription}...</p>
                    <p>Qty</p>

                    <div className='ProductDetails_2_child'>
                        <div className='ProductDetails_2_child_1'>
                            <div  role="button" onClick={()=>countMinus(product)} ><AiOutlineMinus /></div>
                            <div>{count}</div>
                            <div role="button" onClick={()=>countPlus(product)}><AiOutlinePlus /></div>
                        </div>
                        <div className='ProductDetails_2_child_2'>
                            <button  className='btn1' onClick={()=>addingCart(product)}>Add to cart </button><button className='btn2'>Buy now</button>
                        </div>
                    </div>
                    <hr />
                    <span className='wishlist'><p>Add to wishlist</p></span>
                    <hr />

                    <p>Category: {categorys}</p>
                </div>

            </div>

            <div className='description_aria mt-5 mb-5'>
                <ul className="nav description_aria_nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Description</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link description_button" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Reviews (0)</button>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                        <h2 className='mt-4'>Description</h2>
                        <p className='mt-3'>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                    </div>
                    <div className="tab-pane fade mt-4" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0"><Reviews /></div>


                </div>
                <hr className='mt-5' />

                <div className="related_product">
                    <h2>Related products</h2>
                 
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ProductDetails