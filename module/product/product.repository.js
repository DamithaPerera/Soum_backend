const product = require('../../models/product');


exports.addProductRepo = async (requestBody) => {
    return product.create(requestBody)

}


exports.getAllProductRepo = async () => {
    return product.create()

}

exports.getOneProductRepo = async (productId) => {
    return product.findById(productId)

}
