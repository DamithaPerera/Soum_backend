const express = require('express');
const router = express.Router();
const {
    addProductCategoryController, getAllProductCategoryController
} = require('./productCategory.controller');


router.route('/').post(addProductCategoryController);
router.route('/').get(getAllProductCategoryController);
// router.route('/:id').get(getOneProductCategoryController);


module.exports = router;
