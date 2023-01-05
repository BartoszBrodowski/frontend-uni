const moongose = require('mongoose');

const guitarSchema = new moongose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	type: {
		type: String,
		required: true,
		trim: true,
	},
	color: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

const Guitar = moongose.model('guitars', guitarSchema);
module.exports = Guitar;