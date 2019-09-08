import React, {Component} from 'react'
import {connect} from "react-redux";

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
                    {this.props.calibrationCompetitors && Object.keys(this.props.calibrationCompetitors).length > 0 && Object.keys(this.props.calibrationCompetitors).map(
                        competitorKey =>
                            <React.Fragment key={competitorKey}>
                                {/*<CalibrationCompetitorTableRow competitor={competitor} addClass={((competitor === getLeader()) ? 'text-danger' : '')} />*/}
                            </React.Fragment>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    calibrationCompetitors: state.voting.calibrationCompetitors,
});

export default connect(mapStateToProps)(CalibrationTable)
