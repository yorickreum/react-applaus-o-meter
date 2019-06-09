import React from "react";

function RecordingDot(props) {
    const isActive = props.isActive;
    if (isActive) {
        return <span className="text-danger">&#9673;</span>;
    }
    return <span className="text-danger">&nbsp;</span>;
}

export default RecordingDot