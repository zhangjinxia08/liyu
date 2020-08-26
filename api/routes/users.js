var express = require('express');
var router = express.Router();
// var { connection } = require('../db/database')
// connection.connect()
router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');
    next()
})

router.get('/come-in-liyu', function(req, res, next) {
    res.render('come-in-liyu.html', {})

})
module.exports = router;