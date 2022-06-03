const Joi = require('joi');

/**
 * addProductSubCategory validation
 * @param req
 * @param res
 * @param next
 */
exports.addProductSubCategoryValidation = (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().required().label('Category name Is required'),
        description: Joi.number().required().label('Category description Is required'),
        parent: Joi.string().required().label('Sub Category Id Is required'),
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
 * update Product Sub Category validation
 * @param req
 * @param res
 * @param next
 */
exports.updateProductSubCategoryValidation = (req, res, next) => {

    const schema = Joi.object({
        name: Joi.string().optional(),
        description: Joi.optional().required(),
        parent: Joi.string().optional()
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
 * get all Product sub Category validation
 * @param req
 * @param res
 * @param next
 */
exports.getAllProductSubCategoryValidation = (req, res, next) => {

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
 * get one Product Sub Category validation
 * @param req
 * @param res
 * @param next
 */
exports.getOneProductSubCategoryValidation = (req, res, next) => {

    const schema = Joi.object({
        id: Joi.string().required().label('Product sub category Id Is required'),
    });

    const result = schema.validate(req.params);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};


