import React, {Component} from "react";
import Fishmeter from "./Fishmeter";
import CompetitionCards from "./CompetitionCards";
import Competition from "../Model/Competition";
import './styles/frontend.css';

class Frontend extends Component {
    constructor(props) {
        super(props);

        let compParsed = JSON.parse(localStorage.getItem('competition'));
        if (compParsed != null) {
            Competition.revive(compParsed);
        }

        this.state = {
            competition: Competition,
        };

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
            this.forceUpdate();
        }
    }

    componentDidMount() {
        document.title = "View | Applaus-O-Meter";
    }

    render() {
        let activeCompetitor = this.state.competition.getActiveCompetitor();
        let rating = 0.0;
        // console.log( activeCompetitor );
        if (activeCompetitor) {
            rating = activeCompetitor.rating;
        }

        return (
            <div id="frontend" className="container p-2">
                <h2 className="text-center text-warning">Applaus-O-Meter</h2>
                <h1 className="text-center text-white bg-info rounded">Fishtival 2018</h1>
                <div id="graphic" className="d-flex justify-content-center">
                    <Fishmeter rating={rating} />
                </div>
                <div id="information">
                    <CompetitionCards competition={this.state.competition}/>
                </div>
            </div>
        )
    }
}

export default Frontend