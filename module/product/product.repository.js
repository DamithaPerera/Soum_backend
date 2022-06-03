const product = require('../../models/product');


exports.addProductRepo = async (requestBody) => {
    return product.create(requestBody)

}
