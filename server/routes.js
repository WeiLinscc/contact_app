const express = require('express');
const ItemController = require('./controllers/ItemController');

const router = express.Router();

// app routes
router.get('/items', ItemController.index);
router.post('/items', ItemController.store);
router.patch('/items/:item', ItemController.update);
router.delete('/items/:item', ItemController.destroy);

module.exports = router;
