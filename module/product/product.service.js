const productRepo = require('./product.repository');


exports.addProductService = async (requestBody) => {
    return productRepo.addProductRepo(requestBody)

}
