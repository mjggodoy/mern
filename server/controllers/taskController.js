const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');
var ObjectId = require('mongodb').ObjectID;

// Request to create a new task
exports.createTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        let projectId = req.body.projectId;
        if (projectId == null) {
            return res.status(401).json({msg: 'The body is empty. Please introduce the projectid of a project'});
        }

        const projectIdMaxLengthAllowed = 24;
        if (projectId.length != projectIdMaxLengthAllowed) {
            return res.status(401).json({msg: 'This project id is not correct'});
        }

        let projectsFromRequestParameter = await Project.findOne({_id: ObjectId(projectId)});
        if (projectsFromRequestParameter == null) {
            return res.status(401).json({msg: 'This project has not been found'});
        }

        if (projectsFromRequestParameter.projectCreator.toString() != req.user.id) {
            return res.status(401).json({msg: 'User not authorized'});
        }

        const task = new Task(req.body);
        await task.save();
        return res.json({task});
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}

exports.getTasksByProject = async (req, res) => {
    try {
        let projectId = req.body.projectId;
        if (projectId == null) {
            return res.status(401).json({msg: 'The body is empty. Please introduce the projectid of a project'});
        }

        const projectIdMaxLengthAllowed = 24;
        if (projectId.length != projectIdMaxLengthAllowed) {
            return res.status(401).json({msg: 'This project id is not correct'});
        }

        let projectsFromRequestParameter = await Project.findOne({_id: ObjectId(projectId)});
        if (projectsFromRequestParameter == null) {
            return res.status(401).json({msg: 'This project has not been found'});
        }

        if (projectsFromRequestParameter.projectCreator.toString() != req.user.id) {
            return res.status(401).json({msg: 'User not authorized'});
        }

        let taskByProjectId = await Task.find({projectId: projectId});
        return res.json({taskByProjectId});
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}
