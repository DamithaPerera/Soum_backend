const express = require('express');
const router = express.Router();
const {
    addProductSubCategoryController
} = require('./productSub.controller');


router.route('/').post(addProductSubCategoryController);


module.exports = router;
