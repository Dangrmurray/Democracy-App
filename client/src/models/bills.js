var express = require("express")
var bodyParser = require("body-parser"); 
var logger = require("morgan");
var mongoose = require("mongoose");

// name port
var PORT = 3000;


// Require all models
var db = require("./models");

// Initialize express
var app = express();

// Configure middleware
// Calls morgan logger for logging requests
app.use(logger("dev"));
// body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Express.statis to serve public folder as a static directory
app.use(express.static("public"));

// Connect to MongoDB

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/populatedb", {
	useMongoClient: true
});

// Create & Save all new User documents to db when server starts. 
db.User.create({name: ""})
.then(function(dbUser) {
	console.log(dbUser);
})
.catch(function(err) {
	console.log(err.message);
});

// ROUTES
// Route to retrieving Users from db
app.get("/user", function(req, res) {
	db.User.find({})
	.then(function(dbUser) {
		res.json(dbUser);
	})
	.catch(function(err) {
		res.json(err);
	});
});

// Route for saving a comment to db and associating it to user
app.post("/submit", function(req, res) {
	// Create new note
	db.Note.create(req.body)
	.then(function(dbNote){
		return db.User.findOneAndUpdate({}, { $push: {notes: dbNote._id } }, { new: true}); 
	})
	.then(function(dbUser) {
		res.json(dbUser); 
	})
	.catch(function(err) {
		res.json(err);
	});
});


// Start server
// app.listen(PORT, function() {
// 	console.log("App is running on port " + PORT + "!");
// });