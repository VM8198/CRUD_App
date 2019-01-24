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

userController.updatedUser = function(req,res){
	userid = req.body._id;
	userModel.findOneAndUpdate({_id: userid},req.body,function(err,updatedUser){
		console.log(updatedUser);
		res.send(updatedUser);
	})
}

userController.getUserById=function(req,res){
	userModel.find({_id: req.params.id},function(err,foundUser)
	{
		console.log("params",req.params.id);
		res.send(foundUser);
		console.log(foundUser);
	})
}

userController.updateUser = function(req,res){

	var userid = req.body._id;
	userModel
	.findAndUpdate({_id: userid},req.body,{upsert:true},function(err,updatedUser){
		console.log(updatedUser);
		res.send(updatedUser);
	})
}


// userController.deleteUser = function(req,res){

// 	var userid = req.body.userid;
// 	userModel.remove({_id: userid},function(err,deleteUser){
// 		console.log(err,deleteUser);
// 		res.send(deleteUser)
// 	})
// }


// userController.getUserById=function(req,res){

// 	userModel.find({_id: req.params.id},function(err,foundUser)
// 	{
// 		res.send(err || foundUser);
// 	})
// }

// userController.getUsers = function(req,res){
// 	userModel
// 	.find({})
// 	.populate('post')
// 	.exec(function(err,users){
// 		res.send({users:users});
// 	})
// }







module.exports = userController;
