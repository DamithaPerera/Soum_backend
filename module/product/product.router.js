const express = require('express');
const router = express.Router();
const {
    getAllProductController, addProductController, getOneProductController,
} = require('./product.controller');


router.route('/').post(addProductController);
router.route('/').get(getAllProductController);
router.route('/:id').get(getOneProductController);


module.exports = router;
