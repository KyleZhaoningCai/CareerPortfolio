import { REGISTER_USER, SET_LOADING, SET_MESSAGE } from "./types";

export const register = (user) => async dispatch => {
    setLoading();
    try {
        const res = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: REGISTER_USER,
        })
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: {message: error.response.data, type: "danger"}
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}