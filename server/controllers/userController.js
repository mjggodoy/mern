const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

exports.createUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {email, password} = req.body;
    try {
        const userEmail = await User.findOne({email});
        if (userEmail) {
            return res.status(400).send('User already exists');
        }
        let user = new User(req.body);
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        await user.save();
        return res.send('User has been successfully created');
    } catch (error) {
        console.log(error);
        return res.status(400).send('There was an error');
    }
}