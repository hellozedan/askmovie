/**
 * Created by ahmad on 06/06/2015.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var movieModel = new Schema({
	"link": {
		type: String
	},
	"name": {
		type: String
	}
});
movieModel.index({url: "text", link: "text"});
module.exports = mongoose.model('Movie', movieModel);