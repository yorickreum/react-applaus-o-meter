import Competitor from "./entities/Competitor";

let nextTodoId = 0;

export const ADD_COMPETITOR = 'ADD_COMPETITOR';

export const addCompetitor = (competitorName: string) => ({
    type: ADD_COMPETITOR,
    text: competitorName
});

export const startVoting = (competitor: Competitor) => ({
    type: 'START_VOTING',
    id: nextTodoId++,
    competitor: competitor
});

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};