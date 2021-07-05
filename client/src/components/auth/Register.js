import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register  } from '../../actions/userActions';
import { setMessage } from '../../actions/messageActions';
import MessageBox from '../layout/MessageBox';
import Preloader from '../layout/Preloader';

const Register = ({ message: {type}, user: {loading, isAuthenticated}, register, setMessage }) => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user; 

    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated) {            
            history.push('/todo');
        }
        // eslint-disable-next-line
    }, [isAuthenticated, history])

    const onChange = e => {
        if (type !== ''){
            setMessage('', '');
        }
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === ''){
            setMessage('Please enter all fields', 'danger');
        }else if (password !== password2){
            setMessage('Passwords do not match', 'danger')
        }else{
            register({
                name,
                email,
                password
            })
        }       
    }

    return (
        <div className='row'>
            <form className='col s10 m8 l6 offset-s1 offset-m2 offset-l3' onSubmit={onSubmit}>
                <h3>
                    Account Register
                </h3>
                <div className='input-field'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input type='text' name='name' value={name} onChange={onChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <input type='email' name='email' value={email} onChange={onChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password2' className='form-label'>Confirm Password</label>
                    <input type='password' name='password2' value={password2} onChange={onChange} />
                </div>
                {loading ? <Preloader /> : <MessageBox />} 
                <button type='submit' className='btn btn-primary register-button' >Register</button>
                <Link exact to='/login' className='btn btn-primary back-to-login-button'>Back to Login</Link>
            </form>
        </div>
    )
}

Register.propTypes = {
    message: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    setMessage: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    message: state.message,
    user: state.user
})

export default connect(mapStateToProps, {register, setMessage})(Register);
