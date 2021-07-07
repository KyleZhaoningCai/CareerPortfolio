const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        required: true
    },
    date: {
        type: String
    },
});

module.exports = mongoose.model('todo', TodoSchema);