// requires orm object from orm.js
const orm = require(".././config/orm");

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
    updateOne: function(keyValues, condition, cb) {
        orm.updateOne(keyValues, conditon, function(res) {
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
modules.export = burger;