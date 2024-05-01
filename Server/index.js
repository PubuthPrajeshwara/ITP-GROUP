const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");
const Product = require("./models/OnlineShopModels/Product");
const Users = require("./models/OnlineShopModels/Users");
const Order = require("./models/OnlineShopModels/Order");

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

/*const Product = mongoose.model("Product",{
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
})*/

app.post('/addproduct', async (req,res)=>{
    try {
        const products = await Product.find({});
        let id = 1;

        if(products.length > 0) {
            const lastProduct = products[products.length - 1];
            id = lastProduct.id + 1;
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

        const product = await Product.findOne({ id: productId });

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        product.name = req.body.name || product.name;
        product.category = req.body.category || product.category;
        product.brand = req.body.brand || product.brand;
        product.image = req.body.image || product.image;
        product.new_price = req.body.new_price || product.new_price;
        product.old_price = req.body.old_price || product.old_price;
        product.description = req.body.description || product.description;
        product.quantity = req.body.quantity || product.quantity;

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

/*const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,   
    },
    date:{
        type:Date,
        default:Date.now,
    }
})*/

app.post('/signup',async (req,res) =>{

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"eixsting user found with same email address"})

    }
    let cart = {};
    for (let i = 0; i < 300; i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data ={
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})
})

app.post('/login', async (req,res) => {
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"wrong Email Id"})
    }
})

app.get('/newcollections', async (req,res) =>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");
    res.send(newcollection);
})

const fetchUser = async (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"please authenticate using valid token"})
    }
    else{
        try{
            const data = jwt.verify(token, 'secret_ecom');
            req.user = data.user;
            next();
        } catch(error){
            res.status(401).send({errors:"please authenticate using valid token"})
        }
    }
}

