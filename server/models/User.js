const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    userName : {
        type: String,
        require: true,
        trim: true
    },
    email : {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    insertDate: {
        type : Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', usersSchema);
