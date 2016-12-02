var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
	 _userid: {
	    type: String,
	    minlength : [4, 'Enter you 4 digit employee id'],
	    maxlength :[4, 'Employee id cannot be more than 4 digits'],
	    required: [true, 'Please provide an userid']
    },
	name: {
	    type: String,
        uppercase: true,
	    validate: {
          validator: function(v) {
            return /^[a-zA-Z]+$/g.test(v);
          },
          message: '{VALUE} is not a valid name!'
        },
        trim: true,
	    required: [true, 'Please provide a valid name']
    },
	age : {
        type: Number,
        min : [0, 'Please enter a valid age'],
        max :[60, 'Age cannot be more than 60 years'],
        required: [true, 'Please provide age']
    },
	exp : {
        type: Number,
        required: [true, 'Please provide experience']
    } 
});
var Users = mongoose.model('Users', userSchema);
Users.schema.path('_userid').validate(function(value, respond) {
  Users.findOne({_userid: value}, function(err, user) {
    if(err) 
        throw err;
    if(user) 
        return respond(false);
    respond(true);
  });
}, 'Sorry, this employee id is already taken');
module.exports = Users;