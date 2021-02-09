// require express
var express = require("express");
// variable to hold router
var router = express.Router();

// variable to hold burger model
var burger = require("../models/burger");

// creates get route to retrieve data from database
router.get("/", function(req, res) {
    // renders all data from database when homepage is reached - ?
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// creates post route to add data
router.post("/api/burgers", function(req, res) {
    // inserts a burger based on name and if it was devoured or not
    burger.insertOne(["burger_name, devoured"], 
        [req.body.name, req.body.devoured], 
        function(result) {
            // send back id of newly added burger
            res.json({ id: result.insertId });
        });
});

// creates put route to update data
router.put("/api/burgers/:burger_id", function(req, res) {
    var condition = "burger_id = " + req.params.burger_id;
    // console logs the burger's id
        // console.log("Burger Id: " + condition);
    // updates burger's devoured status based on burger_id
    burger.updateOne({
        devoured: req.body.devoured},
        condition, function(result) { 
            if (result.changedRows == 0) {
            // if no rows get changed the ID doesn't exist, so it sends 404 error
            return res.status(404).end();
        } else {
            // if any rows have been changed it will return a succesful code
            res.status(200).end();
        }
    });
});

// creates route to delete the burger
    router.delete("/api/burgers/:burger_id", function(req, res) {
        var condition = "burger_id = " + req.params.burger_id;

        console.log("this is the condition " + condition)
        // console logs the burger id
            // console.log("Burger Id: " + condition);
        // deletes burger from database based on burger_id
        burger.deleteOne({
            burger_id: req.body.burger_id},
            condition, function(result) {
            if (result.affectedRow == 0) {
                // if no rows are changed then the id must not exist, so 404 error is shown
                return res.status(404).end();
            } else {
                // if at least one row is affected then it will return a succesful code
                res.status(200).end();
            }
        });
    });

// exports router object for server to use
module.exports = router;