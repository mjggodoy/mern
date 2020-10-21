const mongoose = require('mongoose');
const projectsSchema = mongoose.Schema({
    projectName : {
        type: String,
        required: true,
        trim: true
    },
    projectCreator : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    projectDate : {
        type : Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('projects', projectsSchema);
