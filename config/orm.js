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

// converts object key value pairs to sql syntax
function sqlPair(ob) {
    // array to hold key value pairs
    var keyValuePairs = []

    // goes through keys and adds key value pair to keyValuePairs array
    for (var key in ob) {
        var keyValue = ob[key];
        
        // checks to see if object was assigned it's own property
        if (Object.hasOwnProperty.call(ob, key)) {
            // if the string has spaces it will add quotation marks to preserve the value
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
              keyValue = "'" + keyValue + "'";
            }
            // pushes key (ex: name) and value to array
            keyValuePairs.push(key + "=" + value);
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
            // console.log(result);
            cb(result);
        });
    },
    insertOne: function(cols, vals, cb) {
        var queryString = "INSERT INTO burgers (" 
            + cols.toString() 
            + ") VALUES (" 
            + qmString(vals.length) + ")";

        // console.log(queryString);
        // if there is an error it will console log or it will console.log the result 
        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }
            // console.log(result);
            cb(result);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        var queryString = "UPDATE burgers SET "
            + "devoured = true" + " WHERE "
            + condition;

        // console.log(queryString);
        // if there is an error it will console log or it will console.log the result
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err
            }
            // console.log(result)
            cb(result);
        });
    },
    // function to delete from db
        deleteOne: function(condition, cb) {
            var queryString = "DELETE FROM burgers WHERE " + condition;
            
            console.log(queryString);
            // if there is an error it will console log or it will console.log the result
            connection.query(queryString, function(err, result) {
                if (err) {
                    throw err
                }
                // console.log(result)
                cb(result);
            });
        }
};

// exports orm object
module.exports = orm;