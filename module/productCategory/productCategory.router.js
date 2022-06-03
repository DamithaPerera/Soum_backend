const express = require('express');
const router = express.Router();
const {
    addProductCategoryController
} = require('./productCategory.controller');


router.route('/').post(addProductCategoryController);
// router.route('/').get(getAllProductController);
// router.route('/:id').get(getOneProductController);


module.exports = router;
