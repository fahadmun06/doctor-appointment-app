const express = require("express")
const router  = express.Router()
const doctor = require("../Models/DoctorSchema")
const multer = require("multer")



const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
       cb(null,"public/uploads/")
    },
    filename:(req,file,cb)=>{
       cb(null,`${Date.now()}-${file.originalname}`)
    }
 }) 
 
 const fileFilter = (req,file,cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ){
       cb(null,true)
    }else{
       cb(null,false)
    }
 }
 
 const upload = multer({
       storage:storage,
       limits:{
          fileSize:1024*1024*5
       },
       fileFilter:fileFilter
 })

router.post("/adddoctor",upload.single("file"),async(req,res)=>{
    try {

       const data = req.body
       const file = req.file.path
      const {name,specailzation,email,phone} = data

      const doctorDetails = {name,specailzation,email,phone,productImg:file}
     
        const addDoctor = new doctor(doctorDetails)
        console.log(addDoctor)
        await addDoctor.save()
       res.status(200).json({message:addDoctor})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})
router.get("/showdoctor",async(req,res)=>{
    try {
         const all_doctors = await doctor.find({})
       res.status(200).json({message:all_doctors})
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})


module.exports = router