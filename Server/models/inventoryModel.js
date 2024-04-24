const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    InventoryID: {
        type: String,
        required: true,
    },
    InventoryType: {
        type: String,
        required: true,
    },
    InventoryName: {
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

const Inventory = mongoose.model("Inventory", InventorySchema);

module.exports = Inventory;
