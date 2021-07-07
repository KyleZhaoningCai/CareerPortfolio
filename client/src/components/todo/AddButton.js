import React from 'react';
import { clearCurrentTodo } from '../../actions/todoActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const AddButton = ({clearCurrentTodo}) => {
    return (
    <div className="fixed-action-btn">
        <a href="#formModal" className="btn-floating btn-large modal-trigger" onClick={clearCurrentTodo}>
            <i className="large material-icons">add</i>
        </a>
    </div>
    )
}

AddButton.propTypes = {
    clearCurrentTodo: PropTypes.func.isRequired
}

export default connect(null, {clearCurrentTodo})(AddButton);
