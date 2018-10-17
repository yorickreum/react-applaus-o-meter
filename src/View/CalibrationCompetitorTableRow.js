import React, {Component} from 'react';
import Competition from "../Model/Competition";
import RecordingDot from "./RecordingDot";

class CompetitorTableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            competitor: this.props.competitor
        };
    }
    render() {
        let competitor = this.state.competitor;
        return (
            <tr key={competitor.name} className={this.props.addClass}>
                <td><RecordingDot isActive={competitor.isActive} /></td>
                <td>{competitor.name}</td>
                <td>{competitor.timeLeft/1000}</td>
                <td>{competitor.getMin()}</td>
                <td>{competitor.getMax()}</td>
                <td>{competitor.getAvg()}</td>
                <td>{competitor.rating}</td>
                <td><input type="button" className="form-control btn btn-info" onClick={competitor.measure} value="Start"/>
                </td>
                <td><input type="button" className="form-control btn btn-warning" onClick={competitor.reset}
                           value="Reset"/></td>
                <td><input type="button" className="form-control btn btn-danger" onClick={( () => Competition.removeCalibrationCompetitor(competitor) )}
                           value="Delete"/></td>
            </tr>
        );
    }
}


export default CompetitorTableRow