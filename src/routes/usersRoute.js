const express = require("express")

const userRoute = express.Router()

userRoute.get('/getUsers', (req ,res)=>{
        res.status(200).json({
        status: true,
        message: "Server is working fine"
    })
})
userRoute.post('/register', (req ,res)=>{
        res.status(200).json({
        status: true,
        message: "Server is working fine"
    })
})
userRoute.post('/login', (req ,res)=>{
        res.status(200).json({
        status: true,
        message: "Server is working fine"
    })
})
module.exports = userRoute
