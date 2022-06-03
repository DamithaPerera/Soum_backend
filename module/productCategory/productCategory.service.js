const productCategoryRepo = require('./productCategory.repository');


exports.addProductCategoryService = async (requestBody) => {
    return productCategoryRepo.addProductCategoryRepo(requestBody)

}


exports.getAllProductCategoryService = async () => {
    return productCategoryRepo.getAllProductCategoryRepo()

}
