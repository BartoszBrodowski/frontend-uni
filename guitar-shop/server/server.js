require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const Guitar = require('./models/Guitar.js');
const bcrypt = require('bcrypt');
const cors = require('cors');
const guitarRoutes = require('./routes/guitarRoutes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/guitars', guitarRoutes);

const uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@pwasil.pl:27017/bartek`;

// Connect to database
async function run() {
	try {
		await mongoose.connect(uri);
		console.log('Connected');
	} catch (error) {
		console.error(error);
	}
}

// Run the function to connect to database
run();

// POST REQUEST FUNCTIONS

const register = async (req, res) => {
	try {
		const { username, firstName, lastName, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({
			username,
			firstName,
			lastName,
			email,
			isLoggedIn: false,
			password: hashedPassword,
			shippingAddress: {},
			wishlist: [],
		});
		await user.save();
		res.status(201).json({ user: user._id });
	} catch (error) {
		res.status(400).json({ error });
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'User does not exist' });
		}
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res.status(400).json({ message: 'Invalid credentials' });
		}
		await user.updateOne({ isLoggedIn: true });
		res.status(200).json({ msg: 'Logged in' });
	} catch (error) {
		res.status(500).json({ error });
	}
};

const logout = async (req, res) => {
	try {
		const { email } = req.body;
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'User does not exist' });
		}
		user = await user.updateOne({ isLoggedIn: false });
		user.save();
		res.status(200).json({ msg: 'Logged out' });
	} catch (error) {
		res.status(500).json({ error });
	}
};

const editShippingAddress = async (req, res) => {
	try {
		const { email, shippingAddress } = req.body;
		let user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: 'User does not exist' });
		}
		user = await user.updateOne({ shippingAddress: shippingAddress });
		res.status(200).json({ msg: 'Shipping address added' });
	} catch (error) {
		res.status(500).json({ error });
	}
};

const addGuitar = async (req, res) => {
	try {
		const { name, type, color, description, price, image } = req.body;
		const guitar = new Guitar({
			name,
			type,
			color,
			description,
			price,
			image,
		});
		await guitar.save();
		res.status(201).json({ guitar: guitar._id });
	} catch (error) {
		res.status(400).json({ error });
	}
};

// GET REQUEST FUNCTIONS

const getLogin = async (req, res) => {
	try {
		const { email } = req.params;
		const user = await User.find({ email });
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getShippingAddress = async (req, res) => {
	try {
		const { email } = req.params;
		const user = await User.find({ email });
		res.status(200).json(user.shippingAddress);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getGuitarList = async (req, res) => {
	try {
		const guitars = await Guitar.find();
		console.log(guitars);
		res.status(200).json(guitars);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const deleteShippingAddress = async (req, res) => {
	try {
		const { username } = req.params;
		let user = await User.findOne({ username });
		if (!user) {
			return res.status(404).json({ message: 'User does not exist' });
		}
		user = await user.updateOne({ shippingAddress: {} });
		res.status(200).json({ msg: 'Shipping address deleted' });
	} catch (error) {
		res.status(500).json({ error });
	}
};

app.post('/register', register);
app.post('/login', login);
app.post('/logout', logout);
app.post('/addGuitar', addGuitar);

app.get('/login/:email', getLogin);
app.get('/getShippingAddress/:email', getShippingAddress);

app.put('/changeShippingAddress', editShippingAddress);

app.delete('/deleteAddress/:username', deleteShippingAddress);

app.listen(8000, () => {
	console.log('listening on port 8000');
});
