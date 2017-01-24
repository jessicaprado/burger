var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;
var app = express();

app.listen(PORT, function(){
  console.log('Listening on PORT: ' + PORT);
})