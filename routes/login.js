var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const {username, password} = req.query;
    if (username === 'admin' && password === 'admin') {
        res.status(200).json({message: 'Login successful'});
    } else {
        res.status(401).json({message: 'Login failed'});
    }
});

module.exports = router;