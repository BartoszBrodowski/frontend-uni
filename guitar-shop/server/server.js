require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const bcrypt = require('bcrypt');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const uri = `mongodb+srv://admin:${process.env.MONGO_PASSWORD}@cluster0.smsb3gz.mongodb.net/?retryWrites=true&w=majority`;

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
		user = await user.updateOne({ isLoggedIn: true });
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
		user.save()
		res.status(200).json({ msg: 'Logged out' });
	} catch (error) {
		res.status(500).json({ error });
	}
};

app.post('/register', register);
app.post('/login', login);
app.post('/logout', logout);

app.get('/login/:email', async (req, res) => {
	try {
		const { email } = req.params;
		const user = await User.find({ email });
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
})

app.listen(8000, () => {
	console.log('listening on port 8000');
});
