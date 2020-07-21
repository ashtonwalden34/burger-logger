// requires MySQL
const mysql = require("mysql");

// sets up connection to database
var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "password",
    // selects employee-management-system database
    database: "burger_logger_db"
});

// connects to the database
connection.connect(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

// exports connection object
module.exports(connection);