const mongoose = require("mongoose")

const PateintSchema = mongoose.Schema({
    pateintName:{
        type:String,
        required:true
    },
    pateintEmail:{
        type:String,
        required:true
    },
    selected:{
      type:String,
      required:true
    },
    appointmentDate:{
       type:String,
       required:true
    },
    medical:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
},{collection:"pateint"})

const pateint = mongoose.model("pateint",PateintSchema)

module.exports = pateint