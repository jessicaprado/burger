var express = require('express');
var app = express();
var burger = require('../models/burger.js');
var connection = require('../config/connection.js');

module.exports = function(app, connection){

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burger;", function(err, data) {
      if (err) throw err;
      res.render("index", {burger: data});
    });
});

app.post('/create', function (req, res){
	connection.query("INSERT INTO burger (burger_name, devoured) VALUES (?, ?)", [req.body.burger, req.body.devoured], function (err, data){
		if (err) throw err;
    	res.redirect("/");
	})
});

app.post('/update/:id', function(req, res) {
	console.log(req.params.id);
	connection.query("UPDATE burger SET devoured=1 WHERE id = ?", [req.params.id], function(err, data){
		res.redirect('/');
	})
})

}