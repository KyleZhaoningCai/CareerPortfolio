import { ADD_TODO, GET_TODOS, SET_TODO_LOADING } from "../actions/types";

const initialState = {
    loading: false,
    todos: [],
    current: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
                loading: false
            }
        case SET_TODO_LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}