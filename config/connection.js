var mysql = require('mysql');

module.exports = function() {
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

}