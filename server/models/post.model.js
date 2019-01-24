var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postDetails = new Schema({

	name: String,
	data: String
		
});

module.exports = mongoose.model('posts', postDetails);
