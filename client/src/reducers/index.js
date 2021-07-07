import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import userReducer from './userReducer';
import todoReducer from './todoReducer';

export default combineReducers({
    user: userReducer,
    message: messageReducer,
    todo: todoReducer
});