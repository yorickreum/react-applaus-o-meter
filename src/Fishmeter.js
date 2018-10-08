import {Component} from "react";
import fish from "./fish.svg";
import React from "react";

class Fishmeter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let fishstyle = {
            transformOrigin: '78.875% 50%',
            transform: 'translateX(-28.875%) rotate(' + this.props.rotate + 'deg)',
            height: '600px'
        };
        return(
            <img src={fish} className="fishmeter" alt="fish" width="400px" style={fishstyle}/>
        );
    };
}

export default Fishmeter;