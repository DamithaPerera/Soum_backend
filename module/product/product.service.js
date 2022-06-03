const productRepo = require('./product.repository');


exports.addProductService = async (requestBody) => {
    return productRepo.addProductRepo(requestBody)

}

exports.getAllProductService = async (skip, limit) => {
    return productRepo.getAllProductRepo(+skip, +limit)

}

exports.getOneProductService = async (productId) => {
    return productRepo.getOneProductRepo(productId)

}

exports.updateOneProductService = async (productId, requestBody) => {
    return productRepo.updateOneProductRepo(productId, requestBody)

}
