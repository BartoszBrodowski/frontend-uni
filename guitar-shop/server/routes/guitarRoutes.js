const express = require('express');
const guitarController = require('../controllers/guitarController.js');
const router = express.Router();

router.get('/fetch', guitarController.fetchGuitars);
router.post('/post', guitarController.postGuitar);

module.exports = router;
