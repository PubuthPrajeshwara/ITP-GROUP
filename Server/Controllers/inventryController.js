const Booking = require("../models/InventoryModel");

const getAllBookings = async(req,res, next)=>{

    let Bookings;
    //get all bookings
    try{
        bookings = await Booking.find();
    }catch(err){
        console.log(err);
    }
    //not found
    if(!bookings){
        return res.status(404).json({message:"Booking not found"});
    }
    //display all bookings
    return res.status(200).json({bookings});
};

exports.getAllBookings = getAllBookings;