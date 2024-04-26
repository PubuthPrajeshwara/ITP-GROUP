const express = require('express');
const router = express.Router();
const Inventory = require('./models/InventoryModel');

router.post("/insertinventory", async (req, res) => {
    const { InventoryType, InventoryName, Vendor, UnitPrice, UnitNo, Description } = req.body;

    try {
        
        const addInventory = new Inventory({ InventoryType, InventoryName, Vendor, UnitPrice, UnitNo, Description });
 
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
      
        const { InventoryType, InventoryName, Vendor, UnitPrice, UnitNo, Description } = req.body;
        const updateInventory = await Inventory.findByIdAndUpdate(req.params.id, { InventoryType, InventoryName, Vendor, UnitPrice, UnitNo, Description }, { new: true });
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
