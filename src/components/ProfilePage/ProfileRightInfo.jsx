import React, { Component, Fragment } from 'react';
import {Form} from 'react-bootstrap';

class Profilerightinfo extends Component {
    render() {
        return (
            <Fragment>
                <div className="profile-right">
                    <h2>Personal Information</h2>
                    <div className="profile-form">
                        <form autoComplete="false" method="post" action="">
                            <input type="hidden" autoComplete="false" name="hidden"></input>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="firstName" className="form-control" id="lastName"
                                        placeholder="First Name"></input>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName" className="form-control" id="lastName"
                                        placeholder="Last Name"></input>
                                </div>
                            </div>
                            <label htmlFor="birthDate">Date of Birth</label>
                            <input className="form-control" type="date" name="dateOfBirth" placeholder="dd-mm-yyyy" value="1999-10-06"
                                min="1997-01-01" max="2030-12-31"></input>
                                
                            <div className="form-group">
                                <label htmlFor="Phone">Phone</label>
                                <input type="text" className="form-control" name="phoneNumber" placeholder="Phone Number"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input type="email" className="form-control" name="emailAddr" placeholder="Email Address"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="CompanyName">Company name (optional)</label>
                                <input type="text" name="CompanyName" className="form-control" id="CompanyName"></input>
                            </div>
                                <div className="form-group">
                                    <label htmlFor="countryName">Country</label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="nl">Select a Country...</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">Bangladesh</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                    </Form.Select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="streerAddr">Street address</label>
                                    <input type="text" className="form-control" id="streerAddr" placeholder="House Number and street name"></input>
                                    <p></p>
                                    <input type="text" className="form-control" id="streerAddr2" placeholder="Apartment, suite, unit etc. (optional)"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="districtName">District</label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="nl">Select a Country...</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">Dhaka</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                    </Form.Select>
                                </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress2">Town / City</label>
                                <input type="text" name="townOrCity" className="form-control" id="streerAddr3"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Postcode">Postcode / ZIP (optional)</label>
                                <input type="text" name="zipCode" className="form-control" id="post-zip"></input>
                            </div>

                            <button className='btn btn-info my-5'>Save Info</button>
                            <p style={{color: "red"}}>Please don't click 'Save Info' button if you don't want to change your profile info.</p>
                        </form>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Profilerightinfo;
