var connection = require('../config/connection.js');

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput +";";
		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		})	
	}
};

module.exports = orm;

	

/*  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });
  },*/