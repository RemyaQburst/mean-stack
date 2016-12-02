var path = require('path');
var Users = require('./models/emp');
//var Projects = require('./models/projects');
module.exports = function(app) {
	app.get('/', function(req, res) {
	    res.sendFile(path.join(__dirname, '../public/index.html'));
	});
	app.get('/getusers', function(req, res) {
        // use mongoose to get all users in the database
        Users.find({}).limit(10).exec(function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(users); // return all users in JSON format
        });
    });
    app.post('/adduser', function(req, res) {
    	/*var user = new Users(req.body);
    	console.log(user)
    	user.save(function (err, user) {
		  if (err)
                res.send(err)

		})*/
        Users.create(req.body,function(err) {
            if (err)
                return res.send(err)
            else {
	            Users.find(function(err, users) {
		            if (err)
		                res.send(err)
		            res.json(users); 
		        }); 
        	}
        });
    });
    app.get('/finduser/:name', function(req, res) {
        Users.find({name:{ "$regex": req.params.name, "$options": "i" }},function(err,users) {
            if (err)
                res.send(err)

            res.json(users);
        });
    });
}
