// requires orm object from orm.js
const orm = require("../config/orm");

// code to call orm functions using specific input
var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res) {
            cb(res);
        });
    },
    insertOne: function(colToSearch, values, cb) {
        orm.insertOne(colToSearch, values, function(res) {
            cb(res);
        });
    },
    updateOne: function(keyValues, burgerId, cb) {
        orm.updateOne(keyValues, burgerId, function(res) {
            cb(res);
        });
    },
    deleteOne: function(burgerId, cb) {
        orm.deleteOne(burgerId, function(res) {
            cb(res)
        });
    }
};

// exports burger object
module.exports = burger;