var express = require('express');
var router = express.Router();
<<<<<<< HEAD
var { connection } = require('../db/database')
router.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', '*');
        next()
    })
    /* GET users listing. */
    // router.get('/', function(req, res, next) {
    //   res.send('respond with a resource');
    // });
    // 公司简介接口
router.get('/', function(req, res) {
    res.send('666')
})
=======
// var { connection } = require('../db/database')
// connection.connect()
router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');
    next()
})

// router.get('/come-in-liyu.html', function(req, res, next) {
//     res.render('./A-come-in-liyu.html', {})
//         // res.send('666')

// })
>>>>>>> 9741dd429dedc5cb2cd05330c49456435c486c99
module.exports = router;