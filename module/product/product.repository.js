const product = require('../../models/product');


exports.addProductRepo = async (requestBody) => {
    return product.create(requestBody)

}


exports.getAllProductRepo = async (skip, limit) => {
    return product.find({}, {}, {skip, limit}).populate({
        path: 'category',
        populate: {
            path: 'subCategory'
        }
    })

}

exports.getOneProductRepo = async (productId) => {
    return product.findById(productId).populate({
        path: 'category',
        populate: {
            path: 'subCategory'
        }
    })

}

exports.updateOneProductRepo = async (productId, requestBody) => {
    return product.updateOne({_id: productId}, {$set: requestBody}).exec()

}
