import React, {Component} from 'react';
import RecordingDot from "./RecordingDot";
import Competition from "../Model/Competition";
import {Wobble} from 'react-motions';


function CompetitorCard(props) {
    const competitor = props.competitor;
    let competitorNameClass = "text-primary";
    let cardBgClass = "bg-info";
    let ratingClass = "text-danger";
    if (props.competition.getLeader() === competitor) {
        cardBgClass = "bg-success";
        competitorNameClass = "text-secondary";
        ratingClass = "text-secondary";
    }
    let bounce = false;
    if( competitor.stoppedRecording > (Math.floor(Date.now()) - 1 * 1000) ) {
        bounce = true;
    }
    let card =
        <div className={"card text-white text-center " + cardBgClass}>
            <div className="card-body">
                <div>
                    <RecordingDot isActive={competitor.isActive}/>
                </div>
                <h2 className={"card-title " + competitorNameClass}>{competitor.name}</h2>
                <div className="card-text">
                    <p>Verbleibende Zeit:<br/>{parseFloat(competitor.timeLeft / 1000).toFixed(1)} Sekunden</p>
                    <p className={"h2 " + ratingClass}>Wertung: {parseFloat(competitor.rating * 10).toFixed(1)}</p>
                </div>
            </div>
        </div>;
    if (bounce) {
        return (
            <div className="col-3" key={competitor.name}>
                <Wobble>
                    {card}
                </Wobble>
            </div>
        )
    }
    else {
        return (
            <div className="col-3" key={competitor.name}>
                {card}
            </div>
        )
    }
}

class CompetitionCards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="competitionCardContainer" className="container-fluid px-5">
                <div className="row justify-content-center">
                    {this.props.competition.competitors.map(
                        competitor => <CompetitorCard key={competitor.name} competition={this.props.competition}
                                                      competitor={competitor} />
                    )}
                </div>
            </div>
        )
    }
}

export default CompetitionCards


