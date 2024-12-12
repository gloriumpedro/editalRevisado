const express = require('express');
const { getItems, addItem, deleteItem } = require('../controllers/itemController');
const router = express.Router();

router.get('/', getItems);
router.post('/', addItem);
router.delete('/:id', deleteItem); // Rota para exclusão

module.exports = router;
