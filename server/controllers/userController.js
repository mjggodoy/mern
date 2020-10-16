const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        let user = new User(req.body);
        await user.save();
        res.send('User has been sucessfully created');
    } catch (error) {
        console.log(error);
        res.status(400).send('There was an error');
    }
}