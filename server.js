var http = require('http');

var express = require('express');
var app = express();
var db_connect = require('./models/database_connection');
var bodyParser= require('body-parser');

app.use(bodyParser.json()); //parses front end request and saves it in body object
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(bodyParser.json({ type: 'application/msword	' })); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/'));

/* difference between app.use and app.set
   use res.render instead od res.sendFile
*/
app.get('/', function(req, res){
  res.sendFile('public/template/index.html', {root: __dirname })
});
// app.get('/admin', function(req, res){
//   res.sendFile('public/template/admin.html', {root: __dirname })
// });
// app.get('/user', function(req, res){
//   res.sendFile('public/template/user.html', {root: __dirname })
// });

app.post('/api/login', function(req,res) {
	var query="select * from users where username='"+req.body.name+"'";
	//console.log(req.body.name);
	db_connect.query(query,function(err, resp){
		if(err) {
			console.log(err)
			res.send('error')
		} else {
			try{
				console.log(req.body.name);
			if(resp[0].password == req.body.password){
				console.log(req.body.password);
				res.send('success')
			}
			else {
				res.send('error')
			} 
			}catch(e){
				if(e instanceof TypeError){ //no user exists
					
					console.log("type error")
				}
			}
			
		}
	});
});

app.get('/api/customers', function(req, res) {
	var query = "select firstname, lastname, username, date_joined from users" 
	db_connect.query(query, function(err, resp) {
		if(err) {
			res.json(err)
		}
		res.json(resp)
	})
})

app.get('/api/purchases', function(req, res) {
	var query = "SELECT * FROM purchases" 
	db_connect.query(query, function(err, resp) {
		if(err) {
			res.json(err)
		}
		res.json(resp)
	})
})

app.get('/api/departments', function(req, res) {
	var query = "SELECT * FROM departments" 
	db_connect.query(query, function(err, resp) {
		if(err) {
			res.json(err)
		}
		res.json(resp)
	})
})

app.get('/api/products:dept_name', function(req, res) {
	var dept_name = req.params.dept_name;
	var query = "SELECT * FROM products WHERE dept_name='"+dept_name+"'and qoh = 0"; 
	db_connect.query(query, function(err, resp) {
		if(err) {
			res.json(err)
		}
		res.json(resp)
	})
})

var port = Number( process.env.PORT || 4000);

app.listen(port);

//use express routing