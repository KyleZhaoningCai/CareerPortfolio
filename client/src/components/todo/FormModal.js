import React, { useState } from 'react';
import Preloader from '../layout/Preloader';
import MessageBox from '../layout/MessageBox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMessage } from '../../actions/messageActions';
import { addTodo } from '../../actions/todoActions';
import DatePicker from "react-datepicker";

const FormModal = ({message:{ type }, setMessage, addTodo}) => {
    const [todo, setTodo] = useState({
        description: '',
        priority: 'Low',
        date: null
    });

    const { description, priority, date } = todo; 

    const onChange = e => {
        console.log(e.target.value);
        if (type !== ''){
            setMessage('', '');
        }
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        if (description === '' || (priority !== 'High' && priority !== 'Medium' && priority !== 'Low')){
            setMessage('Please enter all fields', 'danger');
        }else{
            addTodo({
                description,
                priority,
                date
            })
        }       
    }

    return (
        <div id="formModal" className="modal">
            <div className="modal-content">
                <h4>New To-do</h4>
                <form onSubmit={onSubmit}>
                    <div className="form-field">
                        <label htmlFor='email' className='form-label'>To-do Description</label>
                        <input type='text' name='description' onChange={onChange} />
                    </div>
                    <div className="input-field form-field">
                        <select name="priority" onChange={onChange}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>    
                        </select>
                        <label htmlFor='priority' className='form-label'>Priority Select</label>
                    </div>
                    <div className="form-field">
                        <label htmlFor="date" className='form-label'>Complete By (Optional)</label><br />
                        <DatePicker selected={date} onChange={(selectedDate => setTodo({...todo, date: selectedDate}))} />
                    </div>                    
                    {false ? <Preloader /> : <MessageBox />} 
                    <button type='submit' className='btn btn-primary confirm-button'>Confirm</button>
                    <button type='button' className="modal-close cancel-button btn">Cancel</button>
                </form>
            </div>
        </div>
    )
}

FormModal.propTypes = {
    setMessage: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    message: state.message
})

export default connect(mapStateToProps, {setMessage, addTodo})(FormModal);