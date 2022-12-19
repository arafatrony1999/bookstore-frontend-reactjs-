import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Carttotal extends Component {
    render() {
        return (
            <Fragment>
                <section style={{overflow:"hidden"}} className="container">
                    <div className="second-container">
                        <div className="this-section-header">
                            <h1 className='customize-h1'>Cart totals</h1>
                        </div>
                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h3>Subtotal</h3>
                            </div>
                            <div className="cart-total-right">
                                <h3>৳ 542.00</h3>
                            </div>
                        </div>

                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h3>Shipping</h3>
                            </div>
                            <div className="cart-total-right">
                                <h3>Flat rate: <span style={{color: "red"}}>৳ 45.00</span></h3>
                                <h3>Estimate for <span style={{fontWeight: "bolder"}}>Dhaka</span> . </h3>
                                <button id="cart-total-collapse">Change address <span className="addChange"><i className="fas fa-truck"></i></span></button>
                                
                                <div className="before-click">
                                    <select>
                                        <option>Afghanistan</option>
                                        <option>Australia</option>
                                        <option>England</option>
                                        <option>America</option>
                                        <option>Argentina</option>
                                        <option>Bangladesh</option>
                                        <option>India</option>
                                        <option>Pakistan</option>
                                    </select>
                                    <select>
                                        <option>Sylhet</option>
                                        <option>Barisal</option>
                                        <option>Noakhali</option>
                                        <option>Rajsahi</option>
                                        <option>Rangamati</option>
                                        <option>Dhaka</option>
                                        <option>Comilla</option>
                                        <option>Chittagong</option>
                                        <option>Chandpur</option>
                                    </select>
                                    <input type="text" placeholder="Town / City"></input>
                                    <input type="text" placeholder="Postcode / ZIP"></input>
                                    <button>Update Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h3>Total</h3>
                            </div>
                            <div className="cart-total-right">
                                <h3>৳ 542.00</h3>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="container">
                    <div className="cart-final-buttons">
                        <div className="final-left">
                            <NavLink to="/" className='react-anchor'>Proceed to checkout</NavLink>
                        </div>
                        <div className="final-right">
                            <NavLink to="/" className='react-anchor'>Continue shopping</NavLink>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Carttotal;
