import React from 'react';
import {connect} from "react-redux";


function Footer(props) {
    return(
        <footer className="container-fluid py-1 px-5 text-right">
            Applaus-O-Meter | {props.title} | mail@yorickreum.de
        </footer>
    );
}

const mapStateToProps = state => ({
    title: state.administration.title
});

export default connect(mapStateToProps)(Footer)
