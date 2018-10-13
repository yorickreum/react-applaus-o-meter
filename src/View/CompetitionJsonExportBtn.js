import React from 'react';

function CompetitionJsonExportBtn (props) {
    return(
        <a href={props.competition.getJsonDateUri()} download="export.json" className="btn btn-info">Export</a>
    )
}
export default CompetitionJsonExportBtn