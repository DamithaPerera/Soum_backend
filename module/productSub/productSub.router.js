const express = require('express');
const router = express.Router();
const {
    addProductSubCategoryController, getAllProductSubCategoryController, getOneProductSubCategoryController
} = require('./productSub.controller');


router.route('/').post(addProductSubCategoryController);
router.route('/').get(getAllProductSubCategoryController);
router.route('/:id').get(getOneProductSubCategoryController);


module.exports = router;
