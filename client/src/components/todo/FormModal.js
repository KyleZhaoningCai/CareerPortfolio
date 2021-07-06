import React from 'react'

const FormModal = () => {
    return (
        <div id="formModal" className="modal">
            <div className="modal-content">
                <h4>New To-do</h4>
                <form>
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
                    <button class="modal-close btn">Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default FormModal;