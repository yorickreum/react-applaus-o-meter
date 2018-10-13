import React, {Component} from 'react';
import Competition from "../Model/Competition";

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
            <tr key={competitor.name}>
                <td>{competitor.name}</td>
                <td>{competitor.rating}</td>
                <td>{competitor.timeLeft}</td>
                <td><input type="button" className="form-control btn btn-info" onClick={competitor.measure} value="Start"/>
                </td>
                <td><input type="button" className="form-control btn btn-warning" onClick={(() => competitor.reset() )}
                           value="Reset"/></td>
                <td><input type="button" className="form-control btn btn-danger" onClick={( () => Competition.removeCompetitor(competitor) )}
                           value="Delete"/></td>
            </tr>
        );
    }
}


export default CompetitorTableRow