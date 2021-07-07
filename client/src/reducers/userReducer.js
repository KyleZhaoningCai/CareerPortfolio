import { GET_USER, LOGIN_USER, LOGIN_USER_ONCE, LOGOUT_USER, REGISTER_USER, SET_LOADING, CLEAR_LOADING } from "../actions/types";
const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USER: 
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case REGISTER_USER:
        case LOGIN_USER_ONCE:
            sessionStorage.setItem('token', action.payload.token);
            localStorage.removeItem('token');
            return {
                ...state,
                loading: false,
                isAuthenticated: true
            }
        case LOGIN_USER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                loading: false,
                isAuthenticated: true
            }
        case LOGOUT_USER:
            localStorage.removeItem('token');
            return{
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        case CLEAR_LOADING:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}