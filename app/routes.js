var path = require('path');
var Emps = require('./models/emp');
module.exports = function(app) {
	app.get('/', function(req, res) {
	    res.sendFile(path.join(__dirname, '../public/index.html'));
	});
	app.get('/getusers', function(req, res) {
        // use mongoose to get all todos in the database
        Emps.find(function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(users); // return all todos in JSON format
        });
    });
}
