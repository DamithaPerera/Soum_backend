const productCategoryRepo = require('./productCategory.repository');


exports.addProductCategoryService = async (requestBody) => {
    return productCategoryRepo.addProductCategoryRepo(requestBody)

}
