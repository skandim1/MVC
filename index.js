var express = require('express');
var app = module.exports = express();

var bodyParser= require('body-parser');
app.use(bodyParser.json()); //parses front end request and saves it in body object
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.json({ type: 'application/msword	' })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/'));

app.get('/', function(req, res){
  res.sendFile('public/template/index.html', {root: __dirname })
});
