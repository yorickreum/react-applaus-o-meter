import React from "react";
import {connect} from "react-redux";

// import logo from './fishtival_logo_yellow_white.svg';

function Heading(props) {
    return(
        <div className="container-fluid pt-2">
            <h2 className="text-center text-warning">Applaus-O-Meter</h2>
            <h1 id="mainHeading" className="text-center text-white py-1">{props.title}</h1>
            {/*<h1 className="text-center text-white bg-primary rounded p-1">*/}
                {/*<img src={logo} height="75"/>*/}
            {/*</h1>*/}
        </div>
    )
}

const mapStateToProps = state => ({
    title: state.administration.title
});

export default connect(mapStateToProps)(Heading)
