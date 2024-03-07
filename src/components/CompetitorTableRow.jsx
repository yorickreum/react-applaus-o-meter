import React, {Component} from 'react';
import RecordingDot from "./RecordingDot";
import {connect} from "react-redux";
import {
    deleteCompetitor,
    hideCompetitor,
    resetCompetitor,
    showCompetitor,
    startCompetitor
} from "../actions";
import {
    CartesianGrid,
    ReferenceLine,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {getAverageVolumeFromKey, getRatingFromKey} from "../utils/competitionUtils";
import Button from "react-bootstrap/Button";
import {Modal} from "react-bootstrap";
import Form from "react-bootstrap/Form";

class CompetitorTableRow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleShow = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    };

    changeVisibility = () => {
        const competitorKey = this.props.competitor;
        const competitor = this.props.competitors.byId[competitorKey];
        if (competitor.isVisible) {
            this.props.dispatch(hideCompetitor(competitorKey))
        } else {
            this.props.dispatch(showCompetitor(competitorKey))
        }
    };

    render() {
        const competitorKey = this.props.competitor;
        const competitor = this.props.competitors.byId[competitorKey];
        const rating = getRatingFromKey(competitorKey);
        let data = [];
        competitor.levels.forEach((value, index) => {
            data = [
                ...data,
                {
                    timeLeft: competitor.timeLefts[index],
                    level: value
                }
            ]
        });
        return (
            <React.Fragment>
                <tr key={competitorKey} className={this.props.addClass}>
                    <td>
                        <RecordingDot isActive={competitorKey === this.props.activeCompetitor}/>
                    </td>
                    <td>{competitorKey}</td>
                    <td>{rating ? rating.toFixed(4) : '–'}</td>
                    <td>{competitor.timeLefts && competitor.timeLefts.length > 0
                        ? (competitor.timeLeft / 1000).toFixed(3) : '–'}
                    </td>
                    <td>
                        <Form>
                            <Form.Check
                                type="checkbox" /*why switch doesnt work?*/
                                checked={competitor.isVisible}
                                onChange={this.changeVisibility}
                            />
                        </Form>
                    </td>
                    <td>
                        {(this.props.ratings && this.props.ratings.hasOwnProperty(competitorKey))
                            ? (
                                <React.Fragment>
                                    <Button variant="info" onClick={this.handleShow}>Show Data</Button>
                                    <Modal
                                        show={this.state.showModal}
                                        size={"xl"}
                                        onHide={this.handleShow}
                                        width={900}
                                        centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title style={{color: 'black'}}>Data
                                                of {competitor.name}</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <ResponsiveContainer width="100%" height={400}>
                                                <ScatterChart>
                                                    <CartesianGrid strokeDasharray="1 1"/>
                                                    <XAxis dataKey="timeLeft" name="timeLeft"/>
                                                    <YAxis dataKey="level" name="level"/>
                                                    <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                                                    <Scatter name="Levels" data={data} fill="#8884d8"/>
                                                    <ReferenceLine y={getAverageVolumeFromKey(competitorKey)} stroke="red"/>
                                                </ScatterChart>
                                            </ResponsiveContainer>
                                        </Modal.Body>
                                    </Modal>
                                </React.Fragment>
                            )
                            : '–'
                        }
                    </td>
                    <td>
                        <input type="button" className="form-control btn btn-primary" value="Start"
                               onClick={() => this.props.dispatch(startCompetitor(competitorKey, this.props.measureDuration))}/>
                    </td>
                    <td>
                        <input type="button" className="form-control btn btn-warning" value="Reset"
                               onClick={() => this.props.dispatch(resetCompetitor(competitorKey))}/>
                    </td>
                    <td>
                        <input type="button" className="form-control btn btn-danger" value="Delete"
                               onClick={() => this.props.dispatch(deleteCompetitor(competitorKey))}/>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    competitors: state.voting.competitors,
    activeCompetitor: state.voting.activeCompetitor,
    ratings: state.voting.ratings,
    measureDuration: state.administration.duration
});

export default connect(mapStateToProps)(CompetitorTableRow)
