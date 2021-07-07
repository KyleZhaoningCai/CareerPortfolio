import { ADD_TODO, SET_TODO_LOADING, SET_MESSAGE, GET_TODOS } from "./types";
import axios from 'axios';

export const getTodos = () => async dispatch =>{
    try {
        const res = await axios.get('/api/todo');
        dispatch({ type: GET_TODOS, payload: res.data });
    } catch (error) {
        dispatch({ 
            type: SET_MESSAGE, 
            payload: {message: error.message, type: "danger"} 
        });
    }
}

export const addTodo = (todo) => async dispatch => {
    setTodoLoading();
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('/api/todo', todo, config);
        console.log(res.data);

        dispatch({
            type: ADD_TODO,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: {message: error.message, type: "danger"}
        })
    }
}

export const setTodoLoading = () => {
    return {
        type: SET_TODO_LOADING
    }
}