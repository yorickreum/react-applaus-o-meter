import {getRatingFromKey} from "./utils/competitionUtils";
import {store} from "./store";
import {
    ADD_COMPETITOR,
    DELETE_COMPETITOR,
    HIDE_COMPETITOR,
    RESET_COMPETITOR,
    SAVE_VALUE,
    SET_DURATION,
    SET_MAXVOL,
    SET_TITLE,
    SWITCH_BLANK,
    SHOW_COMPETITOR,
    START_RECORDING,
    STOP_RECORDING,
    UPDATE_RATING
} from "./constants";
import VolumemeterUtils from "./utils/volumemeterUtils";


export const switchBlank = () => ({
    type: SWITCH_BLANK,
});

export const addCompetitor = (competitorKey: string) => ({
    type: ADD_COMPETITOR,
    competitorKey
});

export const deleteCompetitor = (competitorKey: string) => {
    clearInterval(
        store.getState().voting.competitors.byId[competitorKey].interval
    );
    return ({
        type: DELETE_COMPETITOR,
        competitorKey
    });
};

export const startCompetitor = (competitorKey: string) => {
    return (dispatch, getState) => {
        const state = getState();

        console.log(competitorKey + ' starts measuring!');
        console.log('duration: ' + state.administration.duration);

        let timestamp = Math.floor(Date.now());
        const startedRecording = parseInt(timestamp, 10);

        const interval = setInterval(
            () => {
                console.log("going to record value for: " + competitorKey)
                dispatch(recordValue(competitorKey))
            },
            10 // ms, normally 10
        );

        dispatch(startRecording(
            competitorKey,
            interval,
            state.administration.duration,
            startedRecording,
            true
        ));
    }
};

export const resetCompetitor = (competitorKey: string) => {
    clearInterval(
        store.getState().voting.competitors.byId[competitorKey].interval
    );
    return ({
        type: RESET_COMPETITOR,
        competitorKey
    });
};

export const showCompetitor = (competitorKey: string) => ({
    type: SHOW_COMPETITOR,
    competitorKey
});

export const hideCompetitor = (competitorKey: string) => ({
    type: HIDE_COMPETITOR,
    competitorKey
});

export const startRecording
    = (competitorKey: string,
       interval,
       duration: number,
       startedRecording: Date,
       isActive: boolean) => ({
    type: START_RECORDING,
    competitorKey,
    interval,
    duration,
    startedRecording,
    isActive,
});

const volumemeter = new VolumemeterUtils();

export const recordValue = (competitorKey: string) => {
    return (dispatch, getState) => {
        const state = getState();
        const competitor = state.voting.competitors.byId[competitorKey];

        let interval = competitor.interval;

        let timeLeft =
            state.administration.duration -
            (Math.floor(Date.now()) - competitor.startedRecording);

        if (timeLeft > 0) {
            const value = volumemeter.getVolume();
            dispatch(saveValue(
                competitorKey,
                value,
                timeLeft,
            ));
            dispatch(updateRating(
                competitorKey,
                getRatingFromKey(competitorKey),
            ));
        } else {
            clearInterval(interval);
            const stoppedRecording = Math.floor(Date.now());
            dispatch(stopRecording(
                competitorKey,
                stoppedRecording,
            ));
        }
    }
};

export const updateAllRatings = (competitorKey: string) => {
    return (dispatch, getState) => {
        const state = getState();
        Object.keys(state.voting.ratings).forEach(competitorKey => {
            dispatch(updateRating(
                competitorKey,
                getRatingFromKey(competitorKey),
            ));
        });
    }
};

export const saveValue
    = (competitorKey: string,
       value: number,
       timeLeft: number) => ({
    type: SAVE_VALUE,
    competitorKey,
    value,
    timeLeft,
});

export const updateRating
    = (competitorKey: string,
       rating: number) => ({
    type: UPDATE_RATING,
    competitorKey,
    rating,
});

export const stopRecording
    = (competitorKey: string,
       stoppedRecording: Date) => ({
    type: STOP_RECORDING,
    competitorKey,
    stoppedRecording,
});

export const setTitle = (title: string) => ({
    type: SET_TITLE,
    title
});

export const setDuration = (duration: number) => ({
    type: SET_DURATION,
    duration
});

export const setMaxvol = (maxVol: number) => ({
    type: SET_MAXVOL,
    maxVol
});