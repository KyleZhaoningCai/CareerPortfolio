import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AddButton from './AddButton';
import FormModal from './FormModal';
import M from 'materialize-css/dist/js/materialize.min.js';
import { getTodos } from '../../actions/todoActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';
import Logout from '../auth/Logout';
import { loadUser } from '../../actions/userActions';

const ToDo = ({todo: {loading, todos, current}, user: {isAuthenticated}, getTodos, loadUser}) => {
    const history = useHistory();
    useEffect(() => {
        if (localStorage.token){
            loadUser();
        }
        if (!isAuthenticated) {            
            history.push('/login');
        }else{
            // Intialize Materialize components after history push
            M.AutoInit();
            getTodos();
        }        
    }, []);
    return (
        <div className="todo-list">
            <ul className="collection with-header">
                <li className="collection-header"><h3>To-do List <span className="secondary-content"><Logout /></span></h3></li>
                { (todos !== null && todos.length > 0) ? todos.map(todo => (<ToDoItem key={todo._id} todo={todo} />)) : (
                    <li className="collection-item">There is nothing to-do!</li>
                )}
            </ul>
            <AddButton />
            <FormModal />
        </div>
    )
}

ToDo.propTypes = {
    getTodos: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    todo: state.todo,
    user: state.user
});

export default connect(mapStateToProps, {getTodos, loadUser})(ToDo);
