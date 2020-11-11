const Task = require('../models/Task');
const User = require('../models/User');
const {validationResult} = require('express-validator');

// Request to create a new task
exports.createTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const task = new Task(req.body);
        //console.log(task);
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}