const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name:{
        type:String, //data type
        require:true //validate
    },
    email:{
        type:String, //data type
        require:true //validate
    },
    phone:{
        type:Number, //data type
        require:true //validate
    },
    notes:{
        type:String, //data type
        require:true //validate
    },
    location:{
        type:String, //data type
        require:true //validate
    },
    serviceTyep:{
        type:String, //data type
        require:true, //validate
        enum:['Car Wash','Car Repair','Car Paint','Car Service']
    },
    vModel:{
        type:String, //data type
        require:true //validate
    },
    date:{
        type:Date, //data type
        require:true //validate
    },
    time:{
        type:TimeRanges, //data type
        require:true //validate
    }
});

module.exports = mongoose.model(
    "BookingModel",//file name
    bookingSchema //function schema
    )