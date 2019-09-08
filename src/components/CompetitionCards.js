import React from 'react';
import {connect} from "react-redux";
import CompetitorCard from "./CompetitorCard";


function CompetitionCards(props) {
    return (
        <div id="competitionCardContainer" className="container-fluid px-5">
            <div className="row justify-content-center">
                {props.competitorKeys.map(
                    competitorKey => <CompetitorCard competitorKey={competitorKey}/>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    competitorKeys: state.voting.competitors.allIds,
});

export default connect(mapStateToProps)(CompetitionCards)


