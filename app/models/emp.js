var mongoose = require('mongoose');

module.exports = mongoose.model('users', {
	name : String,
	project : Object
});