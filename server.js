var http = require('http');

var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

// var server = http.createServer(function(req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end('<h1>Hello World</h1>');
// });
app.get('/', function(req, res){
  res.send('hello world');
});


var port = Number( process.env.PORT || 3000);

app.listen(port);
