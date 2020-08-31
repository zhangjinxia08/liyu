var express = require('express');
var router = express.Router();
// var { connection } = require('../db/database')
// connection.connect()
router.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', '*');
        next()
    })
    /* GET users listing. */
    // router.get('/', function(req, res, next) {
    //   res.send('respond with a resource');
    // });
    // 头部接口
router.get('/header', function(req, res, next) {
        var sql = `select * from header`
        connection.query(sql, function(err, data) {
            if (err) {
                console.log(err)
            } else {
                res.send(data)

            }
        })
    })
    // 图片请求接口
router.get('/pic', function(req, res, next) {
    var sql = `select * from pic`;
    connection.query(sql, function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.send(data)

        }
    })
})

// router.get('/come-in-liyu.html', function(req, res, next) {
//     res.render('./A-come-in-liyu.html', {})
//         // res.send('666')

// })
module.exports = router;