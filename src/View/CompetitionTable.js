import React, {Component} from 'react'
import CompetitorTableRow from "./CompetitorTableRow";


class CompetitionTable extends Component {
    constructor(props) {
        super(props);
        this.startCompetitor = this.startCompetitor.bind(this);
        this.resetCompetitor = this.resetCompetitor.bind(this);
        this.removeCompetitor = this.removeCompetitor.bind(this);
    }

    startCompetitor(competitor) {
        this.props.startCallback(competitor);
    }

    resetCompetitor(competitor) {
        this.props.setCallback(competitor, 0.0);
    }

    removeCompetitor(competitor) {
        this.props.removeCallback(competitor);
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Rating</td>
                        <td>Start</td>
                        <td>Time left</td>
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