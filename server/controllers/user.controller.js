var userModel = require('../models/user.model');
let userController = {};

userController.addUser = function(req,res){
	console.log(req.body);
	var user = new userModel(req.body);
	user.save(function(err,savedUser){
		console.log(savedUser);
		res.send(savedUser);
	})
console.log(req.body);
}


userController.getUsers = function(req,res){
	userModel.find({},function(err,foundUser){
		console.log("Get Users From Datbase ==>",foundUser);
		res.status(200).json(foundUser);
	})
}

userController.getUserById = function(req,res){
	userModel.find({_id: req.params.id},function(err,foundUser)
	{
		console.log("params",req.params.id);
		res.send(foundUser);
		console.log(foundUser);
	})
}

userController.updateUser = function(req,res){
	var userid = req.body._id;
	var data = {name: req.body.name, phone: req.body.phone};
	userModel
	.findOneAndUpdate({_id: userid},data,{upsert: true, new: true},function(err,updatedUser){
		console.log("req.body : " ,req.body);
		console.log("updated User",updatedUser || err);
		res.send(updatedUser);
	})	
}


userController.deleteuser = function(req,res){
console.log("params",req.params);
	var userid = req.params.id;
	userModel.remove({_id: userid},function(err,deleteUser){
		console.log("id of deleted user :",userid);
		res.send(deleteUser);
	})
}


module.exports = userController;
