var express = require('express');
var router = express.Router();
var { connection } = require('../db/database')
router.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', '*');
        next()
    })
    /* GET home page. */
    // router.get('/', function(req, res, next) {
    //   res.render('index', { title: 'Express' });
    // });
router.get('/A-come-in-liyu.html', function(req, res, next) {
    res.render('./A-come-in-liyu.html', {})
        // res.send('666')

})
router.get('/A-corporate-culture.html', function(req, res, next) {
    res.render('./A-corporate-culture.html', {})
        // res.send('666')

})
router.get('/A-development-history.html', function(req, res, next) {
    res.render('./A-development-history.html', {})
        // res.send('666')

})
router.get('/A-Honorary-qualifications.html', function(req, res, next) {
    res.render('./A-Honorary-qualifications.html', {})
        // res.send('666')

})
router.get('/A-Image-publicity.html', function(req, res, next) {
    res.render('./A-Image-publicity.html', {})
        // res.send('666')

})
module.exports = router;