import React, {Fragment} from 'react';
import moment from 'moment';
import { deleteTodo, setCurrentTodo, clearCurrentTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ToDoItem = ({todo, deleteTodo, setCurrentTodo, clearCurrentTodo}) => {

    const {_id, description, priority, date} = todo;

    const deleteThis = e => {
        clearCurrentTodo();
        deleteTodo(_id);
    }

    const setCurrent = e => {
        setCurrentTodo(todo);
    }

    return (
        <Fragment>
           <li className="collection-item flow-text">
                {priority === 'High' && (<span className="custom-badge high-priority-badge">H</span>)  }
                {priority === 'Medium' && (<span className="custom-badge medium-priority-badge">M</span>)  }
                {priority === 'Low' && (<span className="custom-badge low-priority-badge">L</span>)  }
                {description}{(date !== null && date !== '') && ( <span> is to be done by {moment(date).format('DD-MM-YYYY')}</span>)}
                <span className="secondary-content">
                    <a href="#formModal" type="button" className="waves-effect waves-light btn modal-trigger edit-button" onClick={setCurrent}><i className="material-icons">edit</i></a>
                    <button type="button" className="waves-effect waves-light btn delete-button" onClick={deleteThis}><i className="material-icons">delete_forever</i></button>
                </span>
            </li>
        </Fragment>
    )
}

ToDoItem.propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    setCurrentTodo: PropTypes.func.isRequired
}

export default connect(null, {deleteTodo, setCurrentTodo, clearCurrentTodo})(ToDoItem);
