const Joi = require('joi');

/**
 * addProduct validation
 * @param req
 * @param res
 * @param next
 */
exports.addProductValidation = (req, res, next) => {

    const schema = Joi.object({
        productName: Joi.string().required().label('Product name Is required'),
        price: Joi.number().required().label('Price Is required'),
        images: Joi.array().required().label('Images Is required'),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};

/**
 * update Product validation
 * @param req
 * @param res
 * @param next
 */
exports.updateProductValidation = (req, res, next) => {

    const schema = Joi.object({
        productName: Joi.string().required(),
        price: Joi.number().required(),
        images: Joi.array().required(),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};

/**
 * get all Product validation
 * @param req
 * @param res
 * @param next
 */
exports.getAllProductValidation = (req, res, next) => {

    const schema = Joi.object({
        skip: Joi.number().required(),
        limit: Joi.number().required()
    });

    const result = schema.validate(req.query);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};

/**
 * get one Product validation
 * @param req
 * @param res
 * @param next
 */
exports.getOneProductValidation = (req, res, next) => {

    const schema = Joi.object({
        id: Joi.string().required().label('Product Id Is required'),
    });

    const result = schema.validate(req.params);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};


