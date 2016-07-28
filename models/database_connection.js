var mysql = require('mysql');
var connection = mysql.createConnection({
	host: "localhost",
	user: "root", 
	password: "",
	database: "members"
});

connection.connect(function(err){
	if(err) {
		console.error('error connecting ' + err.stack);
		return;
	}
	console.log('Connection established');
});

module.exports = connection;