import React from "react";
import {SvgLoader, SvgProxy} from 'react-svgmt';
import fish from '../assets/fish.svg';


function Fishmeter(props) {
    let rotation = parseFloat(props.rating) * 180;
    return (
        <div className="d-flex flex-column-reverse p-4">
            <SvgLoader path={fish} height="500px">
                <SvgProxy selector="#rotmeter" transform={"rotate(" + rotation + " 172.2 35)"}/>
            </SvgLoader>
        </div>
    );
}

export default Fishmeter;
