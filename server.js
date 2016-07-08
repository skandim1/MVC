var http = require('http');

var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/'));

app.get('/', function(req, res){
  res.sendfile('public/template/index.html', {root: __dirname })
});


var port = Number( process.env.PORT || 3000);

app.listen(port);
