import { SET_MESSAGE } from "./types";

export const setMessage = (message, type) => {
    return {
        type: SET_MESSAGE,
        payload: {message, type}
    }
}