const mongoose = require('mongoose');
const usersSchema = mongoose.Schema({
    userName : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    insertDate: {
        type : Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('users', usersSchema);
