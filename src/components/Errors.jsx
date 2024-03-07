import React from "react";
import {connect} from "react-redux";
import ErrorToast from "./ErrorToast";

function Errors(props) {
    return (
        <div aria-live="polite" aria-atomic="true"
             style={{
                 "position": "absolute",
                 "top": "2em",
                 "right": "2em",
                 "minWidth": "500px",
                 "minHeight": "200px"
             }}>
            <div style={{"position": "absolute", "top": "0", "right": "0"}}>
                {Object.keys(props.errors.byId).map(
                    errorKey => (
                        <ErrorToast key={errorKey}
                                    errorKey={errorKey}
                                    text={props.errors.byId[errorKey].text}
                                    time={props.errors.byId[errorKey].time}/>
                    )
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps)(Errors)
