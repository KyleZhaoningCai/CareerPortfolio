import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const MessageBox = ({message: {message, type}}) => {
    return (
        <div>
            <p className={`flow-text ${type}`} >{message === '' ? <span>&nbsp;</span> : message}</p>
        </div>
    )
}

MessageBox.propTypes = {
    message: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    message: state.message
})
export default connect(mapStateToProps)(MessageBox);
