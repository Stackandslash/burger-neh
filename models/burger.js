var orm = require("../config/orm");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(vals, cb) {
      orm.insertOne("burgers", vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(id, cb) {
      orm.updateOne("burgers", id, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;