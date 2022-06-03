const productCategory = require('../../models/productSub');


exports.addProductSubCategoryRepo = async (requestBody) => {
    return productCategory.create(requestBody);
}
