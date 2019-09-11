import {store} from "../store";

/**
 *
 * @param name
 * @returns {boolean}
 */
export function doesCalibrationCompetitorNameAlreadyExists(name) {
    let exists = false;
    store.getState().voting.calibrationCompetitors.forEach(function (comp) {
        if (name === comp.name) {
            exists = true;
        }
    });
    return exists;
}

/**
 *
 * @param name
 * @returns {boolean}
 */
export function doesCompetitorNameAlreadyExists(name) {
    let exists = false;
    const competitors = store.getState().voting.competitors;
    for (let key in competitors) {
        if (competitors.hasOwnProperty(key)) {
            if (name === key) {
                exists = true;
            }
        }
    }
    return exists;
}

export function getLeader() {
    const competitors = store.getState().voting.competitors.allIds;
    let leadingCompetitor = null;
    if (competitors[0]) {
        leadingCompetitor = competitors[0];
        competitors.forEach(function (compKey) {
            if (getRatingFromKey(compKey) >= getRatingFromKey(leadingCompetitor)) {
                leadingCompetitor = compKey;
            }
        });
    }
    if (leadingCompetitor && getRatingFromKey(leadingCompetitor) !== 0) {
        return leadingCompetitor;
    } else {
        return null;
    }
}

export function getRatingFromKey(competitorKey: string) {
    const state = store.getState();
    const competitor = state.voting.competitors.byId[competitorKey];
    if (competitor.levels.length === 0) {
        return 0;
    } else {
        let levelSum = competitor.levels.reduce((pv, cv) => pv + cv, 0);
        return (levelSum / competitor.levels.length) / state.administration.maxVol;
    }
}

export function getRatingFromVolume(volume: number) {
    const state = store.getState();
    if (volume) {
        return volume / state.administration.maxVol;
    }
}
