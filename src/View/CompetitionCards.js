import React, {Component} from 'react';
import RecordingDot from "./RecordingDot";


function CompetitorCard(props) {
    const competitor = props.competitor;
    let cardBgClass = "bg-info";
    if( false ) {
        cardBgClass = "bg-danger";
    }
    return (
        <div className="col-3" key={competitor.name}>
            <div className={"card text-white text-center " + cardBgClass}>
                <div className="card-body">
                    <div>
                        <RecordingDot isActive={competitor.isActive}/>
                    </div>
                    <h2 className="card-title text-warning">{competitor.name}</h2>
                    <div className="card-text">
                        <p>Verbleibende Zeit:<br/>{parseFloat(competitor.timeLeft / 1000).toFixed(1)} Sekunden</p>
                        <p className="h2">Wertung: {parseFloat(competitor.rating * 10).toFixed(1)}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

class CompetitionCards extends Component {
    render() {
        return (
            <div id="competitionCardContainer" className="container">
                <div className="row justify-content-center">
                    {this.props.competition.competitors.map(
                        competitor => <CompetitorCard competitor={competitor} />
                    )}
                </div>
            </div>
        )
    }
}

export default CompetitionCards


