const express = require('express');
const router = express.Router();
const {
    // getAllProducts,
    // getsingleProduct,
    updateProductController,
    addProductController,
} = require('./product.controller');


router.route('/').post(addProductController);
router.route('/').put(updateProductController);
// router.route("/:id").get(getsingleProduct);



module.exports = router;
