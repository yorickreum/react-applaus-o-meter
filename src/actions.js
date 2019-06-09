import Competitor from "./Model/Competitor";

let nextTodoId = 0;

export const addCompetitor = (competitorName: string) => ({
    type: 'ADD_COMPETITOR',
    id: nextTodoId++,
    text: competitorName
});

export const startVoting = (competitior: Competitor) => ({
    type: 'START_VOTING',
    id: nextTodoId++,
    text
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