import React, { Component, Fragment } from 'react';
import Showtitle from '../Common/ShowTitle';
import Billingaddress from '../components/CheckoutPage/BillingAddress';
import Coupon from '../components/CheckoutPage/Coupon';
import Orderdetail from '../components/CheckoutPage/OrderDetail';
import Paymentsection from '../components/CheckoutPage/PaymentSection';

class Checkoutpage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Showtitle title='Checkout' />
                <Coupon/>
                <Billingaddress/>
                <Orderdetail/>
                <Paymentsection/>
            </Fragment>
        );
    }
}

export default Checkoutpage;
