import React, {Component} from 'react';
import RecordingDot from "./RecordingDot";


function CalibrationCard(props) {
    const competitor = props.competitor;
    let cardBgClass = "bg-info";
    if( props.competition.getLeader() === competitor ) {
        cardBgClass = "bg-success";
    }
    return (
        <div className="col-3" key={competitor.name}>
            <div className={"card text-white text-center " + cardBgClass}>
                <div className="card-body">
                    <div>
                        <RecordingDot isActive={competitor.isActive}/>
                    </div>
                    <h2 className="card-title text-warning">{competitor.name}</h2>
                    <div className="card-text">
                        <p className="h2">Verbleibende Zeit:<br/>{parseFloat(competitor.timeLeft / 1000).toFixed(1)} Sekunden</p>
                        <p className="h2">Maximum: {parseFloat(competitor.getMax()).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

class CalibrationCards extends Component {
    render() {
        return (
            <div id="competitionCardContainer" className="container">
                <div className="row justify-content-center">
                    <h3 className="bg-danger text-white text-center w-100 p-2">CALIBRATION</h3>
                    {this.props.competition.calibrationCompetitors.map(
                        competitor => <CalibrationCard competition={this.props.competition} competitor={competitor} />
                    )}
                </div>
            </div>
        )
    }
}

export default CalibrationCards


