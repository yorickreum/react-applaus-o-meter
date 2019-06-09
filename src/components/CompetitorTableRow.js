import React, {Component} from 'react';
import Competition from "../entities/Competition";
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
                <td>{competitor.rating}</td>
                <td>{competitor.timeLeft/1000}</td>
                <td><input type="button" className="form-control btn btn-info" onClick={competitor.measure} value="Start"/>
                </td>
                <td><input type="button" className="form-control btn btn-warning" onClick={competitor.reset}
                           value="Reset"/></td>
                <td><input type="button" className="form-control btn btn-danger" onClick={( () => Competition.removeCompetitor(competitor) )}
                           value="Delete"/></td>
            </tr>
        );
    }
}


export default CompetitorTableRow