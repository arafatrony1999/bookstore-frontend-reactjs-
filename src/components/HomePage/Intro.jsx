import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Intro extends Component {
    render() {
        return (
            <Fragment>
                
                <section>
                    <div className="support-section container">
                        <div className="support-card">
                            <div className="support-left">
                                <i className="react-i fas fa-phone-alt"></i>
                            </div>
                            <div className="support-right">
                                <div className="support-right-p">
                                    <p>24/7 COUSTOMER SERVICE</p>
                                    <p>+8801879923111</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="support-card">
                            <div className="support-left">
                                <i className="react-i fa fa-plane"></i>
                            </div>
                            <div className="support-right">
                                <div className="support-right-p">
                                    <p>FAST SHIPPING SERVICE</p>
                                    <p>Country Wide!</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="support-card">
                            <div className="support-left">
                                <i className="react-i fas fa-dollar-sign"></i>
                            </div>
                            <div className="support-right">
                                <div className="support-right-p">
                                    <p>EASY RETURN POLICY</p>
                                    <p>Money back guarantee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="top-product-section container">
                        <div style={{background: "{background_product1}"}} className="top-product-items">
                            <div className="product-name">
                                <h1>আনিসুল হকের বই</h1>
                                <NavLink className="react-anchor" to="/">SHOP NOW <span className="react-span"><i className="react-i fas fa-arrow-right"></i></span></NavLink>
                            </div>
                        </div>
                        <div style={{background: "{background_product2}"}} className="top-product-items with-margin">
                            <div className="product-name">
                                <h1>আরিফ আজাদ</h1>
                                <NavLink className="react-anchor" to="/">SHOP NOW <span className="react-span"><i className="react-i fas fa-arrow-right"></i></span></NavLink>
                            </div>
                        </div>
                        <div style={{background: "{background_product3}"}} className="top-product-items">
                            <div className="product-name">
                                <h1>কম্পিউটার প্রোগ্রামিং</h1>
                                <NavLink className="react-anchor" to="/">SHOP NOW <span className="react-span"><i className="react-i fas fa-arrow-right"></i></span></NavLink>
                            </div>
                        </div>
                    </div>
                
                
                </section>
            </Fragment>
        );
    }
}

export default Intro;
