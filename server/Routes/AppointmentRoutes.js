const express = require("express")
const router  = express.Router()
const appointment = require("../Models/AppointmentSchema")
const doctor = require("../Models/DoctorSchema")
const pateint = require("../Models/PatientSchema")
const fetchUser = require("../middleware/fetchUser")

router.post("/:doctor",fetchUser,async(req,res)=>{
    try {

      const {notes} = req.body
        const pateint_id = req.user.id
        const doctor_id = req.params.doctor

       const pateintDetails = await pateint.findById({_id:pateint_id})
        const doctorDetail = await doctor.findById({_id:doctor_id})
        const {name,email} = doctorDetail
        const {pateintName,pateintEmail} = pateintDetails

        const appointmentDetils = {doctorName:name,pateintName:pateintName,doctorEmail:email,pateintEmail:pateintEmail,notes:notes}
        const addAppointment = new appointment(appointmentDetils)
        await addAppointment.save()
       res.status(200).json({message:addAppointment})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})
router.get("/showappointment",async(req,res)=>{
    try {
       const appointmentDetails = await appointment.find()
       res.status(200).json({message:appointmentDetails})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})


router.get("/getuser",fetchUser,async(req,res)=>{
    try {
       const userDetail = await auth.find({_id:req.user.id}).select("-password")
       res.json({message:userDetail})
       
    } catch (error) {
       res.status(500).json({message:"Internal Server Error"})
    }
})

module.exports = router