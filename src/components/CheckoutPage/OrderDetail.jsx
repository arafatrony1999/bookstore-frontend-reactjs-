import React, { Component, Fragment } from 'react';

class Orderdetail extends Component {
    render() {
        return (
            <Fragment>
                <section className="container">
                    <div className="cart-count-all">
                        <div className="this-section-header">
                            <h1>Your order</h1>
                        </div>
            
                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h3>Product</h3>
                            </div>
                            <div className="cart-total-right">
                                <h3>Total</h3>
                            </div>
                        </div>
            
                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h4>মেঘডুবি  × 1</h4>
                            </div>
                            <div className="cart-total-right">
                                <h3><span style={{color: "red"}}>৳ 342.00</span></h3>
                            </div>
                        </div>
                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h4>মেঘডুবি  × 1</h4>
                            </div>
                            <div className="cart-total-right">
                                <h3><span style={{color: "red"}}>৳ 342.00</span></h3>
                            </div>
                        </div>
                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h3>Subtotal</h3>
                            </div>
                            <div className="cart-total-right">
                                <h3>৳ 684.00</h3>
                            </div>
                        </div>
                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h3>Shipping</h3>
                            </div>
                            <div className="cart-total-right">
                                <h3>flat rate: <span style={{color: "green"}}>৳ 45.00</span></h3>
                            </div>
                        </div>
                        <div className="cart-total-single-row">
                            <div className="cart-total-left">
                                <h3>Total</h3>
                            </div>
                            <div className="cart-total-right">
                                <h3>৳ 750.00</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Orderdetail;
