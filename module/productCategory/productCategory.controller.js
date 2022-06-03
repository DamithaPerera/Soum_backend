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
        const data = await productCategory.getAllProductCategoryService();

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}
