const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const productCategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "please add an category name"],
            minlength: [3, "too short"],
            maxlength: [100, "Too Long"],
            unique: true,
        },
        description: {
            type: String,
            trim: true,
            required: [true, "please add  category description"],
            minlength: [3, "too short"],
            maxlength: [100, "Too Long"],
        },
        subCategory: {
            type: ObjectId,
            ref: "ProductSub"
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("ProductCategory", productCategorySchema);
