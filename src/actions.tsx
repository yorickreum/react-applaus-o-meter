import {getRatingFromKey} from "./utils/competitionUtils";
import {store} from "./store";
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

        dispatch(initiateVolumemeter());

        const state = getState();

        if (state.voting.competitors.byId[competitorKey].timeLefts.length > 0) {
            dispatch(addError(
                new Date(),
                "Competitor was already started once."
            ));
        } else {
            let timestamp = Math.floor(Date.now());
            const startedRecording = parseInt(timestamp, 10);

            let counter = 0;
            const interval = setInterval(
                () => {
                    if (counter > 15) { // @TODO hacky, don't use first 10 values
                        dispatch(recordValue(competitorKey));
                    }
                    counter++;
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

export const recordValue = (competitorKey: string) => {
    return (dispatch, getState) => {
        const state = getState();
        const competitor = state.voting.competitors.byId[competitorKey];

        let interval = competitor.interval;

        let timeLeft =
            state.administration.duration -
            (Math.floor(Date.now()) - competitor.startedRecording);

        if (timeLeft > 0) {
            const volume = VolumemeterUtils.getVolume();
            if (volume !== null) {
                dispatch(saveValue(
                    competitorKey,
                    volume,
                    timeLeft,
                ));
                dispatch(updateRating(
                    competitorKey,
                    getRatingFromKey(competitorKey),
                ));
            } else {
                dispatch(addError(
                    new Date(),
                    "Volumemeter not initialized!"
                ))
            }
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

export const addError = (time: Date, text: string) => ({
    type: ADD_ERROR,
    text,
    time,
});

export const dismissError = (key: number) => ({
    type: DISMISS_ERROR,
    key,
});

export const dismissAllErrors = () => ({
    type: DISMISS_ALL_ERRORS,
});

export const initiateVolumemeter = () => {
    VolumemeterUtils.initiate();
    return ({
        type: INITIATE_VOLUMEMETER,
    });
};
