const {Router} = require('express');
const routes = Router();
const {
    addProductSubCategoryController, getAllProductSubCategoryController, getOneProductSubCategoryController,
    updateOneProductSubCategoryController
} = require('./productSub.controller');
const {
    addProductSubCategoryValidation, getAllProductSubCategoryValidation, getOneProductSubCategoryValidation,
    updateProductSubCategoryValidation
} = require("./productSub.validation");


/**
 * @swagger
 * components:
 *   schemas:
 *    subCategory:
 *     type: object
 *     required:
 *      - name
 *      - description
 *     properties:
 *        name:
 *          type: string
 *          description: name of the subCategory
 *        description:
 *          type: string
 *          description: description of the subCategory
 *
 *
 *
 *     example:
 *        name: "sub cat 1 update"
 *        description: "sub cat 1 for category 1 update"
 */

/**
 * @swagger
 * tags:
 *   name: subCategory
 *   description: subCategory Api's
 */

/**
 * @swagger
 * /subCategory:
 *  post:
 *   summary: Create new subCategory
 *   tags: [subCategory]
 *   description: create new subCategory
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/subCategory'
 *
 *   responses:
 *    201:
 *     description: New product created
 *    400:
 *      description: bad request
 *    500:
 *     description : error
 */
routes.post('/', addProductSubCategoryValidation, addProductSubCategoryController);

/**
 * @swagger
 * /subCategory:
 *  get:
 *   summary: get all subCategory
 *   tags: [subCategory]
 *   description: get all subCategory
 *
 *   parameters:
 *      - in: query
 *        name: skip
 *        schema:
 *          type: integer
 *        required: true
 *        description: Pagination page
 *      - in: query
 *        name: limit
 *        schema:
 *          type: integer
 *        required: true
 *        description: Pagination page limit
 *
 *
 *
 *   responses:
 *    200:
 *     description: success
 *    400:
 *      description: bad request
 *    500:
 *     description : error
 */
routes.get('/', getAllProductSubCategoryValidation, getAllProductSubCategoryController);

/**
 * @swagger
 * /subCategory/{subCatId}:
 *  get:
 *   summary: get single subCategory
 *   tags: [subCategory]
 *   description: get single subCategory
 *   parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subCategory id

 *
 *
 *
 *   responses:
 *    200:
 *     description: success
 *    400:
 *      description: bad request
 *    500:
 *     description : error
 */
routes.get('/:id', getOneProductSubCategoryValidation, getOneProductSubCategoryController);

/**
 * @swagger
 * /subCategory/{subCatId}:
 *  put:
 *   summary: update subCategory
 *   tags: [subCategory]
 *   description: update  subCategory
 *   requestBody:
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/subCategory'

 *
 *
 *
 *   responses:
 *    200:
 *     description: success
 *    400:
 *      description: bad request
 *    500:
 *     description : error
 */
routes.put('/:id', updateProductSubCategoryValidation, updateOneProductSubCategoryController);


module.exports = routes;
