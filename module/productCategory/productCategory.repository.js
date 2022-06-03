const productCategory = require('../../models/productCategory');


exports.addProductCategoryRepo = async (requestBody) => {
        return productCategory.create(requestBody);
}


exports.getAllProductCategoryRepo = async () => {
    return productCategory.find({});
}

exports.getOneProductCategoryRepo = async (categoryId) => {
    return productCategory.findById(categoryId);
}
