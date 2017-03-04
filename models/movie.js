/**
 * Created by ahmad on 06/06/2015.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var movieModel = new Schema({
	"links": {
		type: []
	},
	"name": {
		type: String
	},
	"img": {
		type: String
	},
	"links":[
		{
			"good":Number,
			"bad":Number,
			"url":String
		}
	]
});
movieModel.index({name: "text"});
module.exports = mongoose.model('Movie', movieModel);