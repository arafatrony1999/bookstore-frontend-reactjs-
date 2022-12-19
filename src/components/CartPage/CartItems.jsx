import React, { Component, Fragment } from 'react';
import product1 from '../../assets/images/product1.png'

class Cartitems extends Component {
    render() {
        return (
            <Fragment>
                <section className="container">
                    <table id="cart-table">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">view</th>
                                <th scope="col">product</th>
                                <th scope="col">price</th>
                                <th scope="col">quantity</th>
                                <th scope="col">total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Account"><i className="fas fa-times"></i></td>
                                <td data-label="view"><img src={product1} alt=""></img></td>
                                <td data-label="product">মেঘডুবি</td>
                                <td data-label="price">৳ 342.00</td>
                                <td data-label="quantity"><input type="number" value="1" name="" id=""></input></td>
                                <td data-label="total">৳ 342.00</td>
                            </tr>
                            <tr>
                                <td data-label="Account"><i className="fas fa-times"></i></td>
                                <td data-label="view"><img src={product1} alt=""></img></td>
                                <td data-label="product">মেঘডুবি</td>
                                <td data-label="price">৳ 342.00</td>
                                <td data-label="quantity"><input type="number" value="1" name="" id=""></input></td>
                                <td data-label="total">৳ 342.00</td>
                            </tr>
                            <tr>
                                <td data-label="Account"><i className="fas fa-times"></i></td>
                                <td data-label="view"><img src={product1} alt=""></img></td>
                                <td data-label="product">মেঘডুবি</td>
                                <td data-label="price">৳ 342.00</td>
                                <td data-label="quantity"><input type="number" value="1" name="" id=""></input></td>
                                <td data-label="total">৳ 342.00</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="container">
                    <div className="cart-table-footer">
                        <div className="table-footer-left">
                            <input type="text" name="" id="" placeholder="coupon code"></input>
                            <button>Apply coupon</button>
                        </div>
                        <div className="table-footer-right">
                            <button>Update cart</button>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Cartitems;
