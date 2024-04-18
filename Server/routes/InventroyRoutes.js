const express = require('express');
const router = express.Router();
const items = require('../models/Items');

router.post("/insertitem", async (req, res) => {
    const { ItemID, ItemType, ItemName, Vendor, UnitPrice, Description } = req.body;

    try {
        const existingItem = await items.findOne({ ItemID });
        if (existingItem) {
            return res.status(422).json("ItemID must be unique.");
        }

        const addItem = new items({ ItemID, ItemType, ItemName, Vendor, UnitPrice, Description });

        await addItem.save();

        res.status(201).json(addItem);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

router.get('/items', async (req, res) => {
    try {
        const getItems = await items.find({});
        res.status(200).json(getItems);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

router.get('/items/:id', async (req, res) => {
    try {
        const getItem = await items.findById(req.params.id);
        res.status(200).json(getItem);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

router.put('/updateitem/:id', async (req, res) => {
    try {
        const { ItemID, ItemType, ItemName, Vendor, UnitPrice, Description } = req.body;
        const updateItem = await items.findByIdAndUpdate(req.params.id, { ItemID, ItemType, ItemName, Vendor, UnitPrice, Description }, { new: true });
        res.status(200).json(updateItem);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

router.delete('/deleteitem/:id', async (req, res) => {
    try {
        const deleteItem = await items.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteItem);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

module.exports = router;
