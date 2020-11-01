const Project = require('../models/Project');
const {validationResult} = require('express-validator');
var ObjectId = require('mongodb').ObjectID;

// Request to create a project related to a user (token -> go to auth)
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

// Request to retrieve a project by user id
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

// Request to update a project by project id
exports.updateProjects = async (req, res) => {
    if (req.user == null && res.user.id == null) {
        return res.status(500).json({msg: 'user has not authentication token'});
    }

    let project = {};
    if (req.body != null) {
        project.projectName = await req.body.projectName;
    }

    if (project.projectName == null) {
        return res.status(404).json({msg: 'This project name is not correct'});
    } 

    try {
        let projectId = req.params.id;
        const projectIdMaxLengthAllowed = 24;
        if (projectId.length != projectIdMaxLengthAllowed) {
            return res.status(401).json({msg: 'This project id is not correct'});
        }
        let projectsFromRequestParameter = await Project.findOne({_id: ObjectId(projectId)});
        if (!projectsFromRequestParameter) {
            return res.status(404).json({msg: 'This project has not been found'});
        }

        if (projectsFromRequestParameter != null && projectsFromRequestParameter.projectCreator.toString() != req.user.id) {
            return res.status(401).json({msg: 'User not authorized'});
        }
        projectsFromRequestParameter = await Project.findByIdAndUpdate({_id: projectId}, {$set: project}, {new: true});
        return res.json({projectsFromRequestParameter});
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }     
}

// Request to delete a project by project id
exports.deleteProject = async (req, res) => {
    if (req.user == null && res.user.id == null) {
        return res.status(500).json({msg: 'user has not authentication token'});
    }

    try {
        let projectId = req.params.id;
        const projectIdMaxLengthAllowed = 24;
        if (projectId.length != projectIdMaxLengthAllowed) {
            return res.status(401).json({msg: 'This project id is not correct'});
        }
        let projectsFromRequestParameter = await Project.findOne({_id: ObjectId(projectId)});
        if (!projectsFromRequestParameter) {
            return res.status(404).json({msg: 'This project has not been found'});
        }
        projectsFromRequestParameter = await Project.findByIdAndDelete({_id: projectId});
        return res.json({msg: `The project with name ${projectsFromRequestParameter.projectName} has been deleted`});
 
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }     
}
