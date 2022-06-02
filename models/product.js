const mongoose = require("mongoose");

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

        image: {
            type: String,
            default: "https://www.tisrilanka.org/wp-content/uploads/2016/01/default-placeholder.png",
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
    },
    {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);
