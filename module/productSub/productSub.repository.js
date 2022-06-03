const productCategory = require('../../models/productSub');


exports.addProductSubCategoryRepo = async (requestBody) => {
    return productCategory.create(requestBody);
}

exports.getAllProductSubCategoryRepo = async (skip, limit) => {
    return productCategory.find({}, {}, {skip, limit}).populate('parent', '-subCategory').exec();
}

exports.getOneProductSubCategoryRepo = async (subCatId) => {
    return productCategory.findById(subCatId).populate('parent').exec();
}

exports.updateOneProductSubCategoryRepo = async (subCatId, requestBody ) => {
    return productCategory.updateOne({_id: subCatId}, {$set: requestBody}).exec()
}
