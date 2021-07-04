import { REGISTER_USER, SET_LOADING } from "../actions/types";
const initialState = {

    user: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}