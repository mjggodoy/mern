const Project = require('../models/Project');
const {validationResult} = require('express-validator');

exports.createProject = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const project = new Project(req.body);
        project.projectCreator = req.user.id;
        await project.save();
        return res.json(project);
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}