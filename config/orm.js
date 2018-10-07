var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString,[table, cols, vals], function (err, result) {
            if(err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(table, cols, newVal, vals, tarVal, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [table, cols, newVal, vals, tarVal], function (err, result) {
            if(err) throw err;
            cb(result);
            console.log(result);    
        });
    }
};

module.exports = orm;
