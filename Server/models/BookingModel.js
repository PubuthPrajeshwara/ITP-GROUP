const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name:{
        type:String,
        require:true 
    },
    email:{
        type:String, 
        require:true 
    },
    phone:{
        type:Number, 
        require:true 
    },
    notes:{
        type:String, 
        require:true 
    },
    location:{
        type:String, 
        require:true 
    },
    serviceTyep:{
        type:String, 
        require:true, 
        enum:['Car Wash','Car Repair','Car Paint','Car Service']
    },
    vModel:{
        type:String,
        require:true 
    },
    date:{
        type:Date, 
        require:true 
    },
    time:{
        type:TimeRanges,
        require:true 
    }
});

module.exports = mongoose.model(
    'BookingModel',//file name
    bookingSchema //function schema
    )