const addProductSubCategoryRepo = require('./productSub.repository');


exports.addProductSubCategoryService = async (requestBody) => {
    return addProductSubCategoryRepo.addProductSubCategoryRepo(requestBody)

}

exports.getAllProductSubCategoryService = async (skip, limit) => {
    return addProductSubCategoryRepo.getAllProductSubCategoryRepo(+skip, +limit)

}

exports.getOneProductSubCategoryService = async (subCatId) => {
    const subCategory = addProductSubCategoryRepo.getOneProductSubCategoryRepo(subCatId)
    if (!subCategory) {
        throw new Error(`Invalid subCategory id of ${subCatId}`)
    }
    return subCategory
}
