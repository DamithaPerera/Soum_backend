const express = require('express');
const router = express.Router();
const {
    getAllProductController, addProductController, getOneProductController, updateOneProductController,
} = require('./product.controller');


router.route('/').post(addProductController);
router.route('/').get(getAllProductController);
router.route('/:id').get(getOneProductController);
router.route('/:id').put(updateOneProductController);


module.exports = router;
