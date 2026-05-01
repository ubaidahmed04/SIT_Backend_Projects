const express = require("express")
const {getUsersController, userRegister, userLogin} = require("../controller/userController")

const userRoute = express.Router()

userRoute.get('/getUsers', getUsersController)
userRoute.post('/register', userRegister)
userRoute.post('/login', userLogin)

module.exports = userRoute
