const express = require("express")
const cors = require("cors")
const connectToMongo = require("./db")
const app = express()
 app.use(express.json())
 app.use(cors())
require("dotenv").config()
connectToMongo()

// routes 
app.use("/pateint",require("./Routes/PateintRoutes"))
app.use("/doctor",require("./Routes/DoctorRoutes"))
app.use("/appointment",require("./Routes/AppointmentRoutes"))

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on ${port} port`)
})