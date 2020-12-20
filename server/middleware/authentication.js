const jsonwebtoken = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    console.log('xuxa', token);
    if (!token || token === '') {
        return res.status(401).json({msg: "No token. You can't no access"});
    }

    try {
        const verifiedToken = jsonwebtoken.verify(token, process.env.SECRET);
        console.log(verifiedToken);
        req.user = verifiedToken.user;
        next();
    } catch(error) {
        res.status(401).json({msg: 'Token is not valid'})
    }
}
