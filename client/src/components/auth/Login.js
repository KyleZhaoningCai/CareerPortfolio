import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { setMessage } from '../../actions/messageActions';
import { login } from '../../actions/userActions';
import MessageBox from '../layout/MessageBox';
import Preloader from '../layout/Preloader';

const Login = ({ message: {type}, user: {loading, isAuthenticated}, setMessage, login }) => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user; 

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
        if (email === '' || password === ''){
            setMessage('Please enter all fields', 'danger');
        }else{
            login({
                email,
                password
            })
        }       
    }

    return (
        <div className='row'>
            <form className='col s10 m8 l6 offset-s1 offset-m2 offset-l3' onSubmit={onSubmit}>
                <h3>
                    Login
                </h3>
                <div className='input-field'>
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <input type='email' name='email' value={email} onChange={onChange} />
                </div>
                <div className='input-field'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' name='password' value={password} onChange={onChange} />
                </div>
                {loading ? <Preloader /> : <MessageBox />} 
                <button type='submit' className='btn btn-primary login-button' >Login</button>
                <Link exact to='/register' className='btn btn-primary go-to-register-button'>Register New User</Link>
            </form>
        </div>
    )
}

Login.propTypes = {
    message: PropTypes.object.isRequired,
    setMessage: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    message: state.message,
    user: state.user
})

export default connect(mapStateToProps, {setMessage, login})(Login);
