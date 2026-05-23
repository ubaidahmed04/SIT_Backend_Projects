const dotenv = require("dotenv")
const express = require("express")
const app = express()
const connectiondb = require("./config/connectdb.js")
const userRoute = require("./routes/usersRoute.js")
const studentRoute = require("./routes/studentRoutes.js")
const cors = require('cors')
dotenv.config()

connectiondb()
app.use(cors())
app.use(express.json())
app.use('/api/auth', userRoute)
app.use('/api/student', studentRoute)
app.use('/api/department', studentRoute)


app.get('/health', (req, res)=>{
     res.status(200).json({
        status: true,
        message: "Server is working fine Update "
    })
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("Server is running")
})