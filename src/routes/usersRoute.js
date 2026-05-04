const express = require("express")
const {getUsersController, userRegister, userLogin, updateUser} = require("../controller/userController")
const authMiddleware = require("../middleware/authMiddleware")

const userRoute = express.Router()

userRoute.get('/getUsers', authMiddleware,authorizeRole("Admin", "Teacher", "Student"), getUsersController)
userRoute.post('/register', userRegister)
userRoute.post('/login', userLogin)
userRoute.put('/updateUser', authMiddleware, authorizeRoles("Admin", "Teacher")  ,updateUser)

module.exports = userRoute
