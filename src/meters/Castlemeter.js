import React from "react";
import {SvgLoader, SvgProxy} from 'react-svgmt';
import castle from '../assets/castle.svg';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function Castlemeter(props) {
    const {width, height} = useWindowSize();
    let isActive = props.isActive;
    let rotation = - parseFloat(props.rating) * 90 - 45;

    return (
        <div className="d-flex flex-column-reverse p-4">
            {/*https://www.npmjs.com/package/react-confetti*/}
            <Confetti
                // run={isActive}
                numberOfPieces={isActive ? undefined : 5}
                width={width}
                height={height}
                gravity={isActive ? props.rating : 0.01}
                wind={props.rating * 0.5}
                recycle={true}
                canvasRef={undefined}
            />
            <SvgLoader path={castle} height={400} width={2000}>
                <SvgProxy selector="#rotmeter"
                          transform={"rotate(" + rotation + " 565.9 124)"}/>
            </SvgLoader>
        </div>
    );
}

export default Castlemeter;
