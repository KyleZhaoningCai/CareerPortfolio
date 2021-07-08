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
import Preloader from '../layout/Preloader';

const ToDo = ({todo: {loading, todos}, user: {isAuthenticated}, getTodos, loadUser}) => {
    const history = useHistory();
    useEffect(() => {
        (async function anyNameFunction() {
            if (localStorage.token || sessionStorage.token){
                await loadUser();
            }
            if (!isAuthenticated) {           
                history.push('/login');
            }else{
                // Intialize Materialize components after history push
                M.AutoInit();
                getTodos();
            }        
        })();
    }, [isAuthenticated]);
    let todoList = null;
    if (todos !== null && todos.length > 0){
        todoList = todos.map(todo => (<ToDoItem key={todo._id} todo={todo} />))
    }else if (loading){
        todoList = <Preloader />
    }else{
        todoList = <li className="collection-item">There is nothing to-do!</li>
    }
    return (
        <div className="todo-list">
            <ul className="collection with-header">
                <li className="collection-header row"><h3>To-do List <span className="secondary-content"><Logout /></span></h3></li>
                {todoList}
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
