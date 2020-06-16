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
    burger.insertOne([req.body.name, false], function(result) {
      console.log("Inserted!");
      return "yay";
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    console.log("eating Burger #" + req.params.id);
    burger.updateOne(req.params.id,
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
  