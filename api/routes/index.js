var express = require('express');
var router = express.Router();
var { connection } = require('../db/database')
// 设置跨域
router.all('*',function(req,res,next) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Origin','*');
  next()
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

// var bodyparse = require('body-parser')
// var urlncodeParser = bodyparse.urlencoded({ extended: true })

router.post('/index.html', function (req, res) {
  var sql = `insert into liyu_info (contacts,email,mobile,content)values('${req.body.contacts}','${req.body.email}','${req.body.mobile}','${req.body.content}')`
  console.log(sql)
  connection.query(sql, function (err, data) {
    if (err) {
      console.log(err)
    } else {
      res.send({
        code: 1,
        data: data,
        msg: "success"
      })
    }
  })

})

module.exports = router;
