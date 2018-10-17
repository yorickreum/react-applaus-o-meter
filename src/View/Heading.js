import React from "react";
import logo from './fishtival_logo_yellow_white.svg';

function Heading(props) {
    return(
        <div className="container pt-2">
            <h2 className="text-center text-warning">Applaus-O-Meter</h2>
            <h1 className="text-center text-white bg-primary rounded py-1">Fishtival 2018</h1>
            {/*<h1 className="text-center text-white bg-primary rounded p-1">*/}
                {/*<img src={logo} height="75"/>*/}
            {/*</h1>*/}
        </div>
    )
}

export default Heading