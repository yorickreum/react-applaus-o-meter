import React from 'react';

function CompetitionJsonImportBtn(props) {
    return (
        <label className="d-inline-block btn btn-info btn-file my-0 ml-1">
            Import file <input type="file" id="jsonFileInput" style={{display: 'none'}} onChange={ (e) => props.competition.reviveFromFileList(e.target.files) } />
        </label>
    )
}

export default CompetitionJsonImportBtn