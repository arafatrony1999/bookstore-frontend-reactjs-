import React, { Component, Fragment } from 'react';
import Showtitle from '../Common/ShowTitle';
import Cartitems from '../components/CartPage/CartItems';
import Carttotal from '../components/CartPage/CartTotal';

class Cartpage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <Showtitle title='Cart'/>
                <Cartitems/>
                <Carttotal/>
            </Fragment>
        );
    }
}

export default Cartpage;