app.post('/addtocart', fetchUser, async (req, res) => {
    try {
        const itemId = Number(req.body.itemId);
        if (isNaN(itemId)) {
            return res.status(400).json({ success: false, error: 'Invalid item ID' });
        }

        const product = await Product.findOne({ id: itemId });

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        if (product.quantity <= 0) {
            return res.status(400).json({ success: false, error: 'Product out of stock' });
        }

        product.quantity -= 1;
        await product.save();

        console.log("Added", itemId);

        let userData = await Users.findOne({ _id: req.user.id });
        userData.cartData[itemId] += 1;
        await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
        
        res.json({ success: true, message: "Item added to cart successfully" });
    } catch (error) {
        console.error("Error while adding item to cart:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


app.post('/removefromcart', fetchUser, async (req, res) => {
    try {
        const itemId = Number(req.body.itemId);

        if (isNaN(itemId)) {
            return res.status(400).json({ success: false, error: 'Invalid item ID' });
        }

        let userData = await Users.findOne({ _id: req.user.id });


        if (userData.cartData[itemId] > 0) {

            userData.cartData[itemId] -= 1;
            
            const product = await Product.findOne({ id: itemId });


            product.quantity += 1;

            await product.save();

            await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });

            console.log("Removed", itemId);
            res.json({ success: true, message: "Item removed from cart successfully" });
        } else {
            res.status(400).json({ success: false, error: "Item not found in cart" });
        }
    } catch (error) {
        console.error("Error while removing item from cart:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


app.post('/getcart',fetchUser,async (req,res) =>{
    console.log("GetCart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData)
})

// Function to generate a unique order ID
function generateOrderId() {
    // Generate a random string of characters for the order ID
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8;
    let orderId = '';
    for (let i = 0; i < length; i++) {
        orderId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return orderId;
}

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < 300 + 1; index++){
        cart[index]=0;
    }
    return cart;
}

const clearCart = async (userId) => {
    try {
        const defaultCart = getDefaultCart();
        await Users.findByIdAndUpdate(userId, {cartData : defaultCart });
        console.log("Cart cleared for user:", userId);
    } catch (error) {
        console.error("Error while clearing cart:", error);
    }
};


// Import necessary modules
/*const Order = mongoose.model("Order", {
    orderId: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    items: {
        type: Array,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: "processing",
    },
});*/


app.post('/checkout',fetchUser, async (req, res) => {
    try {

        const { fullName, email, address, contact, paymentMethod, items, totalAmount } = req.body;

        const orderId = generateOrderId();

        const order = new Order({
            orderId,
            fullName,
            email,
            address,
            contact,
            paymentMethod,
            items,
            totalAmount,
        });

        await order.save();

        const userId = req.user.id;

        await clearCart(userId);

        res.json({ success: true, orderId });
    } catch (error) {
        console.error("Error while saving order:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Creating API for getting the quantity of a specific product
app.get('/product/quantity/:id', async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await Product.findOne({ id: productId });

        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }

        res.json({ success: true, quantity: product.quantity });
    } catch (error) {
        console.error("Error while fetching product quantity:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Define route for fetching all orders data
app.get('/orders', async (req, res) => {
    try {

        const orders = await Order.find({});

        res.json({ success: true, orders });
    } catch (error) {
        console.error("Error while fetching orders:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Define route for delete order
app.delete('/order/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const deletedOrder = await Order.findOneAndDelete({ orderId });
        if (!deletedOrder) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }

        res.json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        console.error("Error while deleting order:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

// Define route for updating order status
app.put('/order/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const newStatus = req.body.status;
        const updatedOrder = await Order.findOneAndUpdate(
            { orderId: orderId },
            { status: newStatus },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }
        
        res.json({ success: true, order: updatedOrder });
    } catch (error) {
        console.error("Error while updating order status:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});




//Pathum's Booking routes

const Booking = require('./models/BookingModel');

app.post('/addbooking', async (req, res) => {
// Define route for updating order status
app.put('/order/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const newStatus = req.body.status;
        const updatedOrder = await Order.findOneAndUpdate(
            { orderId: orderId },
            { status: newStatus },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({ success: false, error: 'Order not found' });
        }
        
        res.json({ success: true, order: updatedOrder });
    } catch (error) {
        console.error("Error while updating order status:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});


  // Update booking status route
  app.put('/updateBookingStatus/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBooking = await Booking.findByIdAndUpdate(
        id,
        { $set: { status: 'accepted' } }, // Update status to 'accepted'
        { new: true }
      );
  
      if (!updatedBooking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
  
      res.status(200).json({ message: 'Booking status updated successfully', updatedBooking });
    } catch (error) {
      console.error('Error updating booking status:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

    // Update booking details route
app.put('/updateBookingDetails/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedBooking = await Booking.findByIdAndUpdate(
        id,
        req.body, // Update booking details
        { new: true }
      );

    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking details updated successfully', updatedBooking });
    } catch (error) {
    console.error('Error updating booking details:', error);
    res.status(500).json({ error: 'Server error' });
    }
    }); 


    //pathum's Service Routes

const Service = require('./models/ServiceModel');

app.post('/addservice', async (req, res) => {
  try {
    // Extract form data from request body
    const formData = req.body;

    // Create a new Service instance
    const newService = new Service(formData);

    // Save the booking to the database
    await newService.save();
    console.log("Service added");

    res.status(201).json({ message: 'Service Aded successfully' });
  } catch (error) {
    console.error('Error saving Service:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// 3. Create API endpoint to retrieve data
app.get('/allServices', async (req, res) => {
    try {
      const data = await Service.find();
      res.json(data);
      console.log("All Booking Requests Fetched");

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });


  // Define route for deleting booking requests
app.delete('/deleteBookingRequest/:id', async (req, res) => {
    const requestId = req.params.id;
  
    try {
      // Find the booking request by ID and delete it
      await Booking.findByIdAndDelete(requestId);
      res.status(200).send('Booking request deleted successfully');
    } catch (error) {
      console.error('Error deleting booking request:', error);
      res.status(500).send('Internal server error');
    }
  });
  });


  
  // Define route for deleting Services
app.delete('/deleteServices/:id', async (req, res) => {
    const requestId = req.params.id;
  
    try {
      // Find the Services by ID and delete it
      await Service.findByIdAndDelete(requestId);
      res.status(200).send('Booking request deleted successfully');
    } catch (error) {
      console.error('Error deleting booking request:', error);
      res.status(500).send('Internal server error');
    }
  });

  // Add a new route to handle service updates
app.put('/updateservice/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedService = req.body;

        // Find and update the service in the database
        await Service.findByIdAndUpdate(id, updatedService);
        console.log("Service updated");

        res.status(200).json({ message: 'Service updated successfully' });
    } catch (error) {
        console.error('Error updating Service:', error);
        res.status(500).json({ error: 'Server error' });
    }
});