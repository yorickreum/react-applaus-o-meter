import React from "react";
import RecordingDot from "./RecordingDot";
import {Wobble} from "react-motions";
import {connect} from "react-redux";
import {getLeader} from "../utils/competitionUtils";

function CompetitorCard(props) {
    const competitor = props.competitors[props.competitorKey];

    let competitorNameClass = "text-primary";
    let cardBgClass = "bg-info";
    let ratingClass = "text-secondary";
    if (getLeader() === props.competitorKey) {
        cardBgClass = "bg-success";
        competitorNameClass = "text-secondary";
        ratingClass = "text-secondary";
    }
    let bounce = false;
    if (competitor.stoppedRecording > (Math.floor(Date.now()) - 1 * 1000)) {
        bounce = true;
    }
    let card =
        <div className={"card text-white text-center " + cardBgClass}>
            <div className="card-body">
                <div>
                    <RecordingDot isActive={props.competitorKey === props.activeCompetitor}/>
                </div>
                <h2 className={"card-title " + competitorNameClass}>{competitor.name}</h2>
                <div className="card-text">
                    <p>
                        <span className="timeLeftText">Verbleibende Zeit:</span>
                        <br/>
                        {parseFloat(((competitor.timeLeft !== null) ? competitor.timeLeft : props.duration) / 1000).toFixed(1)} Sekunden
                    </p>
                    <p className={"btn btn-primary ratingText " + ratingClass}>
                        Wertung:&nbsp;
                        <span className="text-white">
                            {
                                props.ratings && props.ratings.hasOwnProperty(props.competitorKey)
                                    ? parseFloat(props.ratings[props.competitorKey] * 10).toFixed(2)
                                    : "–"
                            }
                        </span>
                    </p>
                </div>
            </div>
        </div>;
    if (competitor.isVisible) {
        if (bounce) {
            return (
                <div className="col-3" key={props.competitorKey}>
                    <Wobble>
                        {card}
                    </Wobble>
                </div>
            )
        } else {
            return (
                <div className="col-3" key={props.competitorKey}>
                    {card}
                </div>
            )
        }
    } else {
        return <React.Fragment/>
    }
}

const mapStateToProps = state => ({
    competitors: state.voting.competitors.byId,
    ratings: state.voting.ratings,
    activeCompetitor: state.voting.activeCompetitor,
    duration: state.administration.duration
});

export default connect(mapStateToProps)(CompetitorCard)
