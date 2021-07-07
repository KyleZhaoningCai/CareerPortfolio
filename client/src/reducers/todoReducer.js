import { ADD_TODO, DELETE_TODOS, GET_TODOS, SET_TODO_LOADING, SET_CURRENT, CLEAR_CURRENT, UPDATE_TODO } from "../actions/types";

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
        case DELETE_TODOS:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload),
                loading: false
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
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