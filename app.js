//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  //var day = "";

  var day = today.toLocaleDateString("en-us", options);

  res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", function (req, res) {
  var item = req.body.newItem;
  //console.log(item);
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("running on port 3000");
});
