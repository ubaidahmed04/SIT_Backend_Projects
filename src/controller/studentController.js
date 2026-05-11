const Students = require("../models/studentSchema");
const bcrypt = require("bcrypt")
const addStudent = async(req, res) =>{
    const {name , email, password , role , marks} = req.body;
    console.log(name , email, password , role , marks)
    const  existUser = await Students.findOne({email});

    console.log(existUser)
    if(existUser){
        return res.status(403).json({
            status : false,
            message : "User already Exist"
        })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    await Students.create({name , email, password : hashPassword , role , marks})
     return res.status(201).json({
            status : true,
            message : "User Add Successfully"
        })
}

const getAllStudents = async (req, res) =>{
    try {
        const allStudents = await Students.find();
        return res.status(200).json({
            status : true,
            message : "User Add Successfully",
            data : allStudents
        })
    } catch (error) {
         return res.status(500).json({
            status : false,
            message : "Internal Server error"
        })
    }
}

const deleteStudent  = async(req, res) =>{
    try {
        const stdId = req.query.id
        console.log("stdId",stdId)
        await Students.findByIdAndDelete(stdId)
        return res.status(203).json({
            status : true,
            message : "User Delete Successfully"
        });

    } catch (error) {
         return res.status(500).json({
            status : false,
            message : "Internal Server Error"
        })
    }
}

module.exports = {
    addStudent,
    getAllStudents,
    deleteStudent
}