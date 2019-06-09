import {store} from "../store";

/**
 *
 * @param name
 * @returns {boolean}
 */
export function doesCalibrationCompetitorNameAlreadyExists(name) {
    let exists = false;
    store.getState().administration.calibrationCompetitors.forEach(function (comp) {
        if (name === comp.name) {
            exists = true;
        }
    });
    return exists;
}

export function getLeader() {
    const competitors = store.getState().administration.competitors;
    let leadingCompetitor = null;
    if (competitors[0]) {
        leadingCompetitor = competitors[0];
        competitors.forEach(function (comp, index, comps) {
            if (comp.rating >= leadingCompetitor.rating) {
                leadingCompetitor = comp;
            }
        });
    }
    if (leadingCompetitor && leadingCompetitor.rating !== 0) {
        return leadingCompetitor;
    }
    else {
        return null;
    }
}