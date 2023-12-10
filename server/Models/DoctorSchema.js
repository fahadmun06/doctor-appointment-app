const mongoose = require("mongoose")

const DoctorSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    specailzation:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    productImg:{
        type:String,
        required:true
     },
    // shedule:{
    //      type:Array,
    //     required:true,
    // },
    date:{
        type:Date,
        default:Date.now()
    }
},{collection:"doctor"})

const doctors = mongoose.model("doctor",DoctorSchema)

module.exports = doctors