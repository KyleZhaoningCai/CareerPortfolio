import { ADD_TODO, SET_TODO_LOADING, CLEAR_TODO_LOADING, SET_MESSAGE, GET_TODOS, DELETE_TODOS, SET_CURRENT, CLEAR_CURRENT, UPDATE_TODO } from "./types";
import axios from 'axios';
import { setMessage } from "./messageActions";

export const getTodos = () => async dispatch =>{
    try {
        dispatch(setTodoLoading());
        const res = await axios.get('/api/todo');
        dispatch({ type: GET_TODOS, payload: res.data });
    } catch (error) {
        dispatch(clearTodoLoading());
        dispatch({ 
            type: SET_MESSAGE, 
            payload: {message: error.message, type: "danger"} 
        });
    }
}

export const addTodo = (todo) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(setTodoLoading());
        const res = await axios.post('/api/todo', todo, config);

        dispatch({
            type: ADD_TODO,
            payload: res.data
        });
        dispatch(setMessage("To-do added successfully!", "success"));
    } catch (error) {
        dispatch(clearTodoLoading());
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

export const updateTodo = todo => async dispatch =>{
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        dispatch(setTodoLoading());
        const res = await axios.put(`/api/todo/${todo._id}`, todo, config);
        dispatch({ type: UPDATE_TODO, payload: res.data });
        dispatch(setMessage("To-do updated successfully!", "success"));
    } catch (error) {
        dispatch(clearTodoLoading());
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

export const deleteTodo = (id) => async dispatch => {
    setTodoLoading();
    try {
        const res = await axios.delete('/api/todo/' + id);
        dispatch({ type: DELETE_TODOS, payload: id });        
    } catch (error) {
        dispatch({ 
            type: SET_MESSAGE, 
            payload: {message: error.message, type: "danger"} 
        });
    }
}

export const setCurrentTodo = todo => async dispatch => {
    dispatch({ type: SET_CURRENT, payload: todo });
}

export const clearCurrentTodo = () => async dispatch => {
    dispatch({ type: CLEAR_CURRENT });
}

export const setTodoLoading = () => {
    return {
        type: SET_TODO_LOADING
    }
}
export const clearTodoLoading = () => {
    return {
        type: CLEAR_TODO_LOADING
    }
}