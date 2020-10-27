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

exports.getProjects = async (req, res) => { 
    if (req.user == null && res.user.id == null) {
        return res.status(500).json({msg: 'user has not authentication token'});
    }
    try { 
        const userId = req.user.id;
        let projectsFromUser = await Project.find({projectCreator: userId}).sort({projectDate: -1});
        res.json({projectsFromUser});
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }     
}