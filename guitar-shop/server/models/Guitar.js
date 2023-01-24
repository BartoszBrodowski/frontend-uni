const moongose = require('mongoose');

const guitarSchema = new moongose.Schema({
	id: {
		type: String,
		required: true,
		trim: true,
	},
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
	category: {
		type: String,
		required: true,
		trim: true,
	},
	releaseDate: {
		type: Date,
		required: true,
	},
	stringsId: {
		type: String,
		required: true,
		trim: true,
	},
});

const Guitar = moongose.model('guitars', guitarSchema);
module.exports = Guitar;
