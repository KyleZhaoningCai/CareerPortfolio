const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Todo = require('../models/Todo');

// @route  GET api/todo
// @desc   Get all todo items
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id }).sort({date: 'asc'});
        res.json(todos);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route  POST api/todo
// @desc   Add a todo item
// @access Private
router.post('/', [auth,
    check('description', 'Please add a to do description')
        .notEmpty(),
    check('description', 'Description cannot be longer than 255 characters')
        .isLength({min: 1, max:255}),
    check('priority', 'Please select a priority')
        .isIn(['High', 'Medium', 'Low'])
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()});
    }

    const { description, priority, date } = req.body;

    try{
        let newTodo = new Todo({
            user: req.user.id,
            description,
            priority,
            date
        });

        const todo = await newTodo.save();
        res.json(todo);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route       PUT api/todo/:id
// @desc        Update a todo item
// @access      Private
router.put('/:id', auth, async (req, res) => {
    const {description, priority, date} = req.body;

    const todoFields = {};
    if (description){
        todoFields.description = description;
    }
    if (priority){
        todoFields.priority = priority;
    }
    if (date){
        todoFields.date = date;
    }

    try {
        let todo = await Todo.findById(req.params.id);

        if (!todo){
            return res.status(404).json({ msg: 'Contact not found'});
        }

        if (todo.user.toString() !== req.user.id){
            return res.status(401).json({ msg: 'Not authorized'});
        }

        todo = await Todo.findByIdAndUpdate(req.params.id, {$set: todoFields}, {new: true});

        res.json(todo);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// @route       DELETE api/todo/:id
// @desc        Delete a todo item
// @access      Private
router.delete('/:id', auth, async (req, res) => {
    try {
        let todo = await Todo.findById(req.params.id);

        if (!todo){
            return res.status(404).json({ msg: 'To-do not found'});
        }

        if (todo.user.toString() !== req.user.id){
            return res.status(401).json({ msg: 'Not authorized'});
        }

        await Todo.findByIdAndRemove(req.params.id);

        res.json({ msg: 'To-do removed' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;