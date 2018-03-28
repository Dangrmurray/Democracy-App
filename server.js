const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require('axios');
const routes = require ('./routes');
const keys = require('./config/keys');
const mongoose = require('mongoose');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
