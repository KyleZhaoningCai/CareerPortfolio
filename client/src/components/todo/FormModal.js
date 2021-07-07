import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import MessageBox from '../layout/MessageBox';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMessage } from '../../actions/messageActions';
import { addTodo, updateTodo } from '../../actions/todoActions';
import DatePicker from "react-datepicker";
import moment from 'moment'

const FormModal = ({message:{ type }, todo: {current}, setMessage, addTodo, updateTodo}) => {

    useEffect(() => {
        if (current !== null){
            const currentDate = ((current.date === null || current.date === "") ? null : moment(current.date, "DD-MM-YYYY").toDate());
            setThisTodo({
                description: current.description,
                priority: current.priority,
                date: currentDate
            });
        }else{
            setThisTodo({
                description: '',
                priority: 'Low',
                date: null
            });
        }
    }, [current])

    const [thisTodo, setThisTodo] = useState({
        description: '',
        priority: 'Low',
        date: null
    });

    const { description, priority, date } = thisTodo;   

    const onChange = e => {
        if (type !== ''){
            setMessage('', '');
        }
        setThisTodo({
            ...thisTodo,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = e => {
        e.preventDefault();
        if (description === '' || (priority !== 'High' && priority !== 'Medium' && priority !== 'Low')){
            setMessage('Please enter all fields', 'danger');
        }else{
            if (current === null){
                addTodo({
                    description,
                    priority,
                    date
                });
            }else{
                updateTodo({
                    _id: current._id,
                    description,
                    priority,
                    date
                });
            }
            
        }       
    }

    return (
        <div id="formModal" className="modal">
            <div className="modal-content">
                {current === null ? (<h4>New To-do</h4>) : (<h4>Edit To-do</h4>)}
                <form onSubmit={onSubmit}>
                    <div className="form-field">
                        <label htmlFor='email' className='form-label'>To-do Description</label>
                        <input type='text' name='description' value={description} onChange={onChange} />
                    </div>
                    <div className="form-field">
                        <label htmlFor='priority' className='form-label'>Priority Select</label>
                        <select name="priority" onChange={onChange} className="browser-default" >
                            <option selected={"Low" === priority} value="Low">Low</option>
                            <option selected={"Medium" === priority} value="Medium">Medium</option>
                            <option selected={"High" === priority} value="High">High</option>    
                        </select>                        
                    </div>
                    <div className="form-field">
                        <label htmlFor="date" className='form-label'>Complete By (Optional)</label><br />
                        <DatePicker dateFormat="dd/MM/yyyy" selected={date} onChange={(selectedDate => setThisTodo({...thisTodo, date: selectedDate}))} />
                    </div>                    
                    {false ? <Preloader /> : <MessageBox />} 
                    <button type='submit' className='btn btn-primary confirm-button'>{current === null ? "Confirm" : "Update"}</button>
                    <button type='button' className="modal-close cancel-button btn">Cancel</button>
                </form>
            </div>
        </div>
    )
}

FormModal.propTypes = {
    setMessage: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired,
    todo: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    message: state.message,
    todo: state.todo
})

export default connect(mapStateToProps, {setMessage, addTodo, updateTodo})(FormModal);