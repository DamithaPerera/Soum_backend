const productService = require('./product.service');

let msg = {}

exports.addProductController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await productService.addProductService(requestBody);

        msg.message = "success"
        msg.data = data
        res.status(201).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

exports.updateProductController = async (req, res, next) => {
    try {
        const requestBody = req.body;
        const data = await productService.addProductService(requestBody);

        msg.message = "success"
        msg.data = data
        res.status(201).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}
