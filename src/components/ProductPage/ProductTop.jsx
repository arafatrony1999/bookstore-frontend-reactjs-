import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import product3 from '../../assets/images/product3.png';

class Producttop extends Component {
    render() {
        return (
            <Fragment>
                
                <section>
                    <div className="product_cart_container">
                        <div className="side1">
                            <div className="side1_image">
                                <img src={product3} alt=""></img>
                            </div>
                            <div className="side1_others">
                                <h1>কাকাবাবু সমগ্র ৫ (হার্ডকভার)</h1>
                                <p></p>
                                <span>By : </span><NavLink to="/" className="side1_links">সুনীল গঙ্গোপাধ্যায় (নীললোহিত)</NavLink> <br></br>
                                <p></p>
                                <p></p>
                                <span>Catagory : </span><span>পশ্চিমবঙ্গের বই: রহস্য, গোয়েন্দা, ভৌতিক, কল্প বিজ্ঞান ও পৌরাণিক</span>
                                <p></p>
                                <p></p>
                                <h1>TK. 540</h1>
                                <p></p>
                                <p></p>
                                <i className="fas fa-check-circle"> </i> <span> In Stock (only 12 copies left)</span>
                                <p></p>
                                <p></p>
                                <button className="read_now_button">একটু পড়ে দেখুন</button>
                                <button className="product_add_cart_button">Add to Cart</button>
                            </div>
                        </div>

                        <div className="side2">
                            <h3><i className="fas fa-hand-holding-usd"></i>Cash on delivery</h3>
                            <h3><i className="fas fa-redo"></i>7 Days easy returns</h3>
                            <h3><i className="fas fa-truck"></i>Delivery Charge Tk. 50(Online Order)</h3>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Producttop;
