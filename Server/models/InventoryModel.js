const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ItemID: {
        type: String,
        required: true,
    },
    ItemType: {
        type: String,
        required: true,
    },
    ItemName: {
        type: String,
        required: true,
    },
    Vendor: {
        type: String,
        required: true,
    },
    UnitPrice: {
        type: Number,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
