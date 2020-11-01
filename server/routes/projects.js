const express = require('express');
const router = express.Router();
const projectController = require('./../controllers/projectsController');
const authentication = require('../middleware/authentication');
const {check} = require('express-validator');

router.post('/',
    authentication,
    [
        check('projectName', 'The project name is mandatory').notEmpty()
    ],
    projectController.createProject
)

router.put('/:id',
    authentication,
    [
        check('projectName', 'The project name is mandatory').notEmpty()
    ],
    projectController.updateProjects,
);

router.get('/',
    authentication,
    projectController.getProjects,
)


module.exports = router;
