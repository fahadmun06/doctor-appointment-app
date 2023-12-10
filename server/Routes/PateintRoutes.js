const express = require("express")
const router  = express.Router()
const pateint = require("../Models/PatientSchema")
const jwt = require("jsonwebtoken")


const sceret = process.env.JWT_SECRET


router.post("/addpateint",async(req,res)=>{
    try {
        const addPateint = new pateint(req.body)
        const data = {
            user:{
                id:addPateint._id
            }
        }
       const authToken =  jwt.sign(data,sceret)
        await addPateint.save()
       res.status(200).json({message:authToken})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})


module.exports = router