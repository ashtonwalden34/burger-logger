// requires connection from 'connection.js'
const connection = require("./connection");

// holds '?' for input objects to be able to make queries to database
function qmString(num) {
    var questionMarks = [];

    // loops through and pushes question marks to array for question marks in MySQL queries
    for (let i = 0; i < num; i++) {
        questionMarks.push("?");
    }

    // parses contents of array to string
   return questionMarks.toString();
}


function sqlPair(object) {
    // array to hold key value pairs
    var keyValuePairs = []

    // goes through keys and adds key value pair to keyValuePairs array
    for (var key in object) {
        var keyValue = object[key];
        
        // checks to see if object was assigned it's own property
        if (Object.hasOwnProperty.call(object, keyValue)) {
            // if the string has spaces it will add quotation marks to preserve the value
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              value = "'" + value + "'";
            }
            // pushes key (ex: name) and value to array
            keyValuePairs.push(keyValue + "=" + value);
          }
    }
    // parses contents of keyValuePairs array to string
    return keyValuePairs.toString();     
}

// object to hold all MySQL functions
var orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        // if there is an error it will console log or it will console.log the result
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(colToSearch, values, cb) {
        var queryString = "INSERT INTO burgers (" 
            + colToSearch.toString() 
            + ") VALUES (" 
            + qmString(values.length) + ")";

        console.log(queryString);
        // if there is an error it will console log or it will console.log the result 
        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(keyValues, burgerId, cb) {
        var queryString = "INSERT INTO burgers SET "
            + sqlPair(keyValues) + " WHERE "
            + burgerId;

        console.log(queryString);
        // if there is an error it will console log or it will console.log the result
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            console.log(result)
            cb(result);
        });
    },
    deleteOne: function(burgerId, cb) {
        var queryString = "DELETE FROM burgers WHERE " + burgerId;
        
        console.log(queryString);
        // if there is an error it will console log or it will console.log the result
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            console.log(result)
            cb(result);
        });
    }
};

// exports orm object
module.exports = orm;