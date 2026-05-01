const express = require("express")
const app = express()
const dotenv = require("dotenv")
const userRoute = require("./routes/usersRoute.js")
const connectiondb = require("./config/connectdb.js")

dotenv.config()


connectiondb()
app.use('/api/auth', userRoute)

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("Server is running")
})