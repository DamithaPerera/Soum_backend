const express = require('express');
const router = express.Router();
const {
    addProductCategoryController, getAllProductCategoryController, getOneProductCategoryController,
    updateOneProductCategoryController
} = require('./productCategory.controller');

/**
 * @swagger
 * components:
 *   schemas:
 *    Category:
 *     type: object
 *     required:
 *      - name
 *      - description
 *     properties:
 *        name:
 *          type: string
 *          description: name of the category
 *        description:
 *          type: string
 *          description: description of the category
 *
 *
 *
 *     example:
 *        name: "category name"
 *        description: "category description"
 */

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category Api's
 */

/**
 * @swagger
 * /category:
 *  post:
 *   summary: Create new category
 *   tags: [Category]
 *   description: create new category
 *   requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Category'
 *
 *   responses:
 *    201:
 *     description: New Category created
 *    400:
 *      description: bad request
 *    500:
 *     description : error
 */
router.route('/').post(addProductCategoryController);

/**
 * @swagger
 * /category:
 *  get:
 *   summary: get all categories
 *   tags: [Category]
 *   description: get all categories
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
router.route('/').get(getAllProductCategoryController);

/**
 * @swagger
 * /category/{categoryId}:
 *  get:
 *   summary: get single category
 *   tags: [Category]
 *   description: get single category this action happen when the >>>>>>>
 *   parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The cat id

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
router.route('/:id').get(getOneProductCategoryController);

/**
 * @swagger
 * /category/{categoryId}:
 *  put:
 *   summary: update category
 *   tags: [Category]
 *   description: update new category
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
router.route('/:id').put(updateOneProductCategoryController);


module.exports = router;
