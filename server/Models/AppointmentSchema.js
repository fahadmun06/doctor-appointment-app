const mongoose = require("mongoose")

const AppointmentSchema = mongoose.Schema({
    doctorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"doctor"
    },
    PatentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"pateint"
    },
    doctorName:{
        type:String,
        required:true
    },
    pateintName:{
        type:String,
        required:true
    },
    doctorEmail:{
        type:String,
        required:true
    },
    pateintEmail:{
        type:String,
        required:true
    },
    appointmentTime:{
        type:Date,
        default:Date.now()
    },
    notes:{
        type:String,
       required:true
    }
},{collection:"appointment"})

const appointment = mongoose.model("appointment",AppointmentSchema)

module.exports = appointment