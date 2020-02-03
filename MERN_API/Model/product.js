let mongoose = require('mongoose');
let productSchema = new mongoose.Schema({
	title: {
		type:String,
		required: 'title required',
		
	},
	description: {
		type:String
	},
	category :{
		type: mongoose.Schema.Types.ObjectId, 
		ref: 'category'
	},
	image: {
		type: String
	},
	price: {
		type: Number
	}


});
module.exports= mongoose.model('product',productSchema);