import React, { Component, Fragment } from 'react';

class Showtitle extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div className="page-title">
                        <h1>Cart</h1>
                        <div className="page-dir">
                            <span>Home</span>
                            <span> / </span>
                            <span className="current-pag">{this.props.title}</span>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Showtitle;
