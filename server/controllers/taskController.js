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
            return res.status(401).json({msg: 'The body is empty. Please introduce the projectid'});
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
            return res.status(401).json({msg: 'User is not authorized'});
        }

        const task = new Task(req.body);
        await task.save();
        return res.json({task});
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}

// Request to retrieve a task by project
exports.getTasksByProject = async (req, res) => {
    if (req.user == null && res.user.id == null) {
        return res.status(500).json({msg: 'User has not authentication token'});
    }

    try {
        let projectId = req.body.projectId;
        if (projectId == null) {
            return res.status(401).json({msg: 'The body is empty. Please, introduce the project id'});
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
            return res.status(401).json({msg: 'User is not authorized'});
        }

        let taskByProjectId = await Task.find({projectId: projectId});
        return res.json({taskByProjectId});
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}

// Request to update a task by taskid
exports.updateTask = async (req, res) => {
    if (req.user == null && res.user.id == null) {
        return res.status(500).json({msg: 'User has not authentication token'});
    }

    try {
        let task = {};
        if (req.body != null) {
            task.name = await req.body.name;
            if (task.name == null) {
                return res.status(404).json({msg: 'This project name is not correct'});
            }
            task.projectId = await req.body.projectId;
            if (task.projectId == null) {
                return res.status(404).json({msg: 'This project id is not correct'});
            } 
            task.status = await req.body.status;
            if (task.status == null) {
                return res.status(404).json({msg: 'This task status is not correct'});
            } 
        }

        let projectsFromRequestParameter = await Project.findOne({_id: ObjectId(task.projectId)});
        if (projectsFromRequestParameter == null) {
            return res.status(401).json({msg: 'This project has not been found'});
        }

        if (projectsFromRequestParameter.projectCreator.toString() != req.user.id) {
            return res.status(401).json({msg: 'User is not authorized'});
        }

        let taskId = await req.params;
        let taskById = await Task.find({_id: ObjectId(taskId.id)});
        if (taskById == null) {
            return res.status(401).json({msg: 'This task has not been found'});
        }

        taskById = await Task.findByIdAndUpdate({_id: taskId.id}, {$set: task}, {new: true});
        return res.json({taskById});
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}

exports.deleteTask = async (req, res) => { 
    if (req.user == null && res.user.id == null) {
        return res.status(500).json({msg: 'User has not authentication token'});
    }

    try {
        let task = {};
        if (req.body != null) {
            task.projectId = await req.body.projectId;
            if ( task.projectId  == null) {
                return res.status(404).json({msg: 'This project id is not correct'});
            }
            task.name = await req.body.name;
            if (task.name == null) {
                return res.status(404).json({msg: 'This project name is not correct'});
            } 
        }
        let projectsFromRequestParameter = await Project.findOne({_id: ObjectId(task.projectId)});
        if (projectsFromRequestParameter == null) {
            return res.status(401).json({msg: 'This project has not been found'});
        }

        if (projectsFromRequestParameter.projectCreator.toString() != req.user.id) {
            return res.status(401).json({msg: 'User is not authorized'});
        }

        let taskId = req.params.id;
        const taskIdMaxLengthAllowed = 24;
        if (taskId.length != taskIdMaxLengthAllowed) {
            return res.status(401).json({msg: 'This task id is not correct'});
        }
        let taskFromRequestParameter = await Task.findOne({_id: ObjectId(taskId)});
        if (!taskFromRequestParameter) {
            return res.status(404).json({msg: 'The task has not been found'});
        }

        taskFromRequestParameter = await Task.findByIdAndDelete({_id: ObjectId(taskId)});
        return res.json({msg: `The task with name ${taskFromRequestParameter.name} has been succesfully deleted`});
    } catch(error) {
        console.error(error);
        res.status(500).send("there was an error");
    }
}
