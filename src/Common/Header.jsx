import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import '../assets/css/bootstrap.min.css';
import '../assets/css/header.css';
import '../assets/css/bookfair.css';
import '../assets/css/cart.css';
import '../assets/css/checkout.css';
import '../assets/css/product.css';
import '../assets/css/profile.css';
import '../assets/css/owl.css';
import '../assets/css/toaster.css';
import avatar from '../assets/images/avatar.png';
import $ from 'jquery';
import product1 from '../assets/images/product1.png'

class Header extends Component {
    componentDidMount(){
        window.addEventListener("scroll",()=>{
            document.querySelector("#menu-bar").classList.toggle("sticky", window.scrollY > 100)
        });

        $('#openSideBar').on('click',()=>{
            $('.side-bar').addClass('active-side-bar');
            $("body").css("overflow", "hidden");
        });

        $('.fa-times').on('click',()=>{
            $('.side-bar').removeClass('active-side-bar');
            $("body").css("overflow", "scroll");
        });

    
        $('#res-prokashoni').on('click',(e)=>{
            $('.Modal-prokashoni').modal('show')
        });
        $('#res-lekhok').on('click',()=>{
            $('#Modal-lekhok').modal('show')
        });
        $('#res-bishoy').on('click',()=>{
            $('#Modal-bishoy').modal('show')
        });


        
        $('#lekhok').on('mouseenter',function(){
            $('.hover-lekhok').css('display','block')
        })
        $('#lekhok').on('mouseleave',function(){
            $('.hover-lekhok').css('display','none')
        });

        $('#prokashoni').on('mouseenter',function(){
            $('.hover-prokashoni').css('display','block')
        });
        $('#prokashoni').on('mouseleave',function(){
            $('.hover-prokashoni').css('display','none')
        });
    
        
        $('#bishoy').on('mouseenter',function(){
            $('.hover-bishoy').css('display','block')
        })
        $('#bishoy').on('mouseleave',function(){
            $('.hover-bishoy').css('display','none')
        });

    }

    hideSide(){
        $('.side-bar').removeClass('active-side-bar');
        $("body").css("overflow", "scroll");
    }

