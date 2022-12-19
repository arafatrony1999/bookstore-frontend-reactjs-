import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import Iframe from 'react-iframe';

class Footer extends Component {
    render() {
        return (
            <Fragment>
                
                <section className="devide-area">

                </section>

                <section>
                    <div className="footer container">
                        <div className="footer-left">
                            <div className="footer-left-row">
                                <div className="footer-left-icon">
                                    <i className="react-i fas fa-map-marker-alt"></i>
                                </div>
                                <div className="footer-left-text">
                                    153/2 Arambag, Dhaka, Bangladesh
                                </div>
                            </div>
                            
                            <div className="footer-left-row">
                                <div className="footer-left-icon">
                                    <i className="react-i fas fa-phone-alt"></i>
                                </div>
                                <div className="footer-left-text">
                                    Phone: (+88) 01879923111
                                </div>
                            </div>
                            
                            <div className="footer-left-row">
                                <div className="footer-left-icon">
                                    <i className="react-i far fa-envelope"></i>
                                </div>
                                <div className="footer-left-text">
                                    Email: arafat.rony1999@gmail.com
                                </div>
                            </div>

                            <div className="footer-left-row">
                                <div className="footer-icons">
                                    <NavLink className="react-anchor" to="/"><i style={{marginLeft: "0"}} className="react-i fab fa-facebook-f" aria-hidden="true"></i></NavLink>
                                    <NavLink className="react-anchor" to="/"><i className="react-i fab fa-facebook-messenger" aria-hidden="true"></i></NavLink>
                                    <NavLink className="react-anchor" to="/"><i className="react-i fab fa-whatsapp"></i></NavLink>
                                    <NavLink className="react-anchor" to="/"><i className="react-i fab fa-twitter" aria-hidden="true"></i></NavLink>
                                    <NavLink className="react-anchor" to="/"><i className="react-i fab fa-instagram" aria-hidden="true"></i></NavLink>
                                </div>
                            </div>
                        </div>

                        <div className="footer-right">
                            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.428296390832!2d90.41687801493273!3d23.73210168459845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b95a813ddb7f%3A0xff9d8cb7577907b0!2zQWxvciBBbmlyYmFuIEZvdW5kYXRpb24g4KaG4Kay4KeL4KawIOCmheCmqOCmv-CmsOCnjeCmrOCmvuCmoyDgpqvgpr7gpongpqjgp43gpqHgp4fgprbgpqg!5e0!3m2!1sen!2sbd!4v1625831518417!5m2!1sen!2sbd" width="100%" height="300px" style={{border:"0"}} allowfullscreen="" loading="lazy"></Iframe>
                        </div>
                        
                    </div>

                    <div className="footer-copyright">
                        <span>Copyright © 2018 Book Store. All Rights Reserved.</span>
                    </div>

                </section>
            </Fragment>
        );
    }
}

export default Footer;
