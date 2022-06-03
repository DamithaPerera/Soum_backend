const addProductSubCategoryRepo = require('./productSub.repository');


exports.addProductSubCategoryService = async (requestBody) => {
    return addProductSubCategoryRepo.addProductSubCategoryRepo(requestBody)

}

exports.getAllProductSubCategoryService = async () => {
    return addProductSubCategoryRepo.getAllProductSubCategoryRepo()

}

exports.getOneProductSubCategoryService = async (subCatId) => {
    const subCategory = addProductSubCategoryRepo.getOneProductSubCategoryRepo(subCatId)
    if (!subCategory) {
        throw new Error(`Invalid subCategory id of ${subCatId}`)
    }
    return subCategory
}
