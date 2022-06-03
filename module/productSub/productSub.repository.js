const productCategory = require('../../models/productSub');


exports.addProductSubCategoryRepo = async (requestBody) => {
    return productCategory.create(requestBody);
}

exports.getAllProductSubCategoryRepo = async () => {
    return productCategory.find({});
}
