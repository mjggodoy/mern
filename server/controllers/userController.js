const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config({path: 'variables.env'});

exports.createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    const {email, password} = req.body;
    try {
        const userEmail = await User.findOne({email});
        if (userEmail) {
            return res.status(400).json({msg: 'User already exists'});
        }
        
        let user = new User(req.body);
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);
        await user.save();
       
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