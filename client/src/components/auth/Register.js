import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='row'>
            <form class='col s10 m8 l6 offset-s1 offset-m2 offset-l3'>
                <h3>
                    Account Register
                </h3>
                <div className='input-field'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input type='text' name='name' />
                </div>
                <div className='input-field'>
                    <label htmlFor='email' className='form-label'>Email Address</label>
                    <input type='email' name='email' />
                </div>
                <div className='input-field'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' name='password'/>
                </div>
                <div className='input-field'>
                    <label htmlFor='password2' className='form-label'>Confirm Password</label>
                    <input type='password' name='password2' />
                </div>
                <button type='submit' className='btn btn-primary register-button' >Register</button>
                <Link exact to='/login' className='btn btn-primary back-to-login-button'>Back to Login</Link>
            </form>
        </div>
    )
}

export default Register;
