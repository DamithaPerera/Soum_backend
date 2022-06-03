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

exports.getAllProductController = async (req, res, next) => {
    try {
        const data = await productService.addProductService();

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}

exports.getOneProductController = async (req, res, next) => {
    try {
        const productId = req.params.id
        const data = await productService.getOneProductService(productId);

        msg.message = "success"
        msg.data = data
        res.status(200).json(msg);
    } catch (err) {
        msg.message = "fail"
        msg.data = err.message
        res.status(400).json(msg);
    }
}
