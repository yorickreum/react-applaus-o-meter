import {combineReducers} from 'redux'

import {
    ADD_COMPETITOR,
    ADD_ERROR,
    DELETE_COMPETITOR,
    DISMISS_ALL_ERRORS,
    DISMISS_ERROR,
    HIDE_COMPETITOR,
    INITIATE_VOLUMEMETER,
    RESET_COMPETITOR,
    SAVE_VALUE,
    SET_DURATION,
    SET_MAXVOL,
    SET_TITLE,
    SHOW_COMPETITOR,
    START_RECORDING,
    STOP_RECORDING,
    SWITCH_BLANK,
    UPDATE_RATING
} from "./constants";

const initialStates = {
    errors: {
        byId: {}
    },
    control: {
        showBlank: false
    },
    administration: {
        title: 'Scheinfeld Slammt',
        maxVol: 1,
        duration: 10000
    },
    voting: {
        isInitialized: false,
        activeCompetitor: null,
        competitors: {
            byId: {},
            allIds: []
        },
        ratings: {}
    }
};

const administration = (state = initialStates.administration, action) => {
    switch (action.type) {
        case SET_TITLE:
            return {
                ...state,
                title: action.title
            };
        case SET_DURATION:
            return {
                ...state,
                duration: action.duration
            };
        case SET_MAXVOL:
            return {
                ...state,
                maxVol: action.maxVol
            };
        default:
            return state;
    }
};

const errors = (state = initialStates.errors, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.time.getTime()]: {
                        text: action.text,
                        time: action.time,
                    }
                }
            };
        case DISMISS_ALL_ERRORS:
            return {
                ...state,
                byId: {}
            };
        case DISMISS_ERROR:
            const byId = {...state.byId};
            byId[action.key] = undefined;
            Object.keys(byId).forEach(key => byId[key] === undefined ? delete byId[key] : '');
            return {
                ...state,
                byId
            };
        default:
            return state;
    }
};

const control = (state = initialStates.control, action) => {
    switch (action.type) {
        case SWITCH_BLANK:
            return {
                ...state,
                showBlank: !state.showBlank,
            };
        default:
            return state;
    }
};

const voting = (state = initialStates.voting, action) => {
    let ratings;
    switch (action.type) {
        case INITIATE_VOLUMEMETER:
            return {
                ...state,
                isInitialized: true
            };
        case ADD_COMPETITOR:
            return {
                ...state,
                activeCompetitor: (state.activeCompetitor === action.competitorKey ? null : state.activeCompetitor),
                competitors: {
                    byId: {
                        ...state.competitors.byId,
                        [action.competitorKey]: {
                            name: action.competitorKey,
                            isVisible: true,
                            startedRecording: null,
                            stoppedRecording: null,
                            levels: [],
                            timeLefts: [],
                            measureDuration: null,
                            timeLeft: null,
                            interval: null,
                        }
                    },
                    allIds: [...state.competitors.allIds, action.competitorKey]
                }
            };
        case DELETE_COMPETITOR:
            const byId = {...state.competitors.byId};
            byId[action.competitorKey] = undefined;
            Object.keys(byId).forEach(key => byId[key] === undefined ? delete byId[key] : '');
            ratings = {...state.ratings};
            ratings[action.competitorKey] = undefined;
            Object.keys(ratings).forEach(key => ratings[key] === undefined ? delete ratings[key] : '');
            return {
                ...state,
                competitors: {
                    ...state.competitors,
                    byId: {
                        ...byId
                    },
                    allIds: [
                        ...state.competitors.allIds.filter(key => key !== action.competitorKey),
                    ]
                },
                ratings
            };
        case START_RECORDING:
            return {
                ...state,
                activeCompetitor: action.competitorKey,
                competitors: {
                    ...state.competitors,
                    byId: {
                        ...state.competitors.byId,
                        [action.competitorKey]: {
                            ...state.competitors.byId[action.competitorKey],
                            interval: action.interval,
                            measureDuration: action.measureDuration,
                            startedRecording: action.startedRecording
                        }
                    }
                }
            };
        case RESET_COMPETITOR:
            ratings = {...state.ratings};
            ratings[action.competitorKey] = undefined;
            Object.keys(ratings).forEach(key => ratings[key] === undefined ? delete ratings[key] : '');
            return {
                ...state,
                activeCompetitor: (state.activeCompetitor === action.competitorKey ? null : state.activeCompetitor),
                competitors: {
                    ...state.competitors,
                    byId: {
                        ...state.competitors.byId,
                        [action.competitorKey]: {
                            ...state.competitors.byId[action.competitorKey],
                            isVisible: true,
                            startedRecording: null,
                            stoppedRecording: null,
                            levels: [],
                            timeLefts: [],
                            measureDuration: null,
                            timeLeft: null,
                            interval: null,
                        }
                    }
                },
                ratings
            };
        case SHOW_COMPETITOR:
            return {
                ...state,
                competitors: {
                    ...state.competitors,
                    byId: {
                        ...state.competitors.byId,
                        [action.competitorKey]: {
                            ...state.competitors.byId[action.competitorKey],
                            isVisible: true,
                        }
                    }
                }
            };
        case HIDE_COMPETITOR:
            return {
                ...state,
                competitors: {
                    ...state.competitors,
                    byId: {
                        ...state.competitors.byId,
                        [action.competitorKey]: {
                            ...state.competitors.byId[action.competitorKey],
                            isVisible: false,
                        }
                    }
                }
            };
        case SAVE_VALUE:
            return {
                ...state,
                competitors: {
                    ...state.competitors,
                    byId: {
                        ...state.competitors.byId,
                        [action.competitorKey]: {
                            ...state.competitors.byId[action.competitorKey],
                            timeLeft: action.timeLeft,
                            levels: [
                                ...state.competitors.byId[action.competitorKey].levels,
                                action.value
                            ],
                            timeLefts: [
                                ...state.competitors.byId[action.competitorKey].timeLefts,
                                action.timeLeft
                            ],
                        }
                    }
                }
            };
        case STOP_RECORDING:
            return {
                ...state,
                activeCompetitor: "",
                competitors: {
                    ...state.competitors,
                    byId: {
                        ...state.competitors.byId,
                        [action.competitorKey]: {
                            ...state.competitors.byId[action.competitorKey],
                            timeLeft: 0,
                            stoppedRecording: action.stoppedRecording,
                        }
                    }
                }
            };
        case UPDATE_RATING:
            return {
                ...state,
                ratings: {
                    ...state.ratings,
                    [action.competitorKey]: action.rating
                }
            };
        default:
            return state;
    }
};

export default combineReducers({
    control,
    administration,
    voting,
    errors,
})
