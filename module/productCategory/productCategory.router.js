const express = require('express');
const router = express.Router();
const {
    addProductCategoryController, getAllProductCategoryController, getOneProductCategoryController,
    updateOneProductCategoryController
} = require('./productCategory.controller');


router.route('/').post(addProductCategoryController);
router.route('/').get(getAllProductCategoryController);
router.route('/:id').get(getOneProductCategoryController);
router.route('/:id').put(updateOneProductCategoryController);


module.exports = router;
