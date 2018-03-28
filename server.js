const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');

const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');



const PORT = process.env.PORT || 3001;


const app = express();
const axios = require('axios');
const routes = require ('./routes');
const keys = require('./config/keys');
const mongoose = require('mongoose');

app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: [keys.session.cookieKey]
}));
//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () =>{
	console.log('connected to mongodb');
});

//set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/billwhip_db"
);

// Routage
app.use(routes);

//connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () =>{
	console.log('connected to mongodb');
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
