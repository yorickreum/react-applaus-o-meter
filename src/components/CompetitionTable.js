import React, {Component} from 'react'
import CompetitorTableRow from "./CompetitorTableRow";
import {connect} from "react-redux";
import {getLeader} from "../utils/competitionUtils";

class CompetitionTable extends Component {
    render() {
        return (
            <div>
                Leading competitor is displayed red.
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <td>Status</td>
                        <td>Name</td>
                        <td>Rating</td>
                        <td>Time left</td>
                        <td>Start</td>
                        <td>Reset</td>
                        <td>Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.competitors.map(
                        competitor =>
                            <React.Fragment key={competitor.name}>
                                <CompetitorTableRow competitor={competitor} addClass={((competitor === getLeader()) ? 'text-danger' : '')} />
                            </React.Fragment>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    competitors: state.administration.competitors,
});

export default connect(mapStateToProps)(CompetitionTable);