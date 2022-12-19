import React, { Component,Fragment } from 'react';
import Firsthomepagesection from '../components/HomePage/FirstHomepageSection';
import Intro from '../components/HomePage/Intro';
import Secoundhomepagesection from '../components/HomePage/SecoundHomepageSection';
import ThirdHomepageSection from '../components/HomePage/ThirdHomepageSection';
import Lasthomepagesection from '../components/HomePage/LastHomepageSection';
import MyCarousel from '../components/HomePage/MyCarousel';

class Homepage extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <MyCarousel/>
                <Intro/>
                <Firsthomepagesection/>
                <Secoundhomepagesection/>
                <ThirdHomepageSection/>
                <Lasthomepagesection/>
            </Fragment>
        );
    }
}

export default Homepage;
