//Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3000;

mongoose.Promise = bluebird;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

var db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";

//Connect mongoose to our database
// mongoose.connect(db, function(error){
// 	if(error) {
// 		console.log(error);
// 	}
// 	//or log a success message
// 	else {
// 		console.log("mongoose connection is succesful");
// 	}
// });
mongoose.connect("mongodb://heroku_wppc6vf0:s8ergdvlplb36853s0vpecuqde@ds133814.mlab.com:33814/heroku_wppc6vf0");
//start the server
app.listen(PORT, function() {
	console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});

//mongodb://heroku_wppc6vf0:s8ergdvlplb36853s0vpecuqde@ds133814.mlab.com:33814/heroku_wppc6vf0