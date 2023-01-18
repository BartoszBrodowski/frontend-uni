const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		trim: true,
	},
	firstName: {
		type: String,
		required: true,
		trim: true,
	},
	lastName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		trim: true,
	},
	isLoggedIn: {
		type: Boolean,
		default: false,
	},
	password: {
		type: String,
		required: true,
	},
	shippingAddress: {
		type: Object,
		required: false,
	},
	wishlist: {
		type: Array,
		default: [],
	},
});

const User = mongoose.model('frontend_users', userSchema);
module.exports = User;
