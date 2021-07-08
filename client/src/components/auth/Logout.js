import React, { Fragment } from 'react';
import { logout } from '../../actions/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Logout = ({logout}) => {
    return (
        <Fragment>
            <button type="button" className="btn btn-primary" onClick={logout}>Logout</button>
        </Fragment>
    )
}

Logout.propTypes = {
    logout: PropTypes.func.isRequired
}

export default connect(null, {logout})(Logout);
