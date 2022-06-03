const productRepo = require('./product.repository');


exports.addProductService = async (requestBody) => {
    return productRepo.addProductRepo(requestBody)

}

exports.getAllProductService = async () => {
    return productRepo.getAllProductRepo()

}

exports.getOneProductService = async (productId) => {
    return productRepo.getOneProductRepo(productId)

}
