var subjectModel = require('../models/subject.model');
let subjectController = {};

subjectController.addSubject = function(req,res){
	var subject = new subjectModel(req.body);
	subject.save(function(err,savedSubject){
		console.log(savedSubject);
		res.send(savedSubject);
	})
console.log(req.body);
}

subjectController.getSubjects = function(req,res){
	subjectModel.find({},function(err,foundSubjects){
		console.log(foundSubjects);
		res.send(foundSubjects);
	})
}

subjectController.getSubjectById = function(req,res){
	subjectModel.find({_id: req.params.id},function(err,foundSubject)	{
		console.log("params",req.params.id);
		console.log("fs",res);
		res.send(foundSubject);
		console.log(foundSubject);
	})
}

subjectController.updateSubject = function(req,res){
	var subjectid = req.body._id;
	var data = {name: req.body.name, grade: req.body.grade};
	subjectModel
	.findOneAndUpdate({_id: subjectid},data,{upsert: true, new: true},function(err,updatedSubject){
		console.log("req.body : " ,req.body);
		console.log("updated subject",updatedSubject || err);
		res.send(updatedSubject);
	})	
}

subjectController.deleteSubject = function(req,res){
	subId = req.params.id;
	subjectModel.remove({_id:subId},function(err,deletedSubject){
		console.log(deletedSubject);
		res.send(deletedSubject);
	})
}

module.exports = subjectController;