const {Router} = require('express');
const routes = Router();
const {
    getAllProductController, addProductController, getOneProductController, updateOneProductController,
} = require('./product.controller');
const {addProductValidation, updateProductValidation, getOneProductValidation, getAllProductValidation} = require('./product.validation');

/**
 * @swagger
 * components:
 *   schemas:
 *    product:
 *     type: object
 *     required:
 *      - name
 *      - description
 *     properties:
 *        productName:
 *          type: string
 *          description: name of the productName
 *        price:
 *          type: integer
 *          description: price of the product
 *        images:
 *          type: array
 *          description: images of the product
 *
 *
 *
 *     example:
 *        productName: "product 1"
 *        price: 70.55
 *        images: [ "https://www.vespoe.com/pub/media/avatar/test-product.jpg"]
 */

/**
 * @swagger
 * tags:
 *   name: product
 *   description: product Api's
 */

/**
 * @swagger
 * /product:
 *  post:
 *   summary: Create new product
 *   tags: [product]
 *   description: create new product
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/product'
 *
 *   responses:
 *    201:
 *     description: New product created
 *    400:
 *      description: bad request
 *    500:
 *     description : error
 */
routes.post('/', addProductValidation, addProductController);

/**
 * @swagger
 * /product:
 *  get:
 *   summary: get all products
 *   tags: [product]
 *   description: get all products
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
routes.get('/', getAllProductValidation, getAllProductController);

/**
 * @swagger
 * /product/{productId}:
 *  get:
 *   summary: get single product
 *   tags: [product]
 *   description: get single product
 *   parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id

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
routes.get('/:id', getOneProductValidation, getOneProductController);


/**
 * @swagger
 * /product/{productId}:
 *  put:
 *   summary: update product
 *   tags: [product]
 *   description: update  product
 *   requestBody:
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'

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
routes.put('/:id', updateProductValidation, updateOneProductController);


module.exports = routes;
