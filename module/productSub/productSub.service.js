const addProductSubCategoryRepo = require('./productSub.repository');


exports.addProductSubCategoryService = async (requestBody) => {
    return addProductSubCategoryRepo.addProductSubCategoryRepo(requestBody)

}

exports.getAllProductSubCategoryService = async () => {
    return addProductSubCategoryRepo.getAllProductSubCategoryRepo()

}
