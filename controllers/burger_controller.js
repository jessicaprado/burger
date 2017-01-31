var express = require('express');
var router = express.Router();
var burger = require('./../models/burger.js');

router.get('/', function(req, res){
	burger.all(function(data){
		var object = { burger: data }
		//console.log(object);
		res.render('index', object);
	});
});

/*router.post('/create', function (req, res){
	connection.query("INSERT INTO burger (burger_name, devoured) VALUES (?, ?)", [req.body.burger, req.body.devoured], function (err, data){
		if (err) throw err;
    	res.redirect("/");
	})
});

router.post('/update/:id', function(req, res) {
	console.log(req.params.id);
	connection.query("UPDATE burger SET devoured=1 WHERE id = ?", [req.params.id], function(err, data){
		res.redirect('/');
	})
})*/

module.exports = router;