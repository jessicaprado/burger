var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");
var controller = require('./controllers/burger_controller.js');

var PORT = process.env.PORT || 3000;
var app = express();

app.listen(PORT, function(){
  console.log('Listening on PORT: ' + PORT);
})

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");