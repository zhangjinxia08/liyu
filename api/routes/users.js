var express = require('express');
var router = express.Router();
var { connection } = require('../db/database')
router.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', '*');
    next()
})

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;