import React, {Component} from 'react'
import CompetitorTableRow from "./CompetitorTableRow";

class CompetitionTable extends Component {
    render() {
        return (
            <div>
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
                    {this.props.competition.competitors.map(
                        competitor =>
                            <React.Fragment key={competitor.name}>
                                <CompetitorTableRow competitor={competitor}/>
                            </React.Fragment>)
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CompetitionTable