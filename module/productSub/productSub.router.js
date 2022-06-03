const express = require('express');
const router = express.Router();
const {
    addProductSubCategoryController, getAllProductSubCategoryController
} = require('./productSub.controller');


router.route('/').post(addProductSubCategoryController);
router.route('/').get(getAllProductSubCategoryController);


module.exports = router;
