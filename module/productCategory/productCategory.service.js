const productCategoryRepo = require('./productCategory.repository');


exports.addProductCategoryService = async (requestBody) => {
    return productCategoryRepo.addProductCategoryRepo(requestBody)

}


exports.getAllProductCategoryService = async () => {
    return productCategoryRepo.getAllProductCategoryRepo()

}

exports.getOneProductCategoryService = async (categoryId) => {
    const category = await productCategoryRepo.getOneProductCategoryRepo(categoryId)
    if (!category) {
        throw new Error(`Invalid category id of ${categoryId}`)
    }
    return category

}
