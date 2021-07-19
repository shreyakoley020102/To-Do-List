//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  //var day = "";
  var day = new Date().toLocaleString("en-us", { weekday: "long" });

  res.render("list", { kindOfDay: day });
});

app.listen(3000, function () {
  console.log("running on port 3000");
});
