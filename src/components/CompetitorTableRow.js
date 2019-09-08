import React from 'react';
import RecordingDot from "./RecordingDot";
import {connect} from "react-redux";
import {deleteCompetitor, resetCompetitor, startCompetitor} from "../actions";
import {getRating} from "../utils/competitionUtils";

function CompetitorTableRow(props) {
    const competitorKey = props.competitor;
    const competitor = props.competitors.byId[competitorKey];
    return (
        <tr key={competitorKey} className={props.addClass}>
            <td>
                <RecordingDot isActive={competitorKey === props.activeCompetitor}/>
            </td>
            <td>{competitorKey}</td>
            <td>{(props.ratings && props.ratings.hasOwnProperty(competitorKey)) ? props.ratings[competitorKey].toFixed(4) : '–'}</td>
            <td>{competitor.timeLeft ? (competitor.timeLeft / 1000).toFixed(3) : '–'}</td>
            <td>
                <input type="button" className="form-control btn btn-info" value="Start"
                       onClick={() => props.dispatch(startCompetitor(competitorKey, props.measureDuration))}/>
            </td>
            <td>
                <input type="button" className="form-control btn btn-warning" value="Reset"
                       onClick={() => props.dispatch(resetCompetitor(competitorKey))}/>
            </td>
            <td>
                <input type="button" className="form-control btn btn-danger" value="Delete"
                       onClick={() => props.dispatch(deleteCompetitor(competitorKey))}/>
            </td>
        </tr>
    );
}

const mapStateToProps = state => ({
    competitors: state.voting.competitors,
    activeCompetitor: state.voting.activeCompetitor,
    ratings: state.voting.ratings,
    measureDuration: state.administration.duration
});

export default connect(mapStateToProps)(CompetitorTableRow)
