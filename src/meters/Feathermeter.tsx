import React from "react";
import {SvgLoader, SvgProxy} from 'react-svgmt';
import Confetti from 'react-confetti'
import feather from '../assets/feather-meter.svg';


function Feathermeter(props) {
    let redgreen = 255;
    if(props.rating > 0.01) {
        let redgreen = 255 - (parseFloat(props.rating) * 255);
    }
    const isActive = props.isActive;
    return (
        <div className="d-flex flex-column-reverse p-4">
                <Confetti
                    // run={isActive}
                    numberOfPieces={isActive ? undefined : 5}
                    width={props.width}
                    height={props.height}
                    gravity={isActive ? props.rating : 0.01}
                    wind={isActive ? props.rating * 0.1 : 0}
                    recycle={true}
                    canvasRef={undefined}
            />
            <SvgLoader path={feather} height="500px">
                <SvgProxy selector="#feather" fill={"rgb(" + redgreen +  ", " + redgreen + ", 255)"} />
                <SvgProxy selector="#quill" fill="rgb(0,0,255)" />
            </SvgLoader>
        </div>
    );
}

export default Feathermeter;
