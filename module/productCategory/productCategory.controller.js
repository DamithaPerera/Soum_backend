const productCategory = require('./productCategory.service');

let msg = {}

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
