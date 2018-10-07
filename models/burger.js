var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(cols, newVal, vals, tarVal, cb) {
        orm.updateOne("burgers", cols, newVal, vals, tarVal, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;

// orm.selectAll("burgers");

// orm.insertOne("burgers", "burger_name", "The Maine Burger");

// orm.updateOne("burgers", "devoured", "true", "burger_name", "The Maine Burger");