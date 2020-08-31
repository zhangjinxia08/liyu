var express = require('express');
var router = express.Router();
var { connection } = require('../db/database')
router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');
    next()
})


module.exports = router;