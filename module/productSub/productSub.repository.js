const productCategory = require('../../models/productSub');


exports.addProductSubCategoryRepo = async (requestBody) => {
    return productCategory.create(requestBody);
}

exports.getAllProductSubCategoryRepo = async () => {
    return productCategory.find({}).populate('parent').exec();
}

exports.getOneProductSubCategoryRepo = async (subCatId) => {
    return productCategory.findById(subCatId).populate('parent').exec();
}
