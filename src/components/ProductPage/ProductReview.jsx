import React, { Component, Fragment } from 'react';
import avatar from '../../assets/images/avatar.png'

class Productreview extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div className="review-container">
                        <h1>Reviews</h1>
                        <div className="reviews-main-container">
                            <div className="reviews-profile">
                                <div className="reviews-profile-pic">
                                    <img src={avatar} alt=""></img>
                                </div>
                                <div className="reviews-profile-names">
                                    <h3>Arafat Rony</h3>
                                    <h6>07 January, 2021</h6>
                                </div>
                            </div>
                            <div className="reviews-text">
                                <span>ক্লাস এইটে পড়ুয়া ছেলের জন্য অর্ডার করেছিলাম। বেশ মনোযোগ দিয়েই সে পড়েছে। মনে হচ্ছে, বইটি তাকে বিশ্বকে নতুনভাবে দেখতে শিখিয়েছি। গত দুদিন ধরে সে এই বই এর নানা বিষয় নিয়ে প্রশ্ন করছে মাঝে মাঝে। লেখকের কাছে অনুরোধ, শুধু পৃথিবীর ইতিহাস নিয়ে এভাবে বিশ্লেষণধর্মী আরো বই লিখুন বিস্তারিত আকারে। শিশুদের জন্যও লিখুন। </span>
                            </div>

                            <div className="was-this">
                                <span>Was this review helpful to you?</span>
                            </div>
                            <div className="review-icon">
                                <span className="r-like"><i className="far fa-thumbs-up"></i></span>
                                <span className="r-dislike"><i className="far fa-thumbs-down"></i></span>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Productreview;
