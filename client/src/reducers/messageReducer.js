import { SET_MESSAGE } from "../actions/types";

const initialState = {
    message: '',
    type: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_MESSAGE: 
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type
            }
        default:
            return state;
    }
}