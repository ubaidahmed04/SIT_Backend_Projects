const express = require("express")
const { addStudent, getAllStudents , deleteStudent} = require("../controller/studentController")
const authMiddleware = require("../middleware/authMiddleware")
const authorizeRoles = require("../middleware/authorizeRole")

const Router = express.Router()

Router.post('/add', authMiddleware ,authorizeRoles("admin", "teacher"), addStudent)
Router.get('/get',  authMiddleware, authorizeRoles("admin", "teacher", "student"), getAllStudents)
Router.delete('/delete',authMiddleware, deleteStudent)

module.exports = Router