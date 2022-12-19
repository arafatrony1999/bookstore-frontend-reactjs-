import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png'

class Commonleft extends Component {
    render() {
        return (
            <Fragment>
                <div className="profile-left">
                    <div className="profile-main">
                        <div className="profile-image">
                            <img src={avatar} alt=""></img>
                        </div>
                        <div className="profile-other">
                            <h4>Hello,</h4>
                            <h1>Arafat Rony</h1>
                        </div>
                    </div>
                    <div className="profile-catagory">
                        <NavLink to="/profile" className="an-active">My Account</NavLink>
                        <NavLink to="/">My Orders</NavLink>
                        <NavLink to="/">My Cart items</NavLink>
                        <NavLink to="/">My Wishlist</NavLink>
                        <NavLink to="/">My Reviews</NavLink>
                        <NavLink to="/">My Account</NavLink>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Commonleft;
