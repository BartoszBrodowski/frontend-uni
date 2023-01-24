require('dotenv').config();
const Guitar = require('../models/Guitar.js');

module.exports.fetchGuitars = async (req, res) => {
	try {
		const guitars = await Guitar.find();
		res.status(200).json(guitars);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

module.exports.postGuitar = async (req, res) => {
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
