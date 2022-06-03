const addProductSubCategoryRepo = require('./productSub.repository');


exports.addProductSubCategoryService = async (requestBody) => {
    return addProductSubCategoryRepo.addProductSubCategoryRepo(requestBody)

}
