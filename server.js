var express = require('express');
var app = express();

app.use('/', express.static('./'));

app.get('/', function(req, res) {
	res.send("Hello World");
});


var port = Number(process.env.PORT || 3010);
app.listen(port);

console.log('Server running at http://localhost:3000');
