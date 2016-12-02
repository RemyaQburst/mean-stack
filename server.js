// server.js

// modules =================================================
var express        = require('express'),
	app            = express();
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'); 					// mongoose for mongodb;
	/*logger = require('morgan');*/
var database = require('./config/db'); 			// load the database config

// configuration ===============================================================
mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io
// set our port
var port = process.env.PORT || 8080; 

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());  
//app.use(logger); 
// routes ==================================================
app.use(express.static(__dirname + '/public'));
require('./app/routes')(app); // configure our routes

// expose app           
//exports = module.exports = app; 
// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);    