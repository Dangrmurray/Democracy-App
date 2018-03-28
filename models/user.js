var mongoose = require("mongoose");

// Create (save) reference ot schema constructor
var Schema = mongoose.Schema;

// Uses Schema constructor to create new UserSchema object
var UserSchema = new Schema({
	name: {
		type: String,
		unique: true
	},

	// notes array to store ObjectIds
	notes: [
	{
		type: Schema.Types.ObjectId,

		ref: "Note"
	}
	]
});

// Creates model for schema using Mongoose
var User = mongoose.model("User", UserSchema);

// export User Model
module.exports = User; 