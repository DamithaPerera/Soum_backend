const productCategory = require('./productSub.service');

let msg = {}

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

exports.getAllProductSubCategoryController = async (req, res, next) => {
    try {
        const data = await productCategory.getAllProductSubCategoryService();

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}
