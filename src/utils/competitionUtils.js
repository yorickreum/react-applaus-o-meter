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
    const competitors = store.getState().voting.competitors.byId;
    if (competitors) {
        for (const key of Object.keys(competitors)) {
            if (competitors[key].name === name) {
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

export function getVisibleLeader() {
    const competitorKeys = store.getState().voting.competitors.allIds;
    let leadingCompetitor = null;
    if (competitorKeys[0] && isVisibleFromKey(competitorKeys[0])) {
        leadingCompetitor = competitorKeys[0];
        competitorKeys.forEach(function (compKey) {
            if (isVisibleFromKey(compKey)
                && getRatingFromKey(compKey) >= getRatingFromKey(leadingCompetitor)) {
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

export function isVisibleFromKey(competitorKey:string) {
    const competitors = store.getState().voting.competitors.byId;
    return competitors[competitorKey] && competitors[competitorKey].isVisible;
}

export function getRatingFromKey(competitorKey: string) {
    const state = store.getState();
    const competitor = state.voting.competitors.byId[competitorKey];
    if (competitor.levels.length === 0) {
        return 0;
    } else {
        let levelSum = competitor.levels.reduce((pv, cv) => pv + cv, 0);
        const avgVol = (levelSum / competitor.levels.length);
        return getRatingFromVolume(avgVol);
    }
}

export function getRatingFromVolume(volume: number) {
    const state = store.getState();
    if (volume) {
        return (volume / state.administration.maxVol);
    }
}

export function getAverageVolumeFromKey(competitorKey: string) {
    const state = store.getState();
    const competitor = state.voting.competitors.byId[competitorKey];
    if (competitor.levels.length === 0) {
        return 0;
    } else {
        let levelSum = competitor.levels.reduce((pv, cv) => pv + cv, 0);
        return (levelSum / competitor.levels.length);
    }
}
