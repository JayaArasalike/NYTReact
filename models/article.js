var mongoose = require("mongoose");

var Schema = mongoose.schema;

var articleSchema = new Schema({
	title: {
		type: String,
		required: true 
	},
	date: { 
		 type: Date,
		 default: Date.now
	},
	favorited: {
	    type: Boolean,
	    default: false
  	},

	url: {
		type: String,
		required: true
	}
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;