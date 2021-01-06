const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jsonwebtoken = require('jsonwebtoken');
var ObjectId = require('mongodb').ObjectID;
require('dotenv').config({path: 'variables.env'});

// Verify authentication of a user
exports.authUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if (user === null) {
            return res.status(400).json({msg:'User doesn\'t exists'});
        }
        const passwordIsCorrect = await bcryptjs.compare(password, user.password);
        if (!passwordIsCorrect) {
            return res.status(400).json({msg:'Password is not correct'});
        }

        const payload = {
            user : {
                id: user.id
            }
        };

        // expiresIn -> the user toke expires in 3 hours (the time is in seconds)
        jsonwebtoken.sign(payload, process.env.SECRET, {expiresIn: 648000}, 
            (error, token) => {
                if (error) {
                    console.error(error);
                    throw error;
                }
                return res.send({token});
            });
    } catch (error) {
        console.error(error);
        return res.status(400).send('There was an error');
    }
}

exports.getUser = async (req, res) => {
    if (req.user == null && res.user.id == null) {
        return res.status(500).json({msg: 'User has not authentication token'});
    }

    try {
        let userId = req.user.id;
        let user = await User.findOne({_id: ObjectId(userId)}).select('-password');
        res.json({user});
    } catch(error) {
        console.error(error);
        return res.status(500).send('There was an error');
    }
}
