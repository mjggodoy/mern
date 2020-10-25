const express = require('express');
const router = express.Router();
const projectController = require('./../controllers/projectsController');
const authentication = require('../middleware/authentication');

router.post('/',
    authentication,
    projectController.createProject
);
module.exports = router;
