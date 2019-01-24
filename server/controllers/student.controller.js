var studentModel = require('../models/student.model');
let studentController = {};

studentController.addStudent = function(req,res){
	console.log(req.body);
	var post = new studentModel(req.body);
	post.save(function(err,savedStudent){
		console.log(savedStudent);
		res.send(savedStudent);
	})
console.log(req.body);
}


studentController.getStudents = function(req,res){
	studentModel.find({},function(err,foundStudent){
		console.log("Get Users From Datbase ==>",foundStudent);
		res.status(200).json(foundStudent);
	})
}

studentController.getStudentById = function(req,res){
	studentModel.find({_id: req.params.id},function(err,foundStudent){
		console.log("params",req.params.id);
		res.send(foundStudent);
		console.log(foundStudent);
	})
}

studentController.updateStudent = function(req,res){
	var studentid = req.body._id;
	var data = {first_name: req.body.first_name, last_name: req.body.last_name};
	studentModel
	.findOneAndUpdate({_id: studentid},data,{upsert: true, new: true},function(err,updatedStudent){
		console.log("req.body : " ,req.body);
		console.log("updated post",updatedStudent|| err);
		res.send(updatedStudent);
	})	
}


studentController.deleteStudent = function(req,res){
console.log("params",req.params);
	var studentid = req.params.id;
	studentModel.remove({_id: studentid},function(err,deleteStudent){
		console.log("id of deleted post :",studentid);
		res.send(deleteStudent);
	})
}

module.exports = studentController;
