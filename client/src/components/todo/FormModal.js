import React from 'react';
import Preloader from '../layout/Preloader';
import MessageBox from '../layout/MessageBox';

const FormModal = () => {
    return (
        <div id="formModal" className="modal">
            <div className="modal-content">
                <h4>New To-do</h4>
                <form>
                    <div className='input-field'>
                        <label htmlFor='email' className='form-label'>To-do Description</label>
                        <input type='text' name='description' />
                    </div>
                    <div className="input-field">
                        <select name="priority">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>    
                        </select>
                        <label htmlFor='priority' className='form-label'>Priority Select</label>
                    </div>
                    <input type="text" className="datepicker" name="date"></input>
                    <label htmlFor='date' className='form-label'>Complete By</label>
                    {true ? <Preloader /> : <MessageBox />} 
                    <button type='submit' className='btn btn-primary login-button' >Login</button>
                    <button class="modal-close btn">Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default FormModal;