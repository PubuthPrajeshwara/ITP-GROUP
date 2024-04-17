const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  itemType: { type: String, required: true },
  vendor: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  description: { type: String },
});

const InventoryItem = mongoose.model('InventoryItem', inventorySchema);

module.exports = InventoryItem;
