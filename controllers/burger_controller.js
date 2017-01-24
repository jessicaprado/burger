var express = require('express');
var connection = require('../config/connection.js');

//var burger = require('../models/burger.js');

module.exports = function() {
app.get("/", function(req, res) {

    connection.query("SELECT * FROM burger_db.burger;", function(err, data) {
      if (err) throw err;

      // Test it
      console.log('The solution is: ', data);

      // Test it
      // res.send(data);

      res.render("index", { name: data });
    });
});

}