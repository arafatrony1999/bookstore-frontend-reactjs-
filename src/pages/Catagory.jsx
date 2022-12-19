import React, { Component, Fragment } from 'react';
import Catagoryleft from '../components/Catagory/CatagoryLeft';
import Catagoryright from '../components/Catagory/CatagoryRight';

class Catagory extends Component {
    componentDidMount(){
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <section className="container">
                    <div className="flex-container">


                        <Catagoryleft/>
                        <Catagoryright/>


                    </div>
                </section>

            </Fragment>
        );
    }
}

export default Catagory;
