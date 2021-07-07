import { REGISTER_USER, LOGIN_USER, LOGOUT_USER, GET_USER, SET_LOADING, SET_MESSAGE, LOGIN_USER_ONCE } from "./types";
import axios from 'axios';
import setAuthToken from '../../src/utils/setAuthToken';

export const register = (user) => async dispatch => {
    setLoading();
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/user', user, config);

        dispatch({
            type: REGISTER_USER,
            payload: res.data
        });

        loadUser();
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: {message: error.message, type: "danger"}
        })
    }
}

export const login = (user) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
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
        dispatch({
            type: SET_MESSAGE,
            payload: {message: error.response.data.msg, type: "danger"}
        })
    }
}

export const logout = () => async dispatch => {
    dispatch({type:LOGOUT_USER});
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

export const setLoading = () => async dispatch => {
    dispatch({type:SET_LOADING});
}