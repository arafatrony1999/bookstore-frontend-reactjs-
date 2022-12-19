import React, { Component, Fragment } from 'react';
import ProductTop from '../components/ProductPage/ProductTop';
import ProductDetails from '../components/ProductPage/ProductDetails';
import ProductReview from '../components/ProductPage/ProductReview';

class Product extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <ProductTop/>
                <ProductDetails/>
                <ProductReview/>
            </Fragment>
        );
    }
}

export default Product;
