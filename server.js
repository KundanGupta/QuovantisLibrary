// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var mongojs = require('mongojs');

// configuration ===========================================
	
// config files
//var db = require('./config/db');
 //var db = mongojs('localhost:27017/LibrarySystem'); OR
 var databaseUrl = 'LibrarySystem';
 var collections = ["Users", "Books"];
 var db = mongojs(databaseUrl, collections);

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app


// CRUD Operation

// Get all books from MongoDB
app.get('/Books', function(req, res){
	
	console.log('I received a GET request');

	db.Books.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});

});