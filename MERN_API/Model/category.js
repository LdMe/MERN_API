let mongoose = require('mongoose');
let categorySchema = new mongoose.Schema({
	title: {
		type:String,
		required: 'title required',
		
	},
	description: {
		type:String
	}


});
module.exports= mongoose.model('category',categorySchema);