const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB
mongoose.connect("mongodb+srv://vehicleitp:16873Myno@test.fw5mj0t.mongodb.net/itpdb");

//API Creation

app.get("/",(req, res) =>{
    res.send("Express App is running")
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

//Creating upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

//Schema for Creating Products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,

    },
    category:{
        type:String,
        required:true,
    },
    brand:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    }
})

app.post('/addproduct', async (req,res)=>{
    try {
        const products = await Product.find({});
        let id = 1; // Default id

        if(products.length > 0) {
            const lastProduct = products[products.length - 1];
            id = lastProduct.id + 1; // Increment id based on the last product
        }

        const product = new Product({
            id: id,
            name: req.body.name,
            category: req.body.category,
            brand: req.body.brand,
            image: req.body.image,
            new_price: req.body.new_price,
            old_price: req.body.old_price,
            description: req.body.description,
            quantity: Number(req.body.quantity),
        });

        console.log(product);
        await product.save();
        console.log("Saved");
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error("Error while adding product:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
})


// Creating API for deleting Product

app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// Creating API for getting all products

app.get('/allproducts',async (req, res)=>{
    let products = await Product.find({})
    console.log("All Products Fetched");
    res.send(products);
})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port " + port)
    }else{
        console.log("Error : " + errror)
    }
})

// Creating API for update product
app.put('/updateproduct/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        
        // Find the product by ID
        const product = await Product.findOne({ id: productId });

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        // Update product fields with new values
        product.name = req.body.name || product.name;
        product.category = req.body.category || product.category;
        product.brand = req.body.brand || product.brand;
        product.image = req.body.image || product.image;
        product.new_price = req.body.new_price || product.new_price;
        product.old_price = req.body.old_price || product.old_price;
        product.description = req.body.description || product.description;
        product.quantity = req.body.quantity || product.quantity;

        // Save the updated product
        await product.save();

        console.log("Updated Product:", product);
        res.json({ success: true, product });
    } catch (error) {
        console.error("Error while updating product:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Creating API for getting a specific product by ID
app.get('/product/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        
        // Find the product by ID
        const product = await Product.findOne({ id: productId });

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.json({ success: true, product });
    } catch (error) {
        console.error("Error while fetching product:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});
