var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDetails = new Schema({

	name: String,
	phone: String

	
});

module.exports = mongoose.model('user', userDetails);
