import { REGISTER_USER, SET_LOADING } from "./types";

export const register = (user) => async dispatch => {
    try {
        const res = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        const data = await res.json();
    } catch (error) {
        // dispatch({
        //     type:
        // })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}