import React, { Component, Fragment } from 'react';
import Commonleft from '../components/ProfilePage/CommonLeft';
import Profilerightinfo from '../components/ProfilePage/ProfileRightInfo';

class Profilepage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
            <section className="container">
                <div className="profile-section">
                    <Commonleft/>
                    <Profilerightinfo/>
                </div>
            </section>
            </Fragment>
        );
    }
}

export default Profilepage;
