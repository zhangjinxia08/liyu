var express = require('express');
var router = express.Router();
var { connection } = require('../db/database')

connection.connect()
router.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', '*');
        next()
    })
    /* GET home page. */
    // router.get('/', function(req, res, next) {
    //   res.render('index', { title: 'Express' });
    // });
    // 页面跳转请求接口

module.exports = router;