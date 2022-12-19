import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import product1 from '../../assets/images/product1.png';
import $ from 'jquery';

class Catagoryright extends Component {
    componentDidMount(){
        $('#list-icon').on('click',()=>{
            $('.right-items-single-card').addClass('list-view')
            $('#grid-icon').removeClass('active-icon');
            $('#list-icon').addClass('active-icon');
        });
        $('#grid-icon').on('click',()=>{
            $('.right-items-single-card').removeClass('list-view')
            $('#grid-icon').addClass('active-icon');
            $('#list-icon').removeClass('active-icon');
        });
        $('#cart-total-collapse').on('click',()=>{
            $('.before-click').toggleClass('collapseClass');
        });
    }
    render() {
        return (
            <Fragment>
                <div className="inside-right">

                    <div className="inside-right-headings">
                        <div className="right-heading">
                            <h3>showing 1-10 of 96 items</h3>
                            <select name="" id="">
                                <option value="">Sort by popularity</option>
                                <option value="">Sort by average rating</option>
                                <option value="">Sort by latest</option>
                                <option value="">Sort by price:low to high</option>
                                <option value="">Sort by price:low to high</option>
                            </select>
                        </div>
        
                        <div className="left-heading">
                            <div id="grid-icon" className="collapse-options active-icon">
                                <i className="fas fa-th-large icon-active"></i>
                            </div>
                            <div id="list-icon" className="collapse-options">
                                <i className="fas fa-list"></i>
                            </div>
                        </div>
                    </div>

                    <div className="right-items">
                        <div className="right-items-single-card">
                            <div className="product-display-img">
                                <img src={product1} alt="Card cap"></img>
                                <div className="product-cart-button">
                                    <NavLink to="/" className="big-cart">Add to cart</NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                </div>
                            </div>
                            <div className="name-and-price">
                                <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                <h3 className="price-tag">145.00 $</h3>
                            </div>
                        </div>

                        <div className="right-items-single-card">
                            <div className="product-display-img">
                                <img src={product1} alt="Card cap"></img>
                                <div className="product-cart-button">
                                    <NavLink to="/" className="big-cart">Add to cart</NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                </div>
                            </div>
                            <div className="name-and-price">
                                <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                <h3 className="price-tag">145.00 $</h3>
                            </div>
                        </div>
                        <div className="right-items-single-card">
                            <div className="product-display-img">
                                <img src={product1} alt="Card cap"></img>
                                <div className="product-cart-button">
                                    <NavLink to="/" className="big-cart">Add to cart</NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                </div>
                            </div>
                            <div className="name-and-price">
                                <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                <h3 className="price-tag">145.00 $</h3>
                            </div>
                        </div>
                        <div className="right-items-single-card">
                            <div className="product-display-img">
                                <img src={product1} alt="Card cap"></img>
                                <div className="product-cart-button">
                                    <NavLink to="/" className="big-cart">Add to cart</NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                </div>
                            </div>
                            <div className="name-and-price">
                                <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                <h3 className="price-tag">145.00 $</h3>
                            </div>
                        </div>
                        <div className="right-items-single-card">
                            <div className="product-display-img">
                                <img src={product1} alt="Card cap"></img>
                                <div className="product-cart-button">
                                    <NavLink to="/" className="big-cart">Add to cart</NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                </div>
                            </div>
                            <div className="name-and-price">
                                <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                <h3 className="price-tag">145.00 $</h3>
                            </div>
                        </div>
                        <div className="right-items-single-card">
                            <div className="product-display-img">
                                <img src={product1} alt="Card cap"></img>
                                <div className="product-cart-button">
                                    <NavLink to="/" className="big-cart">Add to cart</NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                </div>
                            </div>
                            <div className="name-and-price">
                                <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                <h3 className="price-tag">145.00 $</h3>
                            </div>
                        </div>
                        <div className="right-items-single-card">
                            <div className="product-display-img">
                                <img src={product1} alt="Card cap"></img>
                                <div className="product-cart-button">
                                    <NavLink to="/" className="big-cart">Add to cart</NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                </div>
                            </div>
                            <div className="name-and-price">
                                <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                <h3 className="price-tag">145.00 $</h3>
                            </div>
                        </div>
                        <div className="right-items-single-card">
                            <div className="product-display-img">
                                <img src={product1} alt="Card cap"></img>
                                <div className="product-cart-button">
                                    <NavLink to="/" className="big-cart">Add to cart</NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                    <NavLink to="/" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                </div>
                            </div>
                            <div className="name-and-price">
                                <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                <h3 className="price-tag">145.00 $</h3>
                            </div>
                        </div>

                        
                        <div className="pagination-section">
                            <div className="pagination-buttons">
                                <div className="pag-btn">
                                    <NavLink to="/" className="active-pag">1</NavLink>
                                </div>
                                <div className="pag-btn">
                                    <NavLink to="/">2</NavLink>
                                </div>
                                <div className="pag-btn">
                                    <NavLink to="/">3</NavLink>
                                </div>
                                <div className="pag-btn">
                                    <span style={{fontSize: "2rem"}}>....</span>
                                </div>
                                <div className="pag-btn">
                                    <NavLink to="/">Next</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Catagoryright;
