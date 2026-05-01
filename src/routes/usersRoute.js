const express = require("express")
const {getUsersController, userRegister, userLogin, updateUser} = require("../controller/userController")

const userRoute = express.Router()

userRoute.get('/getUsers', getUsersController)
userRoute.post('/register', userRegister)
userRoute.post('/login', userLogin)
userRoute.put('/updateUser', updateUser)

module.exports = userRoute
