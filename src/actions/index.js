import * as actionConst from '../constants/actions_const';

let nextTodoId = 0;


export const addTodo = text => ({
    type: actionConst.ADD_TODO,
    id: nextTodoId ++,
    text
})

export const setVisibilityFilter = filter => ({
    type: actionConst.SET_VISIBILITY_FILTER,
    filter
})

export const toggleTodo = id => ({
    type: actionConst.TOGGLE_TODO,
    id
})

export const VisibilityFilters = {
    SHOW_ALL: actionConst.SHOW_ALL,
    SHOW_COMPLETED: actionConst.SHOW_COMPLETED,
    SHOW_ACTIVE: actionConst.SHOW_ACTIVE
}