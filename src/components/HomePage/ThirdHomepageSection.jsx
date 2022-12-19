import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';
import product5 from '../../assets/images/product5.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery'

class Thirdhomepagesection extends Component {
    constructor(){
        super()
        this.state={
            options: {
                autoplay:false,
                loop:true,
                dot:true,
                nav:true,
                autoplayHoverPause:true,
                autoplaySpeed:100,
                margin:10,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:5
                    }
                }
            }
        }
    }

    
    componentDidMount(){
        $('.openCart').on('click',()=>{
            $('.customModal').removeClass('d-none');
        });

        $('.custom-modal-cross').on('click',()=>{
            $('.customModal').addClass('d-none');
        });
    }
    
    
    render() {
        return (
            <Fragment>
                <section>
                        
                    <div className="products-main-section container">
                        <div className="product-main-section-header">
                            <span>বই মেলা ২০২০</span>
                        </div>
                    </div>
                    
                    <div className="container section-marginTop text-center">
                        <div className="row m-2">
                            <OwlCarousel id="one" className="owl-carousel mb-4 owl-theme" {...this.state.options}>

                                <div className="item m-1 card">
                                    <div className="text-center">
                                        <div className="product-display-img">
                                            <img className="pImg" src={product1} alt='Card'></img>
                                            <i className="fas fa-search openCart"></i>
                                            <div className="product-cart-button">
                                                <NavLink to="/add" className="big-cart">Add to cart</NavLink>
                                                <NavLink to="/add" className="small-cart"><i className="fas fa-bars"></i></NavLink>
                                                <NavLink to="/add" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                            </div>
                                        </div>
                                        <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                        <h3 className="price-tag">145.00 $</h3>
                                    </div>
                                </div>
                                <div className="item m-1 card">
                                    <div className="text-center">
                                        <div className="product-display-img">
                                            <img className="pImg" src={product2} alt='Card'></img>
                                            <i className="fas fa-search openCart"></i>
                                            <div className="product-cart-button">
                                                <NavLink to="/add" className="big-cart">Add to cart</NavLink>
                                                <NavLink to="/add" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                                <NavLink to="/add" className="small-cart"><i className="fas fa-heart"></i></NavLink>
                                            </div>
                                        </div>
                                        <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                        <h3 className="price-tag">145.00 $</h3>
                                    </div>
                                </div>
                                <div className="item m-1 card">
                                    <div className="text-center">
                                        <div className="product-display-img">
                                            <img className="pImg" src={product3} alt='Card'></img>
                                            <i className="fas fa-search openCart"></i>
                                            <div className="product-cart-button">
                                                <NavLink to="/add" className="big-cart">Add to cart</NavLink>
                                                <NavLink to="/add" className="small-cart"><i className="fas fa-bars "></i></NavLink>
                                                <NavLink to="/add" className="small-cart"><i className="fas fa-heart "></i></NavLink>
                                            </div>
                                        </div>
                                        <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                        <h3 className="price-tag">145.00 $</h3>
                                    </div>
                                </div>
                                <div className="item m-1 card">
                                    <div className="text-center">
                                        <div className="product-display-img">
                                            <img className="pImg" src={product4} alt='Card'></img>
                                            <i className="fas fa-search openCart"></i>
                                            <div className="product-cart-button">
                                                <NavLink to="/add" className="big-cart">Add to cart</NavLink>
                                                <NavLink to="/add" className="small-cart"><i className="fas fa-bars "></i></NavLink>
                                                <NavLink to="/add" className="small-cart"><i className="fas fa-heart "></i></NavLink>
                                            </div>
                                        </div>
                                        <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                        <h3 className="price-tag">145.00 $</h3>
                                    </div>
                                </div>
                                <div className="item m-1 card">
                                    <div className="text-center">
                                        <div className="product-display-img">
                                            <img className="pImg" src={product5} alt='Card'></img>
                                            <i className="fas fa-search openCart "></i>
                                            <div className="product-cart-button">
                                                <NavLink to="/add" className="big-cart">Add to cart</NavLink>
                                                <NavLink to="/add" className="small-cart"><i className=" fas fa-bars"></i></NavLink>
                                                <NavLink to="/add" className="small-cart"><i className=" fas fa-heart"></i></NavLink>
                                            </div>
                                        </div>
                                        <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                        <h3 className="price-tag">145.00 $</h3>
                                    </div>
                                </div>
                                <div className="item m-1 card">
                                    <div className="text-center">
                                        <div className="product-display-img">
                                            <img className="pImg" src={product5} alt='Card'></img>
                                            <i className="fas fa-search openCart "></i>
                                            <div className="product-cart-button">
                                                <NavLink to="/add" className="big-cart">Add to cart</NavLink>
                                                <NavLink to="/add" className="small-cart"><i className=" fas fa-bars"></i></NavLink>
                                                <NavLink to="/add" className="small-cart"><i className=" fas fa-heart"></i></NavLink>
                                            </div>
                                        </div>
                                        <h5 className="card-title mt-4">চাঁদের পাহাড়</h5>
                                        <h3 className="price-tag">145.00 $</h3>
                                    </div>
                                </div>

                            </OwlCarousel>
                
                        </div>
                    </div>
                
                </section>
            </Fragment>
        );
    }
}

export default Thirdhomepagesection;
