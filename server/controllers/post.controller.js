var postModel = require('../models/post.model');
let postController = {};

postController.addPost = function(req,res){
	console.log(req.body);
	var post = new postModel(req.body);
	post.save(function(err,savedPost){
		console.log(savedPost);
		res.send(savedPost);
	})
console.log(req.body);
}


postController.getPosts = function(req,res){
	postModel.find({},function(err,foundPost){
		console.log("Get Users From Datbase ==>",foundPost);
		res.status(200).json(foundPost);
	})
}

postController.getPostById=function(req,res){
	postModel.find({_id: req.params.id},function(err,foundPost)	{
		console.log("params",req.params.id);
		res.send(foundPost);
		console.log(foundPost);
	})
}

postController.updatePost = function(req,res){
	var postid = req.body._id;
	var data = {name: req.body.name, data: req.body.data};
	postModel
	.findOneAndUpdate({_id: postid},data,{upsert: true, new: true},function(err,updatedPost){
		console.log("req.body : " ,req.body);
		console.log("updated post",updatedPost || err);
		res.send(updatedPost);
	})	
}


postController.deletePost = function(req,res){
console.log("params",req.params);
	var postid = req.params.id;
	postModel.remove({_id: postid},function(err,deletePost){
		console.log("id of deleted post :",postid);
		res.send(deletePost);
	})
}

module.exports = postController;
