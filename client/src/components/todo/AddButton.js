import React from 'react';
import { clearCurrentTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMessage } from '../../actions/messageActions';

const AddButton = ({todo: { todos }, clearCurrentTodo, setMessage}) => {

    const onClick = e => {
        setMessage("", "");
        clearCurrentTodo();
    }
    return (
    <div className="fixed-action-btn">
        {todos.length === 0 || todos === null ? <a href="#formModal" className="btn-floating btn-primary btn-large modal-trigger pulse" onClick={onClick}><i className="large material-icons">add</i></a>:
        <a href="#formModal" className="btn-floating btn-primary btn-large modal-trigger" onClick={onClick}><i className="large material-icons">add</i></a>}
    </div>
    )
}

AddButton.propTypes = {
    clearCurrentTodo: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    todo: state.todo
});

export default connect(mapStateToProps, {clearCurrentTodo, setMessage})(AddButton);
