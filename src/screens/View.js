import React from "react";
import CompetitionCards from "../components/CompetitionCards";
import '../styles/frontend.css';
import {connect} from "react-redux";
import Castlemeter from "../meters/Castlemeter";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet";

function View(props) {
    let rating = 0;
    let isActive = false;
    const activeCompetitor = props.activeCompetitor;
    if (activeCompetitor) {
        isActive = true;
        rating = props.ratings[activeCompetitor];
    }
    return (
        <React.Fragment>
            <Helmet>
                <title>View | Applaus-O-Meter</title>
            </Helmet>
            {!props.showBlank &&
            <React.Fragment>
                <div id="frontend" className="container-fluid py-2 rounded-0">
                    <div id="graphic" className="d-flex justify-content-center">
                        <Castlemeter isActive={isActive} rating={rating}/>
                    </div>
                    <div id="information">
                        <CompetitionCards/>
                    </div>
                </div>
                <Footer/>
            </React.Fragment>}
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    showBlank: state.administration.activeCompetitor,
    activeCompetitor: state.voting.activeCompetitor,
    ratings: state.voting.ratings,
});

export default connect(mapStateToProps)(View)
