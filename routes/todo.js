const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Todo = require('../models/Todo');

// @route  GET api/todo
// @desc   Get all todo items
// @access Private
router.post('/', auth, async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id });
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

module.exports = router;