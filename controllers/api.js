var
	User = require('../models/User.js')

module.exports = {

	// list all users
	index: function(req,res){
		User.find({}, function(err, users){
			if(err) return console.log(err)
			res.json(users)
		})
	},

	// create new user
	create: function(req,res){
		User.create(req.body, function(err, user){
			if(err) return console.log(err)
			res.json({success: true, message: "User created!", user: user})
		})
	},

	// show specific user
	show: function(req,res){
		User.findOne({_id: req.params.id}, 'email name', function(err, user){
			if(err) return console.log(err)
			res.json(user)
		})
	},

	// update a user
	update: function(req,res){
		User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, user){
			if(err) return console.log(err)
			res.json({success: true, message: "User updated!", user: user})
		})
	},

	// delete a user
	delete: function(req,res){
		User.findOneAndRemove({_id: req.params.id}, function(err){
			if(err) return console.log(err)
			res.json({success: true, message: "User Deleted!"})
		})
	} 

}