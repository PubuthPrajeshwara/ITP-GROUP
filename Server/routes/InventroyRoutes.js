const express = require('express');
const InventoryItem = require("../models/InventoryItem");  

const router = express.Router();

// Save inventory item
router.post('/save', (req, res) => {
    let newInventoryItem = new InventoryItem(req.body); // Create a new inventory item object

    newInventoryItem.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Inventory item saved successfully"
        });
    });
});

module.exports = router;
