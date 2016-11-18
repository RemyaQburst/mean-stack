// server.js

// modules =================================================
var express        = require('express'),
	app            = express();
	bodyParser = require('body-parser');

// set our port
var port = process.env.PORT || 8080; 

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());   
// routes ==================================================
app.use(express.static(__dirname + '/public'));
require('./app/routes')(app); // configure our routes

// expose app           
exports = module.exports = app; 
// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);    