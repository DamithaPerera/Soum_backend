const productCategory = require('./productSub.service');

let msg = {}

// @desc      Add create new sub category
// @route     POST /api/v1/product
exports.addProductSubCategoryController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await productCategory.addProductSubCategoryService(requestBody);

        msg.message = "success"
        msg.data = data
        res.status(201).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

// @desc      GET all sub category
// @route     GET /api/v1/product
exports.getAllProductSubCategoryController = async (req, res, next) => {
    try {
        const {skip, limit} = req.query
        const data = await productCategory.getAllProductSubCategoryService(skip, limit);

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

// @desc      GET one sub category
// @route     GET /api/v1/product
exports.getOneProductSubCategoryController = async (req, res, next) => {
    try {
        const subCatId = req.params.id
        const data = await productCategory.getOneProductSubCategoryService(subCatId);

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

// @desc      Update one sub category
// @route     PUT /api/v1/product
exports.updateOneProductSubCategoryController = async (req, res, next) => {
    try {
        const subCatId = req.params.id
        const requestBody = req.body;
        const data = await productCategory.updateOneProductSubCategoryService(subCatId, requestBody);

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}
