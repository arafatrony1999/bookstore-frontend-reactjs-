import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import Product from '../pages/Product'
import Catagory from '../pages/Catagory';
import Checkoutpage from '../pages/CheckoutPage';
import Profilepage from '../pages/ProfilePage';

class Myroutes extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/catagory" element={<Catagory />} />
                    <Route path="/checkout" element={<Checkoutpage />} />
                    <Route path="/profile" element={<Profilepage />} />
                </Routes>
            </div>
        );
    }
}

export default Myroutes;
