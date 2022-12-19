import React, { Component, Fragment } from 'react';

class Coupon extends Component {
    render() {
        return (
            <Fragment>
                <section className="container">
                    <div className="coupon-que">
                        <p><span><i className="fas fa-square-full"></i>Have a coupon?</span><span id="entrCupn">Click here to enter your code</span></p>
                    </div>
                    <div className="open-that-coupon-h0">
                        <div className="coupon-open-que">
                            <p>If you have a coupon code, please apply it below.</p>
                            <div className="coupon-field">
                                <input type="text" name="" placeholder="Coupon Code"></input>
                                <button>Apply coupon</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Coupon;
