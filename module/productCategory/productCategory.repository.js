const productCategory = require('../../models/productCategory');


exports.addProductCategoryRepo = async (requestBody) => {
        return productCategory.create(requestBody);
}
