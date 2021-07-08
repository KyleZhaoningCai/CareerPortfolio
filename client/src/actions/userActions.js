import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, GET_USER, SET_LOADING, SET_MESSAGE, LOGIN_USER_ONCE, CLEAR_LOADING, RESET_TODOS } from "./types";
import axios from 'axios';
import setAuthToken from '../../src/utils/setAuthToken';

export const register = (user) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(setLoading());

        const res = await axios.post('/api/user', user, config);

        dispatch({
            type: REGISTER_USER,
            payload: res.data
        });

        loadUser();
    } catch (error) {
        dispatch(clearLoading());
        if (error.response.data.msg){
            dispatch({
                type: SET_MESSAGE,
                payload: {message: error.response.data.msg, type: "danger"}
            });
        }else if (error.response.data.errors){
            dispatch({
                type: SET_MESSAGE,
                payload: {message: error.response.data.errors[0].msg, type: "danger"}
            });
        }else if (error.message){
            dispatch({
                type: SET_MESSAGE,
                payload: {message: error.message, type: "danger"}
            });
        }else{
            dispatch({
                type: SET_MESSAGE,
                payload: {message: "Error occurred, try again", type: "danger"}
            });
        }
        
    }
}

export const login = (user) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(setLoading());

        const res = await axios.post('/api/auth', user, config);

        if (user.remember){
            dispatch({
                type: LOGIN_USER,
                payload: res.data
            });
        }else{
            dispatch({
                type: LOGIN_USER_ONCE,
                payload: res.data
            });
        }  
        loadUser();
    } catch (error) {
        dispatch(clearLoading());
        if (error.response.data.msg){
            dispatch({
                type: SET_MESSAGE,
                payload: {message: error.response.data.msg, type: "danger"}
            });
        }else if (error.response.data.errors){
            dispatch({
                type: SET_MESSAGE,
                payload: {message: error.response.data.errors[0].msg, type: "danger"}
            });
        }else if (error.message){
            dispatch({
                type: SET_MESSAGE,
                payload: {message: error.message, type: "danger"}
            });
        }else{
            dispatch({
                type: SET_MESSAGE,
                payload: {message: "Error occurred, try again", type: "danger"}
            });
        }
    }
}

export const logout = () => async dispatch => {
    dispatch({type: RESET_TODOS});
    dispatch({type: LOGOUT_USER});
}

export const loadUser = () => async dispatch => {
    if (localStorage.token){
        setAuthToken(localStorage.token);
    }else if (sessionStorage.token){
        setAuthToken(sessionStorage.token);
    }
    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: {message: error.message, type: "danger"}
        })
    }
}

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

export const clearLoading = () => {
    return {
        type: CLEAR_LOADING
    };
}