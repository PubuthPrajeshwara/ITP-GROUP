const express = require('express');
const router = express.Router();
const Products = require("../models/InventroyModel");


// Inserting (Creating) Data:
router.post("/insertproduct", async (req, res) => {
    const { ItemID, ItemType, ItemName, Vendor, UnitPrice, Description } = req.body;

    try {
        // Check if the provided ItemID already exists
        const existingProduct = await Products.findOne({ ItemID });
        if (existingProduct) {
            return res.status(422).json("ItemID must be unique.");
        }

        // Create a new product document
        const addProduct = new Products({ ItemID, ItemType, ItemName, Vendor, UnitPrice, Description });

        // Save the new product to the database
        await addProduct.save();

        res.status(201).json(addProduct);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

// Retriving Data
router.get('/products', async (req, res) => {
    try {
        const getProducts = await Products.find({});
        res.status(200).json(getProducts);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

// Retriving Data(Individual)
router.get('/products/:id', async (req, res) => {
    try {
        const getProduct = await Products.findById(req.params.id);
        res.status(200).json(getProduct);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

// Updating Data
router.put('/updateproduct/:id', async (req, res) => {
    try {
        const { ItemID, ItemType, ItemName, Vendor, UnitPrice, Description } = req.body;
        const updateProducts = await products.findByIdAndUpdate(req.params.id, { ItemID, ItemType, ItemName, Vendor, UnitPrice, Description }, { new: true });
        res.status(200).json(updateProducts);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});

// Deleting Data:
router.delete('/deleteproduct/:id', async (req, res) => {
    try {
        const deleteProduct = await Products.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteProduct);
    } catch (err) {
        console.log(err);
        res.status(500).json("Internal server error");
    }
});
module.exports = router;
 
