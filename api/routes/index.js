var express = require('express');
var router = express.Router();
var { connection } = require('../db/database')
router.all('*',function(req,res,next) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Origin','*');
  next()
})
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// 页面跳转请求接口
router.get('/case', function(req, res, next) {
  res.render('./case.html', {});
});
router.get('/case-customer', function(req, res, next) {
  res.render('./case-customer.html', {});
});
router.get('/case-partner', function(req, res, next) {
  res.render('./case-partner.html', {});
});
router.get('/case-invest', function(req, res, next) {
  res.render('./casecase-invest.html', {});
});
router.get('/case-detail', function(req, res, next) {
  res.render('./case-detail.html', {});
});
module.exports = router;
