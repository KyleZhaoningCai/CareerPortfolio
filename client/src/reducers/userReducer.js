import { REGISTER_USER, SET_LOADING } from "../actions/types";
const initialState = {
    loading: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER:
            return {
                ...state,
                loading: false
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