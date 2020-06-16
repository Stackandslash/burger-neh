//Importing our other config file
var connection = require("./connection.js");

var orm = {
    //A function to get back all the contents of a table.
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    //Inserting a new burger, with the vals variable for type and devouredness
    insertOne: function(vals, cb) {
      var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
      console.log(queryString);
      connection.query(queryString, vals, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    // Updating a burger (to devoured). This just uses id as a variable to specify which one.
    updateOne: function(id, cb) {
      var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
      console.log(queryString);
      connection.query(queryString, id, function(err, result) {
        if (err) throw err;
        cb(result);
      });
    }
  };
  
  // Export the orm, so it can be used elsewhere
  module.exports = orm;