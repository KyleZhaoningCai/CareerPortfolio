import { GET_USER, LOGIN_USER, REGISTER_USER, SET_LOADING } from "../actions/types";
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
        case LOGIN_USER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                loading: false,
                isAuthenticated: true
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}