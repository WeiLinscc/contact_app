const express = require('express');
const ContactController = require('./controllers/ContactController');

const router = express.Router();

// app routes
router.get('/items', ContactController.index);
router.post('/items', ContactController.store);
router.patch('/items/:item', ContactController.update);
router.delete('/items/:item', ContactController.destroy);

module.exports = router;
