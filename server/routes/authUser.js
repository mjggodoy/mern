const express = require('express');
const router = express.Router();
const authUsersController = require('./../controllers/authController');
const {check} = require('express-validator');

router.post('/',
    [
        check('email', 'The email should be a valid email').isEmail(),
        check('password', 'The password should contain at least 6 characters').isLength({min: 6})
    ],
    authUsersController.authUser
);
module.exports = router;
