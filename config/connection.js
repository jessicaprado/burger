var mysql = require('mysql');	
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
 	connection = mysql.createConnection({
  		host: "localhost",
  		user: "root",
  		password: "root",
  		database: "burger_db"
	});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

connection.connect();
module.exports = connection;