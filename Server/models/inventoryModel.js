const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
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

const Items = mongoose.model("Items", ItemSchema);

module.exports = Items;
