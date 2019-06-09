import {combineReducers} from 'redux'

import Competitor from "./entities/Competitor";
import {ADD_COMPETITOR} from "./actions";

const initialState = {
    competitors: [],
    calibrationCompetitors: [],
    maxVol: 1,
    duration: 10000
};

const administration = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMPETITOR:
            const newCompetitor = new Competitor(action.text);
            return {
                ...state,
                competitors: [...state.competitors, newCompetitor]
            };
        default:
            return state;
    }
};

const voting = (state = initialState, action) => {
    switch (action.type) {
        case 'START_VOTING':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state;
    }
};

export default combineReducers({
    administration,
    voting
})