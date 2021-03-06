// requires orm object from orm.js
const orm = require("../config/orm");

// code to call orm functions using specific input
var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne(cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne(objColVals, condition, function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition, cb) {
        orm.deleteOne(condition, function(res) {
            cb(res)
        });
    }
};

// exports burger object
module.exports = burger;