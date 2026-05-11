const express = require("express")
const { addStudent, getAllStudents , deleteStudent} = require("../controller/studentController")

const Router = express.Router()

Router.post('/add', addStudent)
Router.get('/get', getAllStudents)
Router.delete('/delete', deleteStudent)

module.exports = Router