// requires connection from 'connection.js'
const connection = require("./connection");

// object to hold all MySQL functions
var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burger";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(colToSearch) {
        var queryString = "INSERT INTO burger";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(colToUpdate, newVal, colToSearch, oldVal) {
        // may be "UPDATE burger SET ? WHERE ?"
        var queryString = "UPDATE burger SET ?? = ? WHERE ?? = ?"
        connection.query(queryString, [colToUpdate, newVal, colToSearch, oldVal], function(err, result) {
            if (err) throw err
            console.log(result)
        });
    }
};