import React, {Fragment} from 'react';
import moment from 'moment';
import { deleteTodo, setCurrentTodo, clearCurrentTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import { setMessage } from '../../actions/messageActions';

const ToDoItem = ({todo, deleteTodo, setCurrentTodo, clearCurrentTodo, setMessage}) => {

    const {_id, description, priority, date} = todo;

    const deleteThis = e => {
        confirmAlert({
            title: 'Permanently remove this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        clearCurrentTodo();
                        deleteTodo(_id);
                    }
                },
                {
                    label: 'Cancel'
                }
            ]
        })
    }

    const setCurrent = e => {
        setMessage("", "");
        setCurrentTodo(todo);
    }

    return (
        <Fragment>
           <li className="collection-item flow-text row">
                {priority === 'High' && (<span className="custom-badge high-priority-badge">H</span>)  }
                {priority === 'Medium' && (<span className="custom-badge medium-priority-badge">M</span>)  }
                {priority === 'Low' && (<span className="custom-badge low-priority-badge">L</span>)  }
                <span>{description}</span>{(date !== null && date !== '') && ( <span> is to be done by <span className="date-text">{moment(date).format('DD-MM-YYYY')}</span></span>)}
                <span className="secondary-content">
                    <a href="#formModal" type="button" className="btn btn-primary modal-trigger edit-button" onClick={setCurrent}><i className="material-icons">edit</i></a>
                    <button type="button" className="btn btn-secondary delete-button" onClick={deleteThis}><i className="material-icons">delete_forever</i></button>
                </span>
            </li>
        </Fragment>
    )
}

ToDoItem.propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    setCurrentTodo: PropTypes.func.isRequired,
    clearCurrentTodo: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired
}

export default connect(null, {deleteTodo, setCurrentTodo, clearCurrentTodo, setMessage})(ToDoItem);
