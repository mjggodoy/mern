const User = require('../models/User');

exports.createUser = async (req, res) => {
    const {userName, email} = req.body;
    try {
        const userEmail = await User.findOne({email});
        if (userEmail) {
            return res.status(400).send('User already exists');
        }
        let user = new User(req.body);
        await user.save();
        return res.send('User has been successfully created');
    } catch (error) {
        console.log(error);
        return res.status(400).send('There was an error');
    }
}