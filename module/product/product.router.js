const express = require('express');
const router = express.Router();
const {
    // getAllProducts,
    // getsingleProduct,
    addProductController,
} = require('./product.controller');


router.route('/').post(addProductController);
// router.route("/:id").get(getsingleProduct);



module.exports = router;
