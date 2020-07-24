// requires express and burger.js file
const express = require("express");
const burgerJS = ruquire("burger.js");

// code to create "router"
var router = express.Router();

// get request for index page
router.get("/home", function(req, res) {

})

// export the "router"
module.exports("router");





// require express
var express = require("express";
// variable to hold router
var router = express.Router();

// variable to hold burger model
var burger = require("../models/burger.js");

// creates get route to retrieve data
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// creates post route to add data
router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name, devoured"], 
        [req.body.burger_name, req.body.devoured], 
        function(result) {
            // send back id
            res.json({ id: result.insertId });
        });
});

// creates put route to update data
router.put("/api/burgers/:burger_id", function(req, res) {
    var condition = "burger_id = " + req.params.burger_id;

    console.log("condition: " + condition);

    burger.updateOne({
        devoured: req.body.devoured},
        condition, function(result) { 
            if (result.changedRows == 0) {
            // if no rows get changed the ID doesn't exist, so it sends 404 error
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:burger_id", function(req, res) {
    var condition = "burger_id = " + req.params.burger_id;

    burgers.delete(condition, function(result) {
        if (result.affectedRow == 0) {
            // if no rows are changed then the id must not exist, so 404 error is shown
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// exports router object for server to use
module.exports = router;