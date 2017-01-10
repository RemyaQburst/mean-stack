var path = require('path');
var Users = require('./models/emp');
//var Projects = require('./models/projects');
module.exports = function(app) {
	app.get('/', function(req, res) {
	    res.sendFile(path.join(__dirname, '../public/index.html'));
	});
	app.get('/getusers', function(req, res) {
        //Users.find(function(err, users) {
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
        Users.create(req.body,function(user,err) {
            if (err)
                return res.send(err)
            else {
                res.json(user)
	         //    Users.find(function(err, users) {
		        //     if (err)
		        //         res.send(err)
		        //     res.json(users); 
		        // }); 
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
    app.put('/updateuser/:_userid',function(req, res) {
        // Users.findOne({ '_userid':req.params._userid}, function(err, user) {
        //     if (err)
        //         res.send(err);
        //     //user = req.body;
        //     user._userid = req.body._userid;
        //     user.age = req.body.age;
        //     user.exp = req.body.exp;
        //     user.name = req.body.name;
        //     // user.save(function(err) {
        //     //     if (err)
        //     //         res.send(err);

        //     //     res.json({ message: 'Bear updated!' });
        //     // });
        //     user.save(function (err, updateduser) {
        //         if (err) {
        //             res.status(500).send(err)
        //         }
        //         res.send(updateduser);
        //     });
        // });
        Users.findOneAndUpdate({'_userid':req.params._userid}, req.body, {upsert:true}, function(err, doc){
            if (err)
              res.send(err);
            res.send("succesfully updated");
        });
    });
    app.delete('/updateuser/:_userid', function(req, res) {
        Users.remove({
          _userid: req.params._userid
        }, function (err, blog) {
          if (err) return res.send(err);
          res.json({ message: 'Success'});
        });
    });
    // Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
    //   if (err) return handleError(err);
    //   res.send(tank);
    // });
}
