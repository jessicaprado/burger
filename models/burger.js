var orm = require('./../config/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burger', function(res){
			cb(res)
		});
	},
	create: function(name, cb) {
		orm.create('burger', name, function(res){
			cb(res);
			console.log("res: " + res);
		})
	}
}

module.exports = burger;