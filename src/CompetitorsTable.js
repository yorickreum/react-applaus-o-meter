import React, {Component} from 'react'


class CompetitorsTable extends Component {
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
        let data = [];
        this.props.competitors.forEach(
            function (competitor, index) {
                data.push(
                    {
                        name: competitor.props.name,
                        rating: competitor.rating,
                        startBtn: <input type="button" className="form-control btn btn-info" onClick={( () => this.startCompetitor(competitor) )} value="Start"/>,
                        resetBtn: <input type="button" className="form-control btn btn-warning" onClick={( () => this.resetCompetitor(competitor) )} value="Reset"/>,
                        removeBtn: <input type="button" className="form-control btn btn-danger" onClick={( () => this.removeCompetitor(competitor) )} value="Delete"/>,
                    }
                )
            }.bind(this)
        );
        return (
            <div>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Start</th>
                        <th scope="col">Reset</th>
                        <th scope="col">Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(function (d) {
                            return (
                                <tr key={d.name}>
                                    <td>{d.name}</td>
                                    <td>{d.rating}</td>
                                    <td>{d.startBtn}</td>
                                    <td>{d.resetBtn}</td>
                                    <td>{d.removeBtn}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CompetitorsTable