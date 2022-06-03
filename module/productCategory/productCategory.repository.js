const productCategory = require('../../models/productCategory');


exports.addProductCategoryRepo = async (requestBody) => {
    return productCategory.create(requestBody);
}


exports.getAllProductCategoryRepo = async (skip, limit) => {
    return productCategory.find({}, {}, {skip, limit}).populate('subCategory').exec()
}

exports.getOneProductCategoryRepo = async (categoryId) => {
    return productCategory.findById(categoryId).populate('subCategory').exec()
}

exports.updateOneProductCategoryRepo = async (categoryId, requestBody) => {
    return productCategory.updateOne({_id: categoryId}, {$set: requestBody}).exec()
}
