import React, {Component} from 'react'
import CompetitorTableRow from "./CompetitorTableRow";
import {connect} from "react-redux";
import {getLeader} from "../utils/competitionUtils";

class CompetitionTable extends Component {
    render() {
        return (
            <div>
                Leading competitor is displayed red.
                <table className="table table-dark   table-striped table-hover">
                    <thead>
                    <tr>
                        <td>Status</td>
                        <td>Name</td>
                        <td>Rating</td>
                        <td>Time left</td>
                        <td>Visibility</td>
                        <td>Data</td>
                        <td>Start</td>
                        <td>Reset</td>
                        <td>Delete</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.competitors.byId && Object.keys(this.props.competitors.byId).length > 0 && Object.keys(this.props.competitors.byId).map(
                        key =>
                            <React.Fragment key={key}>
                                <CompetitorTableRow competitor={key} addClass={((key === getLeader()) ? 'text-danger' : '')} />
                            </React.Fragment>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    competitors: state.voting.competitors,
});

export default connect(mapStateToProps)(CompetitionTable);
