const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');
const {check} = require('express-validator');

router.post('/',
    [
        check('userName', 'The username is mandatory').notEmpty(),
        check('email', 'The email should be a valid email').isEmail(),
        check('password', 'The password should contain at least 6 characters').isLength({min: 6})
    ],
    userController.createUser
);

module.exports = router;
