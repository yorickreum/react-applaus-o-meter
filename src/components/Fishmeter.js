import React from "react";
import {SvgLoader, SvgProxy} from 'react-svgmt';
import fish from '../assets/fish.svg';


function Fishmeter(props) {
    const meterconatainerstyle = {};
    let rotation = parseFloat(props.rating) * 180;
    return (
        <div className="d-flex flex-column-reverse p-4" style={meterconatainerstyle}>
            {/*<img src={fish} className="fishmeter" alt="fish" width="400px" style={fishstyle}/>*/}
            <SvgLoader path={fish} height="500px">
                <SvgProxy selector="#svgmeter" transform={"rotate(" + rotation + " 250.1 83.1)"}/>
            </SvgLoader>
        </div>
    );
}

export default Fishmeter;
