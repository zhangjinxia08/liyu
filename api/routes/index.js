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
router.get('/new-origin', function(req, res, next) {
    res.render('./new-origin.html', {});
});

router.get('/new-info', function(req, res, next) {
    res.render('./new-info.html', {});
});

router.get('/new-newspaper', function(req, res, next) {
    res.render('./new-newspaper.html', {});
});

router.get('/new-origin-header', function(req, res, next) {
    res.render('./new-origin-header.html', {});
});

router.get('/new-origin01-01', function(req, res, next) {
    res.render('./new-origin01-01.html', {});
});

router.get('/new-origin01-02', function(req, res, next) {
    res.render('./new-origin01-02.html', {});
});

router.get('/new-origin01-03', function(req, res, next) {
    res.render('./new-origin01-03.html', {});
});

router.get('/new-origin01-04', function(req, res, next) {
    res.render('./new-origin01-04.html', {});
});

router.get('/new-origin01-05', function(req, res, next) {
    res.render('./new-origin01-05.html', {});
});

router.get('/new-origin01-06', function(req, res, next) {
    res.render('./new-origin01-06.html', {});
});

router.get('/new-origin01-07', function(req, res, next) {
    res.render('./new-origin01-07.html', {});
});

router.get('/new-origin01-08', function(req, res, next) {
    res.render('./new-origin01-08.html', {});
});

router.get('/new-origin01-09', function(req, res, next) {
    res.render('./new-origin01-09.html', {});
});

router.get('/new-origin01-10', function(req, res, next) {
    res.render('./new-origin01-10.html', {});
});

router.get('/new-origin01-11', function(req, res, next) {
    res.render('./new-origin01-11.html', {});
});

router.get('/new-origin01-12', function(req, res, next) {
    res.render('./new-origin01-12.html', {});
});

router.get('/new-origin02-01', function(req, res, next) {
    res.render('./new-origin02-02.html', {});
});

router.get('/new-origincopy', function(req, res, next) {
    res.render('./new-origincopy.html', {});
});

router.get('/new-trade', function(req, res, next) {
    res.render('./new-trade.html', {});
});

router.get('/new-trade02-01', function(req, res, next) {
    res.render('./new-trade02-01.html', {});
});

router.get('/new-trade02-02', function(req, res, next) {
    res.render('./new-trade02-02.html', {});
});

module.exports = router;