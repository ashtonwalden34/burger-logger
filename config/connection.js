// requires MySQL
const mysql = require("mysql");
var connection;

// // sets up connection to database
// var connection = mysql.createConnection({
//     host: "localhost", 
//     port: 3306,
//     user: "root",
//     password: "password",
//     // selects burger logger database
//     database: "burger_logger_db"
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: burger_logger_db
    });
};

// connects to the database
connection.connect(function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log("connected as id " + connection.threadId);
    }
});

// exports connection object
module.exports = connection;