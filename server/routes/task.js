const express = require('express');
const router = express.Router();
const taskController = require('./../controllers/taskController');
const authentication = require('../middleware/authentication');
const { check } = require('express-validator');

router.post('/',
    authentication,
    [
        check('projectId', 'The project name is mandatory').notEmpty(),
        check('name', 'The task name is mandatory').notEmpty()
    ],
    taskController.createTask
)

router.get('/:id',
    authentication,
    taskController.getTasksByProject
)

router.put('/:id',
    authentication,
    taskController.updateTask
)

router.delete('/:id',
    authentication,
    taskController.deleteTask
)

module.exports = router;
