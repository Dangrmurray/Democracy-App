var mongoose = require("mongoose");

// Create (save) reference ot schema constructor
var Schema = mongoose.Schema;

// Uses Schema constructor to create new UserSchema object
var BillSchema = new Schema({
	name: {
		type: String,
		unique: true
	},
	key: {
		type: String,
		unique: true
	},
	sponsor_name: {
		type: String,
		unique: true
	},
	sponsor_state: {
		type: String,
		unique: true
	},
	sponsor_party: {
		type: String,
		unique: true
	},
	sponsor_title: {
		type: String,
		unique: true
	},
	sponsor_url: {
		type: String,
		unique: true
	},
	congressdotgov_url: {
		type: String,
		unique: true
	},
	govtrack_url: {
		type: String,
		unique: true
	},
	summary_short: {
		type: String,
		unique: true
	},
	summary: {
		type: String,
		unique: true
	},
	active: {
		type: Boolean,
	},
	introduced_date: {
		type: String,
		unique: true
	},
	latest_major_action: {
		type: String,
		unique: true
	},
	latest_major_action_date: {
		type: String,
		unique: true
	},
	votes_yes: {
		type: Array
	},
	votes_no: {
		type: Array
	},
	votes_undecided: {
		type: Array
	}
	
});

// Creates model for schema using Mongoose
var Bill = mongoose.model("Bill", BillSchema);

// export User Model
module.exports = Bill; 