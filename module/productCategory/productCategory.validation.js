const Joi = require('joi');

/**
 * addProductCategory validation
 * @param req
 * @param res
 * @param next
 */
exports.addProductCategoryValidation = (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required().label('Category name Is required'),
        description: Joi.number().required().label('Category description Is required'),
        subCategory: Joi.string().optional()
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
 * update Product Category validation
 * @param req
 * @param res
 * @param next
 */
exports.updateProductCategoryValidation = (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().optional(),
        description: Joi.optional().required(),
        subCategory: Joi.string().optional()
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
 * get all Product Category validation
 * @param req
 * @param res
 * @param next
 */
exports.getAllProductCategoryValidation = (req, res, next) => {

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
 * get one Product Category validation
 * @param req
 * @param res
 * @param next
 */
exports.getOneProductCategoryValidation = (req, res, next) => {

    const schema = Joi.object({
        id: Joi.string().required().label('Product category Id Is required'),
    });

    const result = schema.validate(req.params);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};


