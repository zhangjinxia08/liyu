var express = require('express');
var router = express.Router();
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
module.exports = router;