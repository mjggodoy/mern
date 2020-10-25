const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        return res.json(project);
    } catch (error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}