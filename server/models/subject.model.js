var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subjectDetails = new Schema({

	name: String,
	grade: String
	
});

module.exports = mongoose.model('subject', subjectDetails);
