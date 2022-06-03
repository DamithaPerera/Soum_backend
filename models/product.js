const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const ProductSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, "please add product name "],
            trim: true,
            maxlength: [50, "name can not be more than 50 characters"],
            text: true, //used when use search
        },
        price: {
            type: Number,
            required: true,
            trim: true,
            maxlength: [32, "price can not be more than 32 characters"],
        },

        images: {
            type: Array
        },
        productState: {
            type: String,
            enum: ["available", "draft"],
            default: "available",
        },
        payment: {
            type: String,
            enum: ["reserved", "sold", "returned"],
        },
        paymentSuccess: {
            type: Boolean,
            default: false,
        },
        category: {
            type: ObjectId,
            ref: "ProductCategory"
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);
