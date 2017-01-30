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

app.post('/', function (req, res){
	console.log(req.body);
	connection.query("INSERT INTO burger (burger_name, devoured) VALUES (?, ?)", [req.body.burger, req.body.devoured], function (err, data){
		if (err) throw err;
		console.log(data);
    	res.redirect("/");
	})
});

app.put('/update/:id', function(req, res) {
	var updatedBurger = req.params.id;
	console.log(req);
	connection.query("UPDATE burger SET devoured = ? WHERE id = ?", [req.body.devoured, updatedBurger], function(err, data){
		console.log(err);
		res.redirect('/');
	})
})

}