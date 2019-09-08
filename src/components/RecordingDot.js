import React from "react";

const recordingDotStyle = {
    dot: {
        textShadow: "0 0 8px #404040",
    }
};

function RecordingDot(props) {
    const isActive = props.isActive;
    const activeClass = isActive ? "text-danger" : "text-info";
    return <span className={activeClass} style={recordingDotStyle.dot}>&#9673;</span>;
}

export default RecordingDot
