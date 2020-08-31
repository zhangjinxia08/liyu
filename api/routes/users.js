var express = require('express');
var router = express.Router();
var { connection } = require('../db/database')

router.all('*',function(req,res,next) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Origin','*');
  next()
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index page');
});

router.get('/pic', function(req, res, next) {
  var sql = `select * from contact_picture`;
  connection.query(sql, function(err, data) {
    if(err) {
      console.log(err)
    } else {
      res.send({
        code: 1,
        array: data,
        msg: "success"
      })
    }
  })
})

router.post('/login', function(req, res, next) {
  var sql = `select * from login where account='${req.body.account}' && password='${req.body.password}' || tel='${req.body.tel}'`
  connection.query(sql, function(err, data) {
    if(err) {
      console.log(err)
    } else {
      res.send({
        code: 1,
        usersArr: data,
        msg: "success"
      })
      
      res.render('index')
    }
  })
})

router.get('/require', function(req, res, next) {
  var sql = `select * from requirements`
  connection.query(sql, function(err, data) {
    if(err) {
      console.log(err)
    } else {
      res.send({
        code: 1,
        jobArr: data,
        msg: "success"
      })
    }
  })
})

router.get('/website', function(req, res, next) {
  var sql = `select * from website`
  connection.query(sql, function(err, data) {
    if(err) {
      console.log(err)
    } else {
      res.send({
        code: 1,
        addressArr: data,
        msg: "success"
      })
    }
  })
})


module.exports = router;
