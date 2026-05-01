const express = require("express")
const app = express()
const dotenv = require("dotenv")
const connectiondb = require("./config/connectdb.js")
const userRoute = require("./routes/usersRoute.js")

dotenv.config()

connectiondb()
app.use(express.json())
app.use('/api/auth', userRoute)
// app.use('/api/product', productRoute)
app.get('/health', (req, res)=>{
     res.status(200).json({
        status: true,
        message: "Server is working fine"
    })
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log("Server is running")
})