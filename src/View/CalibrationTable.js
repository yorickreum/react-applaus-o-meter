import React, {Component} from 'react'
import CalibrationCompetitorTableRow from "./CalibrationCompetitorTableRow";

class CalibrationTable extends Component {
    render() {
        return (
            <div>
                Leading competitor is displayed red.
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <td>Status</td>
                        <td>Name</td>
                        <td>Duration</td>
                        <td>measured min volume</td>
                        <td>measured max volume</td>
                        <td>measured average</td>
                        <td>Rating</td>
                        <td>Start</td>
                        <td>Reset</td>
                        <td>Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.competition.calibrationCompetitors.map(
                        competitor =>
                            <React.Fragment key={competitor.name}>
                                <CalibrationCompetitorTableRow competitor={competitor} addClass={((competitor === this.props.competition.getLeader()) ? 'text-danger' : '')} />
                            </React.Fragment>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CalibrationTable