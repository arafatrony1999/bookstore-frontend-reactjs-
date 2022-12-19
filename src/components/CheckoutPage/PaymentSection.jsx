import React, { Component, Fragment } from 'react';

class Paymentsection extends Component {
    render() {
        return (
            <Fragment>
                <section className="container" style={{marginTop:"30px"}}>
                    <div className="payment-section">
                        <h2>Cash on Delievery</h2>
                        <div className="payCash">
                            Pay with cash upon delivery.
                        </div>
                        <div className="hr">
                            <hr></hr>
                        </div>
                        <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
                        <div className="cash-btn">
                            <button>Place Order</button>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Paymentsection;
