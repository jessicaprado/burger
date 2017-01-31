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

router.post('/create', function (req, res){
	burger.create([req.body.burger, req.body.devoured], function (err, data){
		if (err) throw err;
    	res.redirect("/");
    	console.log("data: " + data);
    	console.log("burger: " + req.body.burger);
    	console.log("devoured: " + req.body.devoured);
	});
});

/*router.post('/update/:id', function(req, res) {
	console.log(req.params.id);
	connection.query("UPDATE burger SET devoured=1 WHERE id = ?", [req.params.id], function(err, data){
		res.redirect('/');
	})
})*/

module.exports = router;