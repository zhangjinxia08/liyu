var mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'123456',
    database:'liyu'
})
connection.connect()
module.exports = {
    connection
}