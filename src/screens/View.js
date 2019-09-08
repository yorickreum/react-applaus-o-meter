import React, {Component} from "react";
import Fishmeter from "../components/Fishmeter";
import CompetitionCards from "../components/CompetitionCards";
import CalibrationCards from "../components/CalibrationCards";
import Competition from "../entities/Competition";
import '../styles/frontend.css';
import {connect} from "react-redux";

class View extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCalibrating: false,
            rating: 0.0
        };
    }

    componentDidMount() {
        document.title = "View | Applaus-O-Meter";
    }

    render() {
        let rating = 0;
        const activeCompetitor = this.props.activeCompetitor;
        if (activeCompetitor) {
            rating = this.props.ratings[activeCompetitor];
        }
        return (
            <div id="frontend" className="container-fluid py-2 rounded-0">
                <div id="graphic" className="d-flex justify-content-center">
                    <Fishmeter rating={rating}/>
                </div>
                <div id="information">
                    {
                        this.state.isCalibrating ?
                            <CalibrationCards/> :
                            <CompetitionCards/>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    activeCompetitor: state.voting.activeCompetitor,
    ratings: state.voting.ratings,
});

export default connect(mapStateToProps)(View)
