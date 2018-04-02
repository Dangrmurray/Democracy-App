const db = require('../models');


// find all users
module.exports = {
	findAll: function(req, res) {
		db.User 
			.find({})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Add new user to db
	create: function(req, res) {
		console.log('Create User');
		db.User
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Find individual user by ID
	findById: function(req, res) {
		console.log("Find User by User-DB");
		db.User
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
		},

	// update user - not sure when this will be used
	update: function(req, res) {
		console.log("Update User");
		db.User
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	// Delete user - won't be doing this
	remove: function(req, res) {
		console.log("Delete User");
		db.User
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
}

