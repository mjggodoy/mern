const mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true
    },
    status : {
        type: String,
        required: true,
        trim: true,
        default: 'In progress'
    },
    projectId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'projects'
    },
    taskDate : {
        type : Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('tasks', taskSchema);
