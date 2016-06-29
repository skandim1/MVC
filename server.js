var http = require('http');

var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));


app.get('/', function(req, res){
  res.send('hello world');
});


var port = Number( process.env.PORT || 3000);

app.listen(port);