    render() {
        return (
            <Fragment>
                <Modal className='Modal-prokashoni'>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Modal body content</Modal.Body>
                </Modal>
                <section>
                    <div className="main-menu">
                
                        <div className="top-details">
                            <div className="top-details-left">
                                <NavLink to="/"><i className="far fa-envelope-open"><span>info@myshop.com</span></i></NavLink>
                                <NavLink to="/"><i className="fas fa-phone-alt"><span>01879923111</span></i></NavLink>
                            </div>
                            <div className="top-details-right">
                                <NavLink to="/"><i className="fas fa-heart"><span>Wishlist</span></i></NavLink>
                                <NavLink to="/profile"><i className="fas fa-user-circle"><span>My Account</span></i></NavLink>
                                <NavLink to="/"><i className="fas fa-shopping-cart"><span>Checkout</span></i></NavLink>
                            </div>
                        </div>
                
                        <div className="logo-details-and-others">
                            <div className="main-logo-text">
                                <img src={avatar} alt="/"></img>
                                <h2 className='react-h2'>Arafat Rony</h2>
                            </div>
                            <div className="cart-button">
                                <NavLink to="/cart">
                                    CART
                                    <span className="react-span my"><i className="fas fa-shopping-bag"></i></span>
                                    <span className="react-span cart-count">0</span>
                                </NavLink>
                            </div>
                        </div>

                
                        <div className="menu-bar" id="menu-bar">
                            <div className="menu-bar-items">
                                <NavLink to="/">প্রথম পাতা</NavLink>
                                <NavLink to="/product">বই মেলা</NavLink>
                                <NavLink to="/cart">লেখক</NavLink>
                                <NavLink to="/catagory">প্রকাশনী</NavLink>
                                <NavLink to="/checkout">বিষয়</NavLink>
                                <NavLink to="/profile">যোগাযোগ</NavLink>
                                
                                <div className="frontModal" id="lekhok">
                                    লেখক
                                    <div className="hover-lekhok">
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                    </div>
                                </div>

                                <div className="frontModal" id="prokashoni">
                                    প্রকাশনী
                                    <div className="hover-prokashoni">
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                    </div>
                                </div>

                                <div className="frontModal" id="bishoy">
                                    বিষয়
                                    <div className="hover-bishoy">
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                        <NavLink className="modalLinks" to="/">মোহাম্মদ জাফর ইকবাল</NavLink>
                                        <NavLink className="modalLinks" to="/">সুনীল গঙ্গোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">মানিক বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">সৈয়দ শামসুল হক</NavLink>
                                        <NavLink className="modalLinks" to="/">আরিফ আজাদ </NavLink>
                                        <NavLink className="modalLinks" to="/">তানজিব সারোয়ার </NavLink>
                                        <NavLink className="modalLinks" to="/">তামিম শাহরিয়ার সুবিন</NavLink>
                                        <NavLink className="modalLinks" to="/">বিভূতিভূষণ বন্দোপাধ্যায়</NavLink>
                                        <NavLink className="modalLinks" to="/">কাজী নজরুল ইসলাম </NavLink>
                                        <NavLink className="modalLinks" to="/">জহির রায়হান </NavLink>
                                        <NavLink className="modalLinks" to="/">ইশতিয়াক আহম্মেদ</NavLink>
                                        <NavLink className="modalLinks" to="/">আশীফ এস্তাজ রবি</NavLink>
                                        <NavLink className="modalLinks" to="/">ব্রায়ান-ট্রেসি</NavLink>
                                        <NavLink className="modalLinks" to="/">কারল-এস-ডিউইক</NavLink>
                                        <NavLink className="modalLinks" to="/">তানকিউল হাসান</NavLink>
                                    </div>
                                </div>
                            </div>
                
                            <div className="res-top-menu">
                                <div className="left-section res">
                                    <span>Arafat Rony</span>
                                </div>
                
                                <div className="right-section res">
                                    <span><i id="openSideBar" className="fas fa-bars"></i></span>
                                </div>
                            </div>
                
                            <div className="menu-bar-search-bar">
                                <input type="text"></input>
                                <button className="react-button btn"><i className="fas fa-search"></i></button>
                            </div>
                        </div>
                
                
                        <div className="side-bar">
                            <div className="side-bar-header">
                                <div className="side-bar-title">
                                    <h2 className='react-h2'>Arafat Rony</h2>
                                    <span><i className="fas fa-times"></i></span>
                                </div>
                            </div>
                            <NavLink className="react-anchor" to="/" onClick={this.hideSide}>প্রথম পাতা</NavLink>
                            <NavLink to="/cart" onClick={this.hideSide}>বই মেলা ২০২০</NavLink>
                            <NavLink to="/catagory" onClick={this.hideSide}>লেখক<span className="arrowRight"><i className="fas fa-chevron-right"></i></span></NavLink>
                            <NavLink to="/product" onClick={this.hideSide}>প্রকাশনী<span className="arrowRight"><i className="fas fa-chevron-right"></i></span></NavLink>
                            <NavLink to="/checkout" onClick={this.hideSide}>বিষয়<span className="arrowRight"><i className="fas fa-chevron-right"></i></span></NavLink>
                            <NavLink to="/profile" onClick={this.hideSide}>যোগাযোগ</NavLink>
                        </div>

                    </div>
                </section>


                
                <section className="customModal d-none">
                    <div className="custom-modal-container">
                        <div className="custom-modal-cross">
                            <i className="fas fa-times"></i>
                        </div>
                        <div className="custom-modal-body">
                            <div className="modal-image">
                                <img src={product1} alt=""></img>
                            </div>
                            <div className="modal-details">
                                <div className="details-alignment">
                                    <div className="modal-product-name">
                                        মেঘডুবি
                                    </div>
                                    <div className="modal-product-price">
                                        ৳ 245.00
                                    </div>
                                    <div className="modal-cart-details">
                                        <input type="number" name="" id="" value="1"></input>
                                        <button className="btn btn-info">Add to Cart</button>
                                    </div>
                                    <div className="modal-product-details">
                                        Categories: অন্বেষা প্রকাশনী, উপন্যাস, কিক্কর আহসান, বইমেলা-২০২০
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </Fragment>
        );
    }
}

export default Header;
