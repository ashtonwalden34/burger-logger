// requires express
var express = require("express");
// Looks for open port but defaults to 8000
var PORT = process.env.PORT || 8000;
// sets variable to hold expresss
var app = express();

// serves app's static content from "public"
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// requires handlebars and sets app engine to handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// requires and uses router object burger controller
var routes = require("./controllers/burger_controller.js");
app.use(routes);

// starts server and console logs port if succesful in connection
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});



// // supposedly fixes heroku error 143
// var reqTimer = setTimeout(function wakeUp() {
//   request("https://nameless-brushlands-84131.herokuapp.com", function() {
//      console.log("WAKE UP DYNO");
//   });
//   return reqTimer = setTimeout(wakeUp, 1200000);
// }, 1200000);