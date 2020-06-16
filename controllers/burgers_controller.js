var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([req.body.burger_name, req.body.devoured], function(result) {
      console.log("Inserted! " + result);
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    console.log("eating Burger #" + req.params.id);
    cat.update({devoured: true},
      condition,
      function(result) {
          //make sure this actually changes something before saying it went well.
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  