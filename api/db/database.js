var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
<<<<<<< HEAD
    database: 'liyu'
=======
    database: ''
>>>>>>> 9741dd429dedc5cb2cd05330c49456435c486c99
})
connection.connect()
module.exports = {
    connection
}