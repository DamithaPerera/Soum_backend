const productCategory = require('./productCategory.service');

let msg = {}

// @desc      create category
// @route     POST /api/v1/category
exports.addProductCategoryController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await productCategory.addProductCategoryService(requestBody);

        msg.message = "success"
        msg.data = data
        res.status(201).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

// @desc      Get all categories
// @route     GET /api/v1/category
exports.getAllProductCategoryController = async (req, res, next) => {
    try {
        const {skip, limit} = req.query
        const data = await productCategory.getAllProductCategoryService(skip, limit);

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

// @desc      get on category
// @route     GET /api/v1/category
exports.getOneProductCategoryController = async (req, res, next) => {
    try {
        const categoryId = req.params.id
        const data = await productCategory.getOneProductCategoryService(categoryId);

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

// @desc      update on category
// @route     PUT /api/v1/category
exports.updateOneProductCategoryController = async (req, res, next) => {
    try {
        const categoryId = req.params.id
        const requestBody = req.body;
        const data = await productCategory.updateOneProductCategoryService(categoryId, requestBody);

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}
