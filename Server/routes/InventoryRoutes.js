const express = require('express');
const router = express.Router();
const Inventory = require('../model/InventoryModel');

router.post("/insertinventory", async (req, res) => {
    const { InventoryID, InventoryType, InventoryName, Vendor, UnitPrice, Description } = req.body;

    try {
        const existingInventory = await Inventory.findOne({ InventoryID });
        if (existingInventory) {
            return res.status(422).json("InventoryID must be unique.");
        }

        const addInventory = new Inventory({ InventoryID, InventoryType, InventoryName, Vendor, UnitPrice, Description });

        await addInventory.save();

        res.status(201).json(addInventory);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

router.get('/inventory', async (req, res) => {
    try {
        const getInventory = await Inventory.find({});
        res.status(200).json(getInventory);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

router.get('/inventory/:id', async (req, res) => {
    try {
        const getInventoryItem = await Inventory.findById(req.params.id);
        res.status(200).json(getInventoryItem);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

router.put('/updateinventory/:id', async (req, res) => {
    try {
        const { InventoryID, InventoryType, InventoryName, Vendor, UnitPrice, Description } = req.body;
        const updateInventory = await Inventory.findByIdAndUpdate(req.params.id, { InventoryID, InventoryType, InventoryName, Vendor, UnitPrice, Description }, { new: true });
        res.status(200).json(updateInventory);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

router.delete('/deleteinventory/:id', async (req, res) => {
    try {
        const deleteInventoryItem = await Inventory.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteInventoryItem);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

module.exports = router;
