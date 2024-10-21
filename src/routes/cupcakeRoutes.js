const express = require('express');
const router = express.Router();
const cupcakeController = require('../controllers/cupcakeController');

router.post('/', cupcakeController.addCupcake);
router.get('/', cupcakeController.getCupcakes);
router.get('/:cupcakeId', cupcakeController.getCupcakeById);
router.put('/:cupcakeId', cupcakeController.updateCupcake);
router.delete('/:cupcakeId', cupcakeController.deleteCupcake);

module.exports = router;
