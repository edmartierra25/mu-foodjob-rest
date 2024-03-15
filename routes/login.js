var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const {username, password} = req.body;
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({
            user_id: 1,
            roles: "admin"
        });
    } else if (username === 'user' && password === 'user') {
        res.status(200).json({
            user_id: 2,
            roles: "user"
        });
    } else {
        res.status(401).json({message: 'Login failed'});
    }
});

module.exports = router;