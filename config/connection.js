const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "password",
    // selects employee-management-system database
    database: "burger_logger_db"
});

connection.connect(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

module.exports(connection);