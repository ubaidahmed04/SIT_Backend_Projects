const express = require("express")
const {getUsersController, userRegister, userLogin, updateUser, addUser} = require("../controller/userController")
const authMiddleware = require("../middleware/authMiddleware.js")
const authorizeRoles = require("../middleware/authorizeRole.js")
const upload = require("../middleware/upload.js")

const userRoute = express.Router()

userRoute.get('/getUsers', authMiddleware,authorizeRoles("Admin", "Teacher", "Student"), getUsersController)
userRoute.post('/register', userRegister)
userRoute.post('/addUser', upload.single("image"), addUser)
userRoute.post('/login', userLogin)
userRoute.put('/updateUser', authMiddleware, authorizeRoles("Admin", "Teacher")  ,updateUser)

module.exports = userRoute
