const Inventory = require("../models/InventoryModel");

const getAllInventory = async (req, res, next) => {
    let inventory;
    // Get all inventory
    try {
        inventory = await Inventory.find();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
    // Not found
    if (!inventory || inventory.length === 0) {
        return res.status(404).json({ message: "Inventory not found" });
    }
    // Display all inventory
    return res.status(200).json({ inventory });
};

exports.getAllInventory = getAllInventory;
