import React, {Component} from "react";
import Fishmeter from "../components/Fishmeter";
import CompetitionCards from "../components/CompetitionCards";
import CalibrationCards from "../components/CalibrationCards";
import Competition from "../entities/Competition";
import '../styles/frontend.css';

class Frontend extends Component {
    constructor(props) {
        super(props);

        let compParsed = JSON.parse(localStorage.getItem('competition'));
        if (compParsed != null) {
            Competition.revive(compParsed);
        }

        this.state = {
            competition: Competition,
            rating: 0.0
        };

        // this.interval = setInterval(() => this.tick(), 10); // measure every 10th ms

        this.onStorage = this.onStorage.bind(this);
    }

    componentWillMount() {
        if (window.addEventListener) {
            window.addEventListener("storage", this.onStorage, true);
        } else {
            window.attachEvent("onstorage", this.onStorage);
        }
    }

    onStorage(data) {
        let compParsed = JSON.parse(localStorage.getItem('competition'));
        if (compParsed != null) {
            Competition.revive(compParsed);
            let activeCompetitor = Competition.getActiveCompetitor();
            // console.log( activeCompetitor );
            if (activeCompetitor) {
                clearInterval(this.interval);
                this.setState({
                    rating: activeCompetitor.rating
                })
            }
            else if( Competition.getActiveCalibrationCompetitor() ) {
                this.setState({
                    rating: Competition.getActiveCalibrationCompetitor().rating
                })
            }
            this.forceUpdate();
        }
    }

    componentDidMount() {
        document.title = "View | Applaus-O-Meter";
    }

    render() {
        if (Competition.isCalibrating() || Competition.competitors.length === 0) {
            return (
                <div id="frontend" className="container-fluid py-2 rounded-0">
                    <div id="graphic" className="d-flex justify-content-center">
                        <Fishmeter rating={this.state.rating}/>
                    </div>
                    <div id="information">
                        <CalibrationCards competition={this.state.competition}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div id="frontend" className="container-fluid py-2 rounded-0">
                    <div id="graphic" className="d-flex justify-content-center">
                        <Fishmeter rating={this.state.rating}/>
                    </div>
                    <div id="information">
                        <CompetitionCards competition={this.state.competition}/>
                    </div>
                </div>
            )
        }
    }
}

export default Frontend